Tiền đề: bạn đã cài đặt NodeJS và. Npm thành công trên máy tính.  
Để kiểm tra là đã cài đặt thành công NodeJS, bạn vào terminal, gõ `node -version` nhấn enter, nếu ra được số version thì đã thành công.  
Để kiểm tra là đã cài đặt thành công. Npm, bạn vào terminal, gõ `npm -version` nhấn enter, nếu ra được số version thì đã thành công.  

## 1. Cài đặt

(Ban có thể bỏ qua bước này nếu terminal đang đứng ở project hiện tại) Trong terminal, di chuyển đến thư mục cần cài đặt bằng cách gõ lệnh `cd đường_dẫn_đến thư mục cần cài đặt>`.  
Tiếp theo gõ lệnh:

`npm init -y`

Nếu bạn thấy trong thư mục có thư mục node_modules thì đã thành công.

## 2. Tạo file config

`npx tailwindcss init`

Nếu bạn thấy trong thư mục có thêm file `tailwind.config.js` thì đã thành công.

## 3. Tạo file style.css

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 4. Ghi đè nội dung file package.json
Nếu không có file này, bạn có thể tạo một file trống trên thư mục gốc, với tên là package.json, và copy nội dung dưới vào file.
```
{
  "name": "tailwind",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "npx tailwindcss -i ./style.css. -o ./css/output.css",
    "watch": "npx tailwindcss  -i ./style.css -o ./css/output.css --watch",
    "build" : "NODE_ENV=production npx tailwindcss -i ./style.css -o ./css/output.css"
  },
  "devDependencies": {
    "autoprefixer": "^10.3.4",
    "tailwindcss": "^3.0.0"
  }
}
```
Mục script với chức năng là tạo các shortcut cho npm. Ví dụ trên terminal gõ lệnh `npm run watch`, thì npm sẽ chạy lệnh `npx tailwindcss -i ./style.css -o ./css/output.css`.  
Phần `-i ./style.css` trong mỗi lệnh tương ứng với việc chỉ định file input, ở đây là file style.css trên thư mục gốc.  
Phần `-o ./css/output.css` trong mỗi lệnh tương ứng với việc chỉ định file output, ở đây là file output.css trên thư mục css.

## 5. Ghi đè nội dung file tailwind.config.js
```
module.exports = {
  content: [
    "./*.html"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```
Nội dung mục content sẽ chỉ định đường dẫn đến file html của bạn, đường dẫn này cần chính xác để tailwind có thể hiểu được.  
Như ví dụ trên, `./` đại diện cho thư mục gốc, `*.html` là tất cả các file với đuôi html.

Đây cũng là nơi để bạn có thể thêm các giá trị tương ứng như màu sắc, font-size cho khớp với design system, ví dụ:
```
module.exports = {
  content: [
    "./*.html"
  ],
  theme: {
    extend: {
      colors: {
        "cool-gray": {
          900: "#111827",
        },
        gray: {
          100: "#F4F5F7",
          900: "#18191F"
        },
        purple: {
          400: "#8C30F5",
        }
      },
      fontSize: {
        h1: ["72px", "98px"],
        h2: ["48px", "64px"],
        lead1: ["18px", "32px"],
        subtitle2: ["18px", "28px"],
      },
      fontFamily: {
        inter: "Inter",
      }
    },
  },
  plugins: [],
}
```
## 6. Dịch file

`npm run watch`

Lệnh này được config ở mục 4.  
Luôn giữ cho lệnh này chạy, không tắt terminal

## 7. Link css vào html
Bạn có thể link file vào như một file css bình thường.  
Trong thẻ head của file html, thêm:  
```
<link href="./css/output.css" rel="stylesheet" />
```
Chú ý link file css đã qua xử lý, không link file css bạn đã viết.  
Theo ví dụ về config ở phần 4, file css đã qua xử lý sẽ là file ./css/output.css


