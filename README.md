### Notes

For next.js hotreloading to work in WSL, set the env variable `CHOKIDAR_USEPOLLING=true` by using the command `export CHOKIDAR_USEPOLLING=true`

**See**: https://github.com/vercel/next.js/issues/7839

Use pm2 with next:

**Development**

pm2 start npm --name "next" -- run dev

**Production**

npm run build
pm2 start npm --name "next" -- start

## React resources

[Persistent Layout Patterns in Next.js](https://adamwathan.me/2019/10/17/persistent-layout-patterns-in-nextjs/)

[React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)

## Docker resources

[Next.js + Docker. Made easy.](https://dev.to/kumar_abhirup/next-js-docker-made-easy-2bok)
