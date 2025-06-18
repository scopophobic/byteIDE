from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

# Allow CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # replace with actual domain in prod
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

JUDGE0_URL = "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true"

@app.get("/")
async def root():
    return {"message": "byteIDE is running"}


@app.post("/run")
async def run_code(request: Request):
    data = await request.json()
    payload = {
        "source_code": data["code"],
        "language_id": data["language_id"],
        "stdin": data["input"]
    }
    response = requests.post(JUDGE0_URL, json=payload)
    return response.json()
