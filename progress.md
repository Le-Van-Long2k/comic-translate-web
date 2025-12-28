# Tiến độ phát triển dự án: Ứng dụng dịch và chỉnh sửa text trong ảnh (Manga/Comic Translation Tool)

| Giai đoạn | Mô tả chi tiết | Tiến độ (%) | Ngày update | Ghi chú |
|----------|----------------|-------------|-------------|---------|
| **Giai đoạn 0** | Chuẩn bị môi trường | | | |
| 0.1 | Backend: Cài đặt FastAPI, uvicorn, Pillow, OpenCV, pytesseract, các AI models cần thiết | | | |
| 0.2 | Backend: Thiết lập cấu trúc folder cơ bản (projects/) | | | |
| 0.3 | Frontend: Cài đặt React + Zustand + Konva + các thư viện UI, fetch, drag-drop | | | |
| 0.4 | Frontend: Setup project skeleton (App.tsx, store.ts, components/...) | | | |
| **Giai đoạn 1** | Khởi động app | | | |
| 1.1 | Backend: Chạy FastAPI server, tự động tạo folder projects/ nếu chưa có | | | |
| 1.2 | Frontend: Mở localhost, khởi tạo Zustand store | | | |
| 1.3 | Frontend: Kiểm tra và load project cũ từ backend (nếu có) | | | |
| **Giai đoạn 2** | Quản lý Project | | | |
| 2.1 | Tạo project mới: Frontend → POST /project/create → Backend tạo thư mục + project.json + subfolders | | | |
| 2.2 | Mở project cũ: Frontend → GET /project/{projectId}/load → Backend trả project.json | | | |
| **Giai đoạn 3** | Upload ảnh | | | |
| 3.1 | Frontend: Upload file/folder → POST /project/{projectId}/upload | | | |
| 3.2 | Backend: Lưu vào images/original/, tạo imageId, trả metadata | | | |
| 3.3 | Frontend: Lưu metadata vào store, cập nhật imagesOrder, render preview | | | |
| **Giai đoạn 4** | Hiển thị danh sách ảnh | | | |
| 4.1 | Frontend: Render thumbnail + filename | | | |
| 4.2 | Backend: GET /file/{path} → trả FileResponse cho thumbnail/preview | | | |
| **Giai đoạn 5** | Chọn ảnh xử lý | | | |
| 5.1 | Frontend: Click ảnh → set selectedImageId, load ảnh gốc lên canvas Konva | | | |
| **Giai đoạn 6** | Pipeline xử lý ảnh (manual) | | | |
| 6.1 | Detect Text Box: Frontend POST /detect → Backend trả bounding boxes → Frontend lưu + push history | | | |
| 6.2 | OCR: Frontend gửi image + boxes → Backend OCR → trả text → Frontend lưu + cho phép edit | | | |
| 6.3 | Translate: Frontend gửi text + lang → Backend dịch → trả translated text → Frontend lưu | | | |
| 6.4 | Clean Text Box: Frontend gửi image + boxes → Backend xóa chữ, lưu clean image → trả path | | | |
| **Giai đoạn 7** | Render text (frontend-only) | | | |
| 7.1 | Load ảnh clean làm background trên Konva | | | |
| 7.2 | Render text dịch, cho phép chỉnh sửa nội dung, vị trí, kích thước, style (font, color, shadow…) | | | |
| 7.3 | Implement Undo/Redo dựa trên history trong Zustand | | | |
| **Giai đoạn 8** | Save / Export ảnh | | | |
| 8.1 | Frontend: Export canvas → binary PNG/JPEG | | | |
| 8.2 | POST /project/{projectId}/save-output → Backend lưu vào images/output/ | | | |
| 8.3 | Frontend cập nhật image.paths.output | | | |
| **Giai đoạn 9** | Auto Mode (batch processing) | | | |
| 9.1 | Frontend: Click Auto Process → lặp qua các ảnh chưa hoàn thiện | | | |
| 9.2 | Thực hiện tuần tự: detect → ocr → translate → clean → render (mỗi bước push history riêng) | | | |
| **Giai đoạn 10** | Undo / Redo | | | |
| 10.1 | Zustand lưu stack history riêng cho từng ảnh | | | |
| 10.2 | Undo/Redo chỉ thay đổi state (không xóa file trên disk) | | | |
| **Giai đoạn 11** | Autosave project | | | |
| 11.1 | Sau các bước lớn: debounce → POST /project/{projectId}/save | | | |
| 11.2 | Backend ghi đè project.json | | | |
| **Giai đoạn 12** | Reload / Mở lại app | | | |
| 12.1 | Frontend load project.json từ backend khi mở lại | | | |
| 12.2 | Hydrate store, load ảnh từ disk, tiếp tục công việc trước đó | | | |