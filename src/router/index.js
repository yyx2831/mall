import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: () => import('pages/home'),
      children:
        [{
          name: 'home-product',
          path: 'product/:id',
          component: () => import('pages/product')
        }]
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('pages/cart')
    },
    {
      path: '/category',
      name: 'Category',
      component: () => import('pages/category')
    },
    {
      path: '/personal',
      name: 'Personal',
      component: () => import('pages/personal')
    },
    {
      path: '/search',
      name: 'Scarch',
      component: () => import('pages/search')
    },
    {
      path: '*',
      redirect: '/home'

    }
  ]
})
