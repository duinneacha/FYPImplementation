
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/PageHome.vue') },
      { path: '/about', component: () => import('pages/PageAbout.vue') },
      { path: '/nutrition', component: () => import('pages/PageNutrition.vue') },
      { path: '/neuromuscular', component: () => import('pages/PageNeuromuscular.vue') },
      { path: '/classes', component: () => import('pages/PageClasses.vue') },
      { path: '/faq', component: () => import('pages/PageFAQ.vue') },
      { path: '/contact', component: () => import('pages/PageContact.vue') },
      { path: '/nutritionQuestionnaire', component: () => import('pages/PageQuestionnaire.vue') },
      { path: '/testimonials', component: () => import('pages/PageTestimonials.vue') },
      { path: '/recipes', component: () => import('pages/PageRecipes.vue') },
      { path: '/admin', component: () => import('pages/Administrator.vue') },
      { path: '/adminClients', component: () => import('pages/admin/admin-clients.vue') },
      { path: '/adminClinic', component: () => import('pages/admin/admin-clinic.vue') },
      { path: '/adminNotif', component: () => import('pages/admin/admin-notifications.vue') },
      { path: '/adminRecipes', component: () => import('pages/admin/admin-recipes.vue') },
      { path: '/adminClasses', component: () => import('pages/admin/admin-classes.vue') },
      { path: '/client', component: () => import('pages/Client.vue') },
      { path: '/auth', component: () => import('pages/PageAuth.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
