import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index.vue'
import home from '../views/home.vue'
import help from '../views/help.vue'
import news from '../views/news.vue'
import job from '../views/job.vue'
import search from '../views/search.vue'
import activity from '../views/activity.vue'
import oldstuff from '../views/oldstuff.vue'
import helpcontent from '../views/content/helpcontent.vue'
import oldstuffcontent from '../views/content/oldstuffcontent.vue'
import activitycontent from '../views/content/activitycontent.vue'
import newscontent from '../views/content/newscontent.vue'
import jobcontent from '../views/content/jobcontent.vue'
import companycontent from '../views/content/companycontent.vue'
import adminindex from '../views/webadmin/adminindex.vue'
import adminhome from '../views/webadmin/adminhome.vue'
import myself from '../views/webadmin/myself.vue'
import notice from '../views/webadmin/notice.vue'
import createhelp from '../views/webadmin/help/createhelp.vue'
import createhelplist from '../views/webadmin/help/createhelplist.vue'
import createactivity from '../views/webadmin/activity/createactivity.vue'
import createactivitylist from '../views/webadmin/activity/createactivitylist.vue'
import company from '../views/webadmin/job/company.vue'
import createarticle from '../views/webadmin/article/createarticle.vue'
import articlelist from '../views/webadmin/article/articlelist.vue'
import createoldstuff from '../views/webadmin/oldstuff/createoldstuff.vue'
import createoldstufflist from '../views/webadmin/oldstuff/createoldstufflist.vue'
import fankui from '../views/kefu/fankui.vue'
import jubao from '../views/kefu/jubao.vue'
import shensu from '../views/kefu/shensu.vue'
import notFound from '../views/NotFound.vue' // 404 页面

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: index,
    meta: { ispublic: true },
    children: [
      { path: '', name: 'home', component: home, meta: { ispublic: true } },
      { path: 'help', name: 'help', component: help, meta: { ispublic: true } },
      { path: 'help/:tag', component: help, props: true, meta: { ispublic: true } },
      { path: 'search', name: 'search', component: search, meta: { ispublic: true } },
      { path: 'helpcontent/:id', component: helpcontent, props: true, meta: { ispublic: true } },
      { path: 'oldstuffcontent/:id', component: oldstuffcontent, props: true, meta: { ispublic: true } },
      { path: 'activitycontent/:id', component: activitycontent, props: true, meta: { ispublic: true } },
      { path: 'newscontent/:id', component: newscontent, props: true, meta: { ispublic: true } },
      { path: 'jobcontent/:id', component: jobcontent, props: true, meta: { ispublic: true } },
      { path: 'companycontent/:id', component: companycontent, props: true, meta: { ispublic: true } },
      { path: 'news', name: 'news', component: news, meta: { ispublic: true } },
      { path: 'job', name: 'job', component: job, meta: { ispublic: true } },
      { path: 'oldstuff', name: 'oldstuff', component: oldstuff, meta: { ispublic: true } },
      { path: 'activity', name: 'activity', component: activity, meta: { ispublic: true } },
      { path: 'fankui', name: 'fankui', component: fankui, meta: { ispublic: true } },
      { path: 'jubao', name: 'jubao', component: jubao, meta: { ispublic: true } },
      { path: 'shensu', name: 'shensu', component: shensu, meta: { ispublic: true } },

      // 后台管理
      {
        path: 'admin',
        component: adminindex,
        children: [
          { path: '', name: 'adminhome', component: adminhome },
          { path: 'myself', name: 'myself', component: myself },
          { path: 'notice', name: 'notice', component: notice },
          { path: 'createhelp', name: 'createhelp', component: createhelp },
          { path: 'updatehelp/:id', component: createhelp, props: true },
          { path: 'createhelplist', component: createhelplist },
          { path: 'createactivity', component: createactivity },
          { path: 'updateactivity/:id', component: createactivity, props: true },
          { path: 'createactivitylist', component: createactivitylist },
          { path: 'createarticle', component: createarticle },
          { path: 'updatearticle/:id', component: createarticle, props: true },
          { path: 'articlelist', component: articlelist },
          { path: 'createoldstuff', component: createoldstuff },
          { path: 'updateoldstuff/:id', component: createoldstuff, props: true },
          { path: 'createoldstufflist', component: createoldstufflist },
          { path: 'company', component: company }
        ]
      }
    ]
  },
  // 404 页面
  { path: '*', component: notFound }
]

const router = new VueRouter({
  mode: 'history', // 让 URL 更加美观
  base: '/', // 可修改为 '/your-sub-path/' 适配子路径部署
  routes
})

// // 路由守卫
// router.beforeEach((to, from, next) => {
//   if (!to.meta?.ispublic && !localStorage.getItem('luffy_jwt_token')) {
//     return next('/')
//   }
//   next()
// })

export default router