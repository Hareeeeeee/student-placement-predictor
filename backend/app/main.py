from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.prediction import router
from app.database import supabase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/")
def root():
    return {"message": "API Running"}

@app.get("/dashboard")
async def dashboard():

    response = (
        supabase
        .table("predictions")
        .select("prediction, confidence")
        .execute()
    )

    rows = response.data or []

    total = len(rows)

    placed = sum(
        1
        for row in rows
        if row["prediction"] == "Placed"
    )

    not_placed = total - placed

    avg_confidence = (
        sum(row["confidence"] for row in rows) / total
        if total
        else 0
    )

    return {
        "total_predictions": total,
        "placed": placed,
        "not_placed": not_placed,
        "average_confidence": round(avg_confidence * 100, 2),
    }

from app.database import supabase


@app.get("/recent-predictions")
async def recent_predictions():
    response = (
        supabase
        .table("predictions")
        .select("*")
        .order("id", desc=True)
        .limit(5)
        .execute()
    )

    return response.data

from collections import Counter

@app.get("/placement-distribution")
async def placement_distribution():

    response = (
        supabase
        .table("predictions")
        .select("prediction")
        .execute()
    )

    counter = Counter(row["prediction"] for row in response.data)

    return [
        {
            "name": "Placed",
            "value": counter.get("Placed", 0)
        },
        {
            "name": "Not Placed",
            "value": counter.get("Not Placed", 0)
        }
    ]

from collections import Counter

@app.get("/branch-distribution")
async def branch_distribution():

    response = (
        supabase
        .table("predictions")
        .select("branch")
        .execute()
    )

    branches = [row["branch"].strip() for row in response.data]

    counter = Counter(branches)

    return [
        {
            "branch": branch,
            "count": count
        }
        for branch, count in counter.items()
    ]

from collections import Counter

@app.get("/prediction-trend")
async def prediction_trend():

    response = (
        supabase
        .table("predictions")
        .select("created_at")
        .execute()
    )

    dates = [
        row["created_at"][:10]
        for row in response.data
    ]

    counter = Counter(dates)

    return [
        {
            "date": date,
            "count": count
        }
        for date, count in sorted(counter.items())
    ]

@app.get("/history")
async def prediction_history():

    response = (
        supabase
        .table("predictions")
        .select("*")
        .order("created_at", desc=True)
        .execute()
    )

    print(response.data)

    return response.data



from fastapi import HTTPException

@app.delete("/prediction/{prediction_id}")
async def delete_prediction(prediction_id: int):

    response = (
        supabase
        .table("predictions")
        .delete(count="exact")
        .eq("id", prediction_id)
        .execute()
    )

    print("Count:", response.count)
    print("Data:", response.data)

    return {
        "count": response.count,
        "data": response.data,
    }

@app.get("/test")
async def test():
    response = supabase.table("predictions").select("id").limit(5).execute()
    print(response.data)
    return response.data