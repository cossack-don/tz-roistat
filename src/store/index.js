import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import users from '@/store/users.js'

export default new Vuex.Store({
    state: {
        modalTaggle: false,
        select: '',
        users,
    },
    mutations: {
        MUTATION_CHENGE_TOGGLE_MODAL(state) {
            state.modalTaggle = !state.modalTaggle;
        },

        MUTATION_ADD_NEW_USER(state, formData) {
            if (formData.name === "" || formData.tel === "") {
                return false;
              }

            if (state.select !== '') {
                // если выбран начальник нужно добавлять в подмассив arrayChildUser
                state.users.every(item => {

                    if (state.select === item.name) {
                        item.arrayChildUser.push({
                            name: formData.name,
                            tel: formData.tel
                        });
                    }
                    return state.select !== item.name
                })
                state.modalTaggle = false

            } else {
                state.users.push(formData)
                state.modalTaggle = false
            }

            // Добавляем данные в localStorage

            let localStorageUsers = JSON.stringify(state.users)
            localStorage.setItem('users', localStorageUsers);
        }

    },
    actions: {
        ACTION_CHENGE_TOGGLE_MODAL({
            commit
        }) {
            commit('MUTATION_CHENGE_TOGGLE_MODAL');
        },

        MUTATION_ADD_NEW_USER({
            commit
        }, formData) {
            // console.log(formData) лежат данные с формы Modal
            commit('MUTATION_ADD_NEW_USER', formData)
        }

    },
    getters: {
        GETTER_CHENGE_TOGGLE_MODAL(state) {
            return state.modalTaggle
        },
    },

})