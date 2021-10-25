<template>
  <div id="app">
<!-- {{$store.state.users}} -->

    <!-- Кнопка добавить пользователя -->
    <button @click="chengeTaggleModelPopup" class="button-add-user" :disabled="GETTER_CHENGE_TOGGLE_MODAL">Добавить</button>

    <!-- Таблица контактов -->
    <Table/>

    <!--Модальное окно  -->
    <div v-if="GETTER_CHENGE_TOGGLE_MODAL">
      <Modal />
    </div>
    
  </div>
</template>

<script>
// компоненты
import Modal from './components/Modal'
import Table from './components/Table'

import { mapGetters, mapActions, mapMutation, mapState } from "vuex";

export default {
  name: 'App',
  components: {
    Modal,
    Table
  },
  mounted() {
    this.renderUsersFromLocalStorage()
  },
  computed: {
    ...mapGetters(["GETTER_CHENGE_TOGGLE_MODAL"]),
  },
  data() {
    return {
    }
  },
  methods: {
    ...mapActions( ['ACTION_CHENGE_TOGGLE_MODAL'] ),

    chengeTaggleModelPopup() {
      this.ACTION_CHENGE_TOGGLE_MODAL()
    },

    renderUsersFromLocalStorage() {
      if(localStorage.getItem('users') === null) {
        this.$store.state.users
      } else {
        this.$store.state.users = JSON.parse(localStorage.getItem('users')); 
      }
    }
  },

}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button-add-user {
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  width: 165px;
  height: 35px;
  border-radius: 5px;
  transition: 0.5s;
  background: lightsalmon;
}
.button-add-user:hover {
  cursor: pointer;
  transition: 0.5s;
  background: lightcoral;
}
</style>
