from fastapi import FastAPI, Request
import requests

app = FastAPI()
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
    resp = requests.post(JUDGE0_URL, json=payload)
    return resp.json()