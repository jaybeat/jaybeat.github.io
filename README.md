# 林小川 · 个人网站

Apple 风格的单页个人网站，纯 HTML/CSS/JS，无需安装任何依赖。

## 打开
双击 `index.html` 即可在浏览器中预览。

## 修改内容
**只需要改 `js/data.js`**，保存后刷新页面：

| 字段 | 说明 |
| --- | --- |
| `name` / `role` / `tagline` | 姓名、身份、一句话标语 |
| `birthYear` | 出生年份，年龄自动计算 |
| `avatar` | 头像路径，如 `assets/avatar.jpg`；留空显示首字 |
| `bio` / `stats` | 简介与数字卡片 |
| `experience` | 经历时间线 |
| `projects` | 项目卡片，`featured: true` 的会显示为大卡片 |
| `portfolio` | 作品集，`image` 留空则使用 `gradient` 渐变占位 |
| `contact` | 邮箱与社交链接，`url` 留空则只显示文字 |

图片放进 `assets/` 文件夹，再在 `data.js` 中填写路径。

## 部署
- **GitHub Pages**：把整个文件夹推到仓库，Settings → Pages 选择分支即可
- **Vercel / Netlify**：直接拖拽文件夹上传
