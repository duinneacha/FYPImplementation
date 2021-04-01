import { firebaseAuth } from 'boot/firebase'

const state = {

}

const mutations = {

}

const actions = {
  registerUser({}, payload) {
    
    firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log('Error Message: ', error.message)
      })
    },
    loginUser({}, payload) {
      
      firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
      .then(response => {
        console.log('Logging in user: ', payload.email)
        console.log(response)
      })
      .catch(error => {
        console.log('Error Message: ', error.message)
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
