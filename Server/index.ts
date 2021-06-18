/**
 *
 * index.ts.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/7/28
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
/**
 *
 * moveIndex.js 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2018/7/28
 *
 * @内容 作用
 * @内容 作用
 */
'use strict';
import * as koa from 'koa';
import * as koaStatic from 'koa-static';
import * as koaViews from 'koa-views';
import * as path from 'path';
//tslint-disable
const app = new koa();
app.use(koaStatic(path.resolve(__dirname , './static')));
app.use(koaViews(path.resolve(__dirname , './') , {
  map: {
    html: 'underscore',
  },
}));

app.use(async (ctx) => {
  await ctx.render('index');
});
app.listen(3000);
