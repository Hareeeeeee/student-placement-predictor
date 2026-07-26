import joblib
import pandas as pd

from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import train_test_split

# -----------------------


# Load Dataset
# -----------------------
df = pd.read_csv("../datasets/train.csv")

df = df.drop(columns=["Student_ID"])

X = df.drop(columns=["Placement_Status"])
y = df["Placement_Status"]

print(df["Placement_Status"].value_counts())

print("\nDuplicate rows:", df.duplicated().sum())
print(df.head(20))


# -----------------------
# Categorical & Numerical Columns
# -----------------------
categorical_cols = ["Gender", "Degree", "Branch"]

numerical_cols = [
    "Age",
    "CGPA",
    "Internships",
    "Projects",
    "Coding_Skills",
    "Communication_Skills",
    "Aptitude_Test_Score",
    "Soft_Skills_Rating",
    "Certifications",
    "Backlogs",
]

# -----------------------
# Preprocessor
# -----------------------
preprocessor = ColumnTransformer(
    transformers=[
        (
            "cat",
            OneHotEncoder(handle_unknown="ignore"),
            categorical_cols,
        ),
        (
            "num",
            "passthrough",
            numerical_cols,
        ),
    ]
)

# -----------------------
# Pipeline
# -----------------------
pipeline = Pipeline(
    steps=[
        ("preprocessor", preprocessor),
        ("classifier", RandomForestClassifier(random_state=42))
    ]
)

# -----------------------
# Train Test Split
# -----------------------
X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

# -----------------------
# Train
# -----------------------
pipeline.fit(X_train, y_train)

import pandas as pd

feature_names = pipeline.named_steps["preprocessor"].get_feature_names_out()
importances = pipeline.named_steps["classifier"].feature_importances_

importance_df = (
    pd.DataFrame({
        "Feature": feature_names,
        "Importance": importances
    })
    .sort_values("Importance", ascending=False)
)

print(importance_df.head(20))

# -----------------------
# Evaluate
# -----------------------
predictions = pipeline.predict(X_test)

print("Accuracy:", accuracy_score(y_test, predictions))
print(classification_report(y_test, predictions))

# -----------------------
# Save
# -----------------------
joblib.dump(pipeline, "models/model.pkl")

print("\nModel Saved!")