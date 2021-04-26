### Notes

Use pm2 with next:

**Development**

pm2 start npm --name "next" -- run dev

**Production**

npm run build
pm2 start npm --name "next" -- start
