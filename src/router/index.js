import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "aboutzx"*/ '../views/AboutView.vue')
  },
  {
    path: '/first',
    name: 'firstvue',
    component: () => import('../views/FirstView.vue')
  },
  {
    path: '/databinding/string',
    name: 'DataBindingString',
    component: () =>
      import(
        /* webpackChunkName: "databinding", webpackPrefetch: true*/ '../views/DataBind/DataBindingString.vue'
      )
  },
  {
    path: '/databinding/html',
    name: 'DataBindingHtml',
    component: () =>
      import(
        /* webpackChunkName: "databindinghtml", webpackPrefetch: true*/ '../views/DataBind/DataBindingHtml.vue'
      )
  },
  {
    path: '/databinding/input',
    name: 'DataBindingInput',
    component: () =>
      import(
        /* webpackChunkName: "databindinghtml", webpackPrefetch: true*/ '../views/DataBind/DataBindingInput.vue'
      )
  },
  {
    path: '/databinding/select',
    name: 'DataBindingSelect',
    component: () =>
      import(
        /* webpackChunkName: "databindinghtmld", webpackPrefetch: true*/ '../views/DataBind/DataBindingSelect.vue'
      )
  },
  {
    path: '/databinding/check',
    name: 'DataBindingCheck',
    component: () =>
      import(
        /* webpackChunkName: "databindingcheckBox", webpackPrefetch: true*/ '../views/DataBind/DataBindingCheckBox.vue'
      )
  },
  {
    path: '/databinding/radio',
    name: 'DataBindingRadio',
    component: () =>
      import(
        /* webpackChunkName: "databindingRadio", webpackPrefetch: true */ '../views/DataBind/DataBindingRadio.vue'
      )
  },
  {
    path: '/databinding/attribute',
    name: 'DataBindingAttribute',
    component: () =>
      import(
        /* webpackChunkName: "databindingRadio", webpackPrefetch: true */ '../views/DataBind/DataBindingAttribute.vue'
      )
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import('../views/DataBind/DataBinding.vue')
  },
  {
    path: '/databinding/list',
    name: 'DataBindingList',
    component: () =>
      import(
        /* webpackChunkName: "databindingList", webpackPrefetch: true */ '../views/DataBind/DataBindingList.vue'
      )
  },
  {
    path: '/databinding/class',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackChunkName: "databindingClass", webpackPrefetch: true */ '../views/DataBind/DataBindingClass.vue'
      )
  },
  {
    path: '/databinding/view',
    name: 'DataBindingClass',
    component: () =>
      import(
        /* webpackChunkName: "databindingView", webpackPrefetch: true */ '../views/DataBind/DataBindingView.vue'
      )
  },
  {
    path: '/event/view',
    name: 'EventClickView',
    component: () =>
      import(
        /* webpackChunkName: "EventClickView", webpackPrefetch: true */ '../views/Event/EventClickView.vue'
      )
  },
  {
    path: '/event/change',
    name: 'EventClickChange',
    component: () =>
      import(
        /* webpackChunkName: "EventClickView", webpackPrefetch: true */ '../views/Event/EventChangeView.vue'
      )
  },
  {
    path: '/event/key',
    name: 'EventClickKey',
    component: () =>
      import(
        /* webpackChunkName: "EventClickKey", webpackPrefetch: true */ '../views/Event/EventKeyView.vue'
      )
  },
  {
    path: '/sum',
    name: 'SumView',
    component: () =>
      import(
        /* webpackChunkName: "EventClickKey", webpackPrefetch: true */ '../views/Sum/SumView.vue'
      )
  },
  {
    path: '/high',
    name: 'SumView',
    component: () =>
      import(
        /* webpackChunkName: "EventClickKey", webpackPrefetch: true */ '../views/Sum/HighChartsView.vue'
      )
  },
  {
    path: '/sum/time',
    name: 'SumView',
    component: () =>
      import(
        /* webpackChunkName: "EventClickKey", webpackPrefetch: true */ '../views/Sum/HighChartsView.vue'
      )
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
