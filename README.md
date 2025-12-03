# Crown Arts Foundation — Static Website

## How to edit blog posts
- Edit `assets/posts.json`. Each object in the array is a post.
- `title`, `slug`, `date`, `excerpt`, `image`, `content` (content accepts HTML).
- Save the file and refresh the page.

## How to add images
- Put images in `assets/images/` and reference them from posts.json (e.g. "assets/images/segun_headshot.jpg").

## Preview locally
- Open `index.html` in your browser (double-click). For full local dev with files, you can use a static server (optional):
  - `npx http-server` (if Node is installed) and open `http://localhost:8080`.

## Deploy
- Push the folder to a GitHub repo and enable GitHub Pages (or use Netlify).
