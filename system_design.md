# Flow Hoạt Động Hoàn Chỉnh Của App (Frontend + Backend)

👉 **Hybrid** – Backend lưu ảnh gốc + clean, Frontend render output cuối cùng  
👉 Chạy web local (React + FastAPI)

## 1. Tổng Quan Kiến Trúc
```ts
Frontend (React + Zustand + Konva)
⇅ HTTP (localhost)
Backend  (FastAPI – AI / Image Processing)
⇅ File System
```
## 2. Khởi Động App

- **Backend**
  1. User chạy backend (FastAPI)
  2. Backend tạo thư mục `projects/` nếu chưa tồn tại và sẵn sàng nhận request

- **Frontend**
  1. User mở web (localhost)
  2. Frontend khởi tạo Zustand store
  3. Nếu mở project cũ → gọi backend để load `project.json`

## 3. Tạo / Mở Project

- **Tạo project mới**
  1. User click **New Project**
  2. Frontend gửi `POST /project/create`
  3. Backend tạo thư mục và file:
```ts
projects/{projectId}/
├─ project.json
├─ images/original/
├─ images/clean/
├─ images/output/
```
4. Backend trả về `projectId`
5. Frontend lưu `projectId` vào store

- **Mở project cũ**
1. User chọn project
2. Frontend gọi `GET /project/{projectId}/load`
3. Backend đọc và trả toàn bộ nội dung `project.json`
4. Frontend hydrate Zustand store và render danh sách ảnh

## 4. Upload Ảnh (Entry Point)

1. User click **Upload Image** và chọn ảnh/folder
2. Frontend gửi `POST /project/{projectId}/upload` (multipart/form-data)
3. Backend nhận file, lưu vào `projects/{projectId}/images/original/`, tạo `imageId`
4. Backend trả metadata (id, filename, path)
5. Frontend lưu metadata vào Zustand, cập nhật thứ tự ảnh (`imagesOrder`) và hiển thị preview

## 5. Hiển Thị List Ảnh (Preview)

1. Frontend render thumbnail + filename
2. Ảnh được load qua URL:  
`<img src="/file/projects/{projectId}/images/original/xxx.png" />`
3. Backend xử lý `GET /file/{path}` → trả `FileResponse`

## 6. Chọn Ảnh Để Xử Lý

1. User click vào ảnh trong list
2. Frontend set `selectedImageId`
3. Load ảnh gốc lên canvas Konva để xử lý

## 7. Pipeline Xử Lý Ảnh (Manual hoặc Auto)

1. **Detect Text Box**  
- Frontend gửi `POST /detect` kèm image path  
- Backend detect bounding boxes → trả kết quả  
- Frontend lưu boxes vào state ảnh và push vào history (undo)

2. **OCR**  
- Frontend gửi image path + boxes  
- Backend thực hiện OCR từng box → trả text  
- Frontend lưu `ocrText`, cho phép sửa tay và push history

3. **Translate**  
- Frontend gửi text + ngôn ngữ nguồn/đích  
- Backend dịch → trả text dịch  
- Frontend lưu `translatedText`, cho phép sửa tay và push history

4. **Clean Text Box**  
- Frontend gửi image path + boxes  
- Backend xóa chữ gốc, lưu ảnh mới vào `projects/{projectId}/images/clean/xxx.png`  
- Backend trả path ảnh clean  
- Frontend cập nhật `image.paths.clean` và push history

## 8. Render Text (Frontend Only)

1. Frontend load ảnh clean làm background canvas
2. Dùng Konva để render text dịch lên các box tương ứng
3. User tự do chỉnh sửa:
- Nội dung text
- Vị trí/kích thước box
- Style (font, color, shadow, v.v.)
4. Undo/Redo dựa hoàn toàn vào history của Zustand  
📌 **Backend không tham gia bước này**

## 9. Save / Export Ảnh Output

1. Frontend export canvas Konva thành binary PNG/JPEG
2. Gửi `POST /project/{projectId}/save-output` kèm binary ảnh
3. Backend lưu vào `projects/{projectId}/images/output/xxx.png`
4. Frontend cập nhật `image.paths.output`

## 10. Auto Mode (Batch Processing)

1. User click **Auto Process**
2. Frontend lần lượt xử lý từng ảnh chưa hoàn thiện theo thứ tự:  
`detect → ocr → translate → clean → render`
3. Mỗi bước đều lưu history riêng
4. Backend xử lý từng request độc lập, không phân biệt manual hay auto

## 11. Undo / Redo

1. Mỗi ảnh có stack history riêng trong Zustand
2. Undo/Redo chỉ thay đổi state trong store
3. Các file trên disk (original, clean, output) **không bị xóa hoặc thay đổi** khi undo

## 12. Autosave Project

1. Sau mỗi thay đổi lớn (detect, ocr, translate, clean, render, export…), frontend debounce rồi gọi `POST /project/{projectId}/save`
2. Backend ghi đè toàn bộ state hiện tại vào `project.json`

## 13. Reload / Mở Lại App

1. Frontend gọi backend load `project.json`
2. Hydrate toàn bộ Zustand store từ dữ liệu đã lưu
3. Load các ảnh từ disk (original/clean/output)
4. Người dùng tiếp tục công việc đúng vị trí trước khi đóng app