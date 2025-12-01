# 두유 Package Inspection System

수정된 두유 패키징을 수정 전 이미지와 수정 후 이미지를 비교함


## 설치 및 실행

### 필요 조건

- Python 3.8 이상
- pip 또는 poetry

### 설치

```bash
# 가상 환경 생성 (선택 사항)
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 또는
venv\Scripts\activate  # Windows

# 패키지 설치
pip install -r requirements.txt
```


### 실행

```bash
python run.py
```

서버는 기본적으로 `http://localhost:8000`에서 실행됩니다.

## API 문서

서버 실행 후 다음 URL에서 API 문서를 확인할 수 있습니다:

- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`



## 사용 예시

### cURL을 사용한 이미지 디블러링 요청

```bash
curl -X 'POST' \
  'http://localhost:8000/api/deblur/process' \
  -H 'accept: application/json' \
  -H 'Content-Type: multipart/form-data' \
  -F 'file=@image.png'
```

### Python 요청 예시

```python
import requests

url = "http://localhost:8000/api/deblur/process"
files = {"file": open("image.png", "rb")}
response = requests.post(url, files=files)
print(response.json())
``` 

###
두유 이미지 데이터
```bash
images/
  ├── 7.0/
    ├── 1/
      ├── 7.0_1_1.jpg
      ├── 7.0_1_2.jpg
      ├── .....
      ├── 7.0_1_19.jpg
      └── 7.0_1_20.jpg
    ├── 2/
    ├── 3/
    ├── 4/
    └── 5/  
  ├── 7.5/
  ├── 8.0/
  ├── 8.5/
  └── 9.0/
```
