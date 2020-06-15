import Vue from 'vue';
import Router from 'uni-simple-router';
Vue.use(Router)
//初始化
const router = new Router({
    routes:ROUTES //路由表
});
export default router
//全局路由前置守卫
// let chushi = '';
// router.beforeEach((to, from, next) => {
// 	if (to.flag) {
// 		//当前进入的路径
		
// 	}
	 
// })


// 例子
// const router = new VueRouter({
//   routes,
// });
//   //进入的路由   要出去的路由
// router.beforeEach((to, from, next) => {
//   document.title=to.meta.title||"学生管理系统";
//   //判断是否校验路由
//   if (to.meta.isAure) {
//     let name = sessionStorage.getItem('username');
//     //有状态，并且存在sessionStorage，则next，否则返回登陆页面
//     if (name) {
//       next();
//     } else {
//       next({path: "/login",query:{redirect:to.name}});
//     }
//   } else {
//     next();
//   }
// });
// export default router;
 