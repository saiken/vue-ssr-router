import { createApp } from './entry-base';

export default ctx => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(ctx.url);

    const matchedComponents = router.getMatchedComponents();
    if (!matchedComponents) return reject({ code: 404 });
    resolve(app);
  });
}
