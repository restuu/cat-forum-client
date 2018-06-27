import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Wall from './views/Wall.vue'
import Users from './views/Users.vue'
import Login from './views/Login.vue'
import Articles from './views/Articles'
import Images from './views/Images';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/images',
      name: 'images',
      component: Images
    },
    {
      path: '/:person',
      name: 'wall',
      component: Wall,
      props: true
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        }
      ]
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    }
  ]
})
