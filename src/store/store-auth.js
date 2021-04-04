import { LocalStorage, Loading } from 'quasar'
import { firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-meaages'

const state = {
  loggedIn: false,
  adminUSer: false
}

const mutations = {
  setLoggedIn(state, value) {
    state.loggedIn = value
  },
  setAdminUser(state, value) {
    state.adminUSer = value
  }
}

const actions = {
  registerUser({}, payload) {
    Loading.show()
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('Error Message: ', error.message)
        showErrorMessage(error.message)
      })
    },
    loginUser({}, payload) {
      Loading.show()
      firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('Logging in user: ', payload.email)
        console.log(response)
      })
      .catch(error => {
        console.log('Error Message: ', error.message)
        showErrorMessage(error.message)
      })
  },
  logoutUser() {
    firebaseAuth.signOut()
  },
  handleAuthStateChange({ commit }) {
    firebaseAuth.onAuthStateChanged(user => {
      Loading.hide()
      // console.log("In handleAuthStateChange with", user)
      // console.log("In handleAuthStateChange with", user.email)
      if (user) {
        commit('setLoggedIn', true)
        LocalStorage.set("loggedIn", true)
        
        if (user.email == "admin@admin.com") {
          console.log("Logging in the Administrator")
          this.$router.push("/admin").catch(err => {})
        } else {
          console.log("Logging in a Client")
          this.$router.push("/client").catch(err => {})
        }
      } else {
        commit('setLoggedIn', false)
        LocalStorage.set("loggedIn", false)
        this.$router.replace('/').catch(err => {})
      }
    })
  }
}


const getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
