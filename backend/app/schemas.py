from pydantic import BaseModel


class Student(BaseModel):
    age: int
    gender: str
    degree: str
    branch: str
    cgpa: float
    internships: int
    projects: int
    coding_skills: int
    communication_skills: int
    aptitude_test_score: int
    soft_skills_rating: int
    certifications: int
    backlogs: int


class PredictionResponse(BaseModel):
    prediction: str
    confidence: float