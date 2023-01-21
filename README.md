# resume frontend
This is the frontend application for the resume of https://lucvkessel.nl
This repo has a CI/CD pipeline. made with GitHub actions and Digital Ocean.

## docker instructions:

### Local/Dev:
- docker build -t lucvkessel:dev .
- docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    lucvkessel:dev
- access the site locally on localhost:3001

### Prod:
- docker build -f Dockerfile.prod -t lucvkessel:prod .
- docker run -d --restart unless-stopped -p 3001:80 lucvkessel:prod