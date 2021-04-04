
import { LocalStorage } from 'quasar'

export default ({ router }) => {
  
  // Hook fired every time a user navigates from one page to another
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    if (!loggedIn && ( to.path=='/admin' || to.path=='/client')) {
      next('/')
    } else {
      next()
    }
    
  })
}
