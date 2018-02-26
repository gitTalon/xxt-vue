import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login/Login'
import Identity from '@/pages/identity/Identity'

import Menu from '@/pages/menu/Menu'
import StudentsList from '@/pages/menu/StudentsList'
import SchoolsList from '@/pages/menu/SchoolsList'
//import RecordsList from '@/pages/menu/RecordsList'

import Chat from '@/pages/chat/Chat'
import More from '@/pages/more/More'

Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
     // name: 'Login',
      component: Login,
      meta:{
        title:'登录' // 标题设置在这里
      }
    },
    {
      path: '/login/Login',
      name: 'Login',
      component: Login,
      meta:{
        title:'登录' // 标题设置在这里
      }
    },
    {
      path: '/identity/Identity',
      name: 'Identity',
      component: Identity,
      meta:{
        title:'身份选择' // 标题设置在这里
      }
    },
     {
      path: '/menu/Menu',
      name: 'Menu',
      component: Menu,
      meta:{
        title:'菜单' // 标题设置在这里
      }
    },
     {
      path: '/menu/StudentsList',
      name: 'StudentsList',
      component: StudentsList,
      meta:{
        title:'学生列表' // 标题设置在这里
      }
    },
   {
    path: '/menu/SchoolsList',
    name: 'SchoolsList',
   component: SchoolsList,
   meta:{
	   title:'学校列表' // 标题设置在这里
	 }
  },
//   {
//    path: '/menu/RecordsList',
//    name: 'RecordsList',
//    component: RecordsList
//  },
     
     {
      path: '/Chat/chat',
      name: 'Chat',
      component: Chat,
      meta:{
        title:'交流' // 标题设置在这里
      }
    },
    {
      path: '/more/More',
      name: 'More',
      component: More,
      meta:{
        title:'更多' // 标题设置在这里
      }
    }
  ]
})
