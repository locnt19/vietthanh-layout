## First run project after clone source from GitHub

Chạy lệnh `npm i` và `bower update` để cài đặt các package, plugins được sử dụng trong project.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:8000/`. The app will automatically reload if you change any file `pug/sass` of the source files.

## Intial components

B1: Tạo file giao diện trong `src/pages/` (Nên copy file `index.pug` rồi đổi tên lại)

B2: Tạo các component trong `src/components/` (Nên copy thư mục `header` rồi đổi tên lại)

B3: Include style của component vừa tạo vào file `main.sass` trong `src/components/` (Cú pháp `@import "thu-muc-component-vua-tao/index.sass"`)

B4: Include giao diện của component vừa tạo vào file giao diện ở B1 (Cú pháp `include ../components/thu-muc-component-vua-tao/index.pug`)

## Structure

Hình ảnh chứa ở đây: `src/img/ten-page/*.jpg|png`

Tất cả Javascript viết ở đây: `src/components/index.js`

Sử dụng font icon thì thêm content vào đây: `src/components/icons.sass`