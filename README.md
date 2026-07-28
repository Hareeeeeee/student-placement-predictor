# 🎓 Student Placement Predictor

A full-stack machine learning web application that predicts whether a student is likely to be placed based on academic and personal attributes. The application provides real-time predictions, stores prediction history, and provides an analytics dashboard for visualization.

---


## ✨ Features

- Machine Learning based placement prediction
- Interactive analytics dashboard
- Prediction history
- Placement statistics and trends
- CSV upload support
- Prediction confidence score
- RESTful API with FastAPI
- Cloud deployment using Vercel and Render
- Docker support
- Docker Compose support
- GitHub Actions CI pipeline

---

# 🛠 Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Axios
- Recharts
- Framer Motion

### Backend

- FastAPI
- Python
- Scikit-learn
- Pandas
- NumPy

### Database

- Supabase (PostgreSQL)

### DevOps

- Docker
- Docker Compose
- GitHub Actions

### Deployment

- Vercel
- Render

---

# 📂 Project Structure

```text
student-placement-predictor/
│
├── backend/
│   ├── app/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   ├── package.json
│   └── ...
│
├── docker-compose.yml
└── README.md
```

---

# ⚙️ Local Setup

Clone the repository:

```bash
git clone https://github.com/Hareeeeeee/student-placement-predictor.git
cd student-placement-predictor
```

### Backend

```bash
cd backend

python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

### Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🐳 Docker

Start the complete application:

```bash
docker compose up --build
```

Backend:

```
http://localhost:8000
```

Frontend:

```
http://localhost:5173
```

Stop the application:

```bash
docker compose down
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/` | Health Check |
| POST | `/predict` | Predict placement |
| GET | `/dashboard` | Dashboard statistics |
| GET | `/history` | Prediction history |
| GET | `/recent-predictions` | Recent predictions |
| GET | `/placement-distribution` | Placement distribution |
| GET | `/branch-distribution` | Branch analytics |
| GET | `/prediction-trend` | Daily prediction trend |
| DELETE | `/prediction/{id}` | Delete prediction |

---

# 🤖 Machine Learning

The application uses a **Random Forest Classifier** trained on student placement data to predict placement outcomes and generate confidence scores.

---

# 🔄 Continuous Integration

GitHub Actions automatically runs on every push and pull request to:

- Install backend dependencies
- Install frontend dependencies
- Build the React application
- Build the backend Docker image
- Build the frontend Docker image

---

# 🌐 Deployment

| Service | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Render |
| Database | Supabase |

---

# 📌 Future Improvements

- JWT Authentication
- User Accounts
- Explainable AI (SHAP)
- Kubernetes Deployment
- AWS/GCP Deployment

---

## ⭐ If you found this project useful, consider giving it a star.