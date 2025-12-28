# Requirement – Web Dịch Manga Chạy Local (Frontend + Backend)

## 1. Mục tiêu

Xây dựng một **hệ thống web chạy hoàn toàn local trên PC**, bao gồm **Frontend** và **Backend**, dùng để **dịch manga/comic từ ảnh**.  

Hệ thống hỗ trợ pipeline xử lý đầy đủ từ ảnh gốc → ảnh đã render text dịch → **lưu ảnh kết quả**, cho phép **chỉnh sửa thủ công**, **tự động hóa**, và **undo/redo theo từng bước, từng ảnh**.

**Đối tượng sử dụng**:
- Người dịch manga/comic (fan translator, scanlation group)
- Quy trình bán tự động (AI hỗ trợ + chỉnh sửa tay)
- Project manga nhiều chương, nhiều trang

## 2. Phạm vi hệ thống

- Chạy **local trên cùng một máy tính**
  - Frontend: Web UI
  - Backend: Local server xử lý AI & image processing
- Không yêu cầu backend cloud
- Có thể hoạt động hoàn toàn offline (trừ khi model dịch cần internet để tải lần đầu)

## 3. Kiến trúc tổng thể

```txt
Frontend (React + Zustand)
↕ HTTP / Local API
Backend (Local Server - Python)
├─ Detect Text Box
├─ OCR
├─ Translate
└─ Clean Text Box
```

- **Backend**: Xử lý các tác vụ nặng (AI, image processing)
- **Frontend**: Quản lý UI, state, undo/redo, render text và chỉnh sửa thủ công

## 4. Chức năng chính (Functional Requirements)

### 4.1 Quản lý ảnh
- Load nhiều ảnh manga từ file system (hỗ trợ folder hoặc ZIP/CBZ)
- Hiển thị danh sách ảnh dưới dạng thumbnail/list
- Chọn ảnh để xử lý
- Hỗ trợ:
  - Xử lý từng ảnh (Manual mode)
  - Xử lý tự động toàn bộ ảnh trong project (Auto mode)

### 4.2 Pipeline xử lý ảnh
Mỗi ảnh đi qua các bước sau:

1. **Detect Text Box** (Backend)  
   → Phát hiện vùng chứa text/bubble  
   → Trả về danh sách bounding boxes  
   → Frontend cho phép di chuyển, resize, thêm, xóa box thủ công

2. **OCR** (Backend)  
   → Nhận diện chữ trong từng text box  
   → Trả về text OCR cho từng box  
   → Frontend cho phép chỉnh sửa text OCR

3. **Translate** (Backend)  
   → Dịch từ ngôn ngữ gốc sang ngôn ngữ đích (sử dụng LLM local)  
   → Trả về text đã dịch  
   → Frontend cho phép chỉnh sửa bản dịch

4. **Clean Text Box** (Backend)  
   → Xóa chữ gốc trong các text box, giữ nguyên background  
   → Trả về ảnh đã được làm sạch (clean image)

5. **Render Text Dịch** (Frontend)  
   → Render text dịch lên ảnh đã clean  
   → Đặt đúng vị trí theo text box  
   → Hỗ trợ chỉnh style, vị trí, căn lề khi render

6. **Save Image**  
   → Export ảnh từ canvas (PNG/JPEG)  
   → Lưu từng ảnh hoặc toàn bộ ảnh trong project

### 4.3 Chế độ Manual / Auto
- **Manual Mode**: User chủ động bấm từng bước (Detect → OCR → Translate → Clean → Render). Có thể chỉnh sửa dữ liệu sau mỗi bước.
- **Auto Mode**: Frontend tự động gọi backend chạy toàn bộ pipeline cho một ảnh hoặc toàn bộ danh sách ảnh.

### 4.4 Undo / Redo
- Áp dụng riêng cho từng ảnh
- Undo/redo theo từng bước đã thực hiện (detect, OCR, translate, clean, render, chỉnh sửa box/style)

### 4.5 Chỉnh sửa nội dung trên ảnh
- Chỉnh sửa text dịch
- Điều chỉnh vị trí & kích thước text box
- Chỉnh sửa trực tiếp text hiển thị trên canvas (overlay)

### 4.6 Quản lý Style chữ
Hỗ trợ 3 cấp độ:
- **Global Style**: Áp dụng cho toàn bộ project
- **Image Style**: Áp dụng cho một ảnh
- **Text Box Style**: Áp dụng cho từng ô thoại

**Thuộc tính style**:
- Font (hỗ trợ tải font tùy chỉnh)
- Cỡ chữ
- Line spacing
- Màu chữ
- Căn lề (left / center / right)
- Bold / Italic / Outline

### 4.7 Ngôn ngữ
- Chọn ngôn ngữ gốc (source language)
- Chọn ngôn ngữ đích (target language)
- Áp dụng cho một ảnh hoặc toàn bộ project

## 5. Yêu cầu Backend

### 5.1 API Backend (Local)
| Endpoint              | Input                              | Output                              |
|-----------------------|------------------------------------|-------------------------------------|
| Detect Text Box       | image                              | list bounding boxes                 |
| OCR                   | image + bounding boxes             | text OCR cho từng box               |
| Translate             | text list + sourceLang + targetLang| text đã dịch                        |
| Clean Text Box        | image + bounding boxes             | image đã xóa chữ (clean image)      |

### 5.2 Yêu cầu kỹ thuật Backend
- Ngôn ngữ: Python
- Chạy local server (FastAPI)
- Hỗ trợ xử lý bất đồng bộ (async tasks)
- OCR engine: PaddleOCR
- Model dịch: Local LLM (Ollama, llama.cpp, hoặc tương tự)

## 6. Giao diện người dùng (UI Requirements)

- **Panel danh sách ảnh** (thumbnail + tên file)
- **Khu vực canvas chính** hiển thị ảnh đang xử lý
- **Toolbar pipeline** (các nút: Detect, OCR, Translate, Clean, Render)
- **Panel chỉnh sửa**:
  - Danh sách text box + text OCR/dịch
  - Công cụ chỉnh style (font, size, color, alignment…)
- **Panel project settings**: Ngôn ngữ, global style, save/load project

## 7. Yêu cầu kỹ thuật (Technical Requirements)

### Frontend
- Framework: React
- State management: Zustand
- Undo/Redo: Theo từng ảnh, sử dụng middleware phù hợp
- Canvas: Konva.js để render và chỉnh sửa text
- Export canvas ra file ảnh (PNG/JPEG)

### Backend
- Local server với REST API
- Xử lý async tasks và progress feedback
- Hỗ trợ GPU acceleration (nếu có)