#########################
#!/bin/bash

pm2 stop server &&
nvm use 17.9.0 &&
rm -rf .cache/ &&
git pull &&
npm install &&
NODE_ENV=production npm run build &&
pm2 start server.js