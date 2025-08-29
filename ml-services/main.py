from fastapi import FastAPI
from pydantic import BaseModel
import numpy as np

# --- Application Setup ---
app = FastAPI(
    title="Fuel Blending ML Services",
    description="Provides AI/ML models for anomaly detection and recommendations.",
    version="1.0.0"
)

# --- Pydantic Models for Request/Response ---
class AnomalyDetectionRequest(BaseModel):
    timestamp: str
    site_id: str
    rvp_psi: float
    volume_bbls: float
    temperature_f: float
    sulfur_ppm: float

class AnomalyDetectionResponse(BaseModel):
    is_anomaly: bool
    confidence_score: float
    reason: str

class RecommendationRequest(BaseModel):
    context: dict

class RecommendationResponse(BaseModel):
    recommendations: dict

# --- API Endpoints ---

@app.get("/", tags=["Health Check"])
async def read_root():
    """Health check endpoint."""
    return {"status": "ML Service is running"}

@app.post("/api/v1/anomaly-detection", response_model=AnomalyDetectionResponse, tags=["ML Models"])
async def detect_anomaly(request: AnomalyDetectionRequest):
    """
    Detects anomalies in real-time operational data.
    (This is a mock implementation)
    """
    # Mock logic: flag an anomaly if RVP is unusually high or low
    is_anomaly = False
    reason = "All parameters within normal range."
    if request.rvp_psi > 9.0 or request.rvp_psi < 7.0:
        is_anomaly = True
        reason = f"RVP level ({request.rvp_psi} psi) is outside the typical 7.0-9.0 range."

    return {
        "is_anomaly": is_anomaly,
        "confidence_score": np.random.uniform(0.85, 0.99) if is_anomaly else np.random.uniform(0.1, 0.4),
        "reason": reason
    }

@app.post("/api/v1/recommendations", response_model=RecommendationResponse, tags=["ML Models"])
async def get_recommendations(request: RecommendationRequest):
    """
    Generates AI-powered recommendations based on the current context.
    (This is a mock implementation)
    """
    # Mock recommendations
    recommendations = {
        'blend_optimization': 'Increase component X by 5% for optimal RVP.',
        'quality_improvement': 'Run additional sulfur test on Tank T-12.',
        'cost_reduction': 'Switch to Supplier B for butane to save 2%.',
    }
    return {"recommendations": recommendations}
