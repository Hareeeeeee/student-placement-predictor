import joblib
import pandas as pd

from app.database import supabase

pipeline = joblib.load("app/models/model.pkl")


def predict_student(student):

    input_df = pd.DataFrame([{
        "Age": student.age,
        "Gender": student.gender,
        "Degree": student.degree,
        "Branch": student.branch,
        "CGPA": student.cgpa,
        "Internships": student.internships,
        "Projects": student.projects,
        "Coding_Skills": student.coding_skills,
        "Communication_Skills": student.communication_skills,
        "Aptitude_Test_Score": student.aptitude_test_score,
        "Soft_Skills_Rating": student.soft_skills_rating,
        "Certifications": student.certifications,
        "Backlogs": student.backlogs
    }])

    prediction = pipeline.predict(input_df)[0]
    confidence = pipeline.predict_proba(input_df).max()

    supabase.table("predictions").insert({
        "age": student.age,
        "gender": student.gender,
        "degree": student.degree,
        "branch": student.branch,
        "cgpa": student.cgpa,
        "internships": student.internships,
        "projects": student.projects,
        "coding_skills": student.coding_skills,
        "communication_skills": student.communication_skills,
        "aptitude_test_score": student.aptitude_test_score,
        "soft_skills_rating": student.soft_skills_rating,
        "certifications": student.certifications,
        "backlogs": student.backlogs,
        "prediction": prediction,
        "confidence": round(float(confidence), 4)
    }).execute()

    return prediction, round(float(confidence), 4)