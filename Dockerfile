# Stage 1 — only needed if you ever add a build step (e.g. bundler, TypeScript).
# For a pure static site we go straight to the serve stage.

FROM nginx:alpine

# Copy all static assets into nginx's default web root.
COPY index.html style.css app.js data.js sw.js manifest.json /usr/share/nginx/html/
COPY icons/ /usr/share/nginx/html/icons/

# 80 is nginx's default; document it so orchestrators know which port to map.
EXPOSE 80

# nginx:alpine already sets CMD ["nginx", "-g", "daemon off;"]
# — no need to repeat it, but it's what keeps the container alive.
