from fastapi import APIRouter

from app.schemas import Student, PredictionResponse
from app.services.prediction_service import predict_student

router = APIRouter()


@router.post("/predict", response_model=PredictionResponse)
def predict(student: Student):

    prediction, confidence = predict_student(student)

    return PredictionResponse(
        prediction=prediction,
        confidence=confidence
    )