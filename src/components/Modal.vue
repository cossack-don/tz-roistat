<template>
<form class="modal" @submit.prevent="addNewUser">

  <!-- header -->
  <div class="modal__header">
    <h3 class="modal__header-title">Добавление пользователя</h3>

    <div class="modal__header-icon-close" @click="closeModalPopup">
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 371.23 371.23" style="enable-background:new 0 0 371.23 371.23;" xml:space="preserve">
        <polygon points="371.23,21.213 350.018,0 185.615,164.402 21.213,0 0,21.213 164.402,185.615 0,350.018 21.213,371.23 
            185.615,206.828 350.018,371.23 371.23,350.018 206.828,185.615 " />
      </svg>
    </div>

  </div>

  <!-- name -->
  <div class="modal__input-name">
    <label class="modal__input-name-label">Имя</label>
    <input class="modal__input--modal-name" type="text"  required v-model="formData.name" placeholder="Например Вася">

  </div>
  <!-- phone -->
  <div class="modal__input-phone">
    <label class="modal__input-phone-label">Телефон</label>
    <input class="modal__input--modal-phone" type="number"  required v-model="formData.tel" placeholder="Например +7 903 833 22 11">
  </div>
  <!-- select -->
  <div class="modal__select">
    <label class="modal__select-label">Начальник</label>
    <select name="" id="" class="modal__select-control" v-model="$store.state.select" >
      <option value="" disabled>Выбери руководителя</option>
      <option v-for="(item, index) in $store.state.users" :key="index">
        {{ item.name }}
      </option>
    </select>

  </div>

  <!-- button -->
  <button class="modal__button-send-form">Сохранить</button>
</form>

</template>

<script>
import { mapGetters, mapActions, mapMutation, mapState } from "vuex";
export default {

    data() {
        return {
            formData: {
                name: '',
                tel: '',
            }
        }
    },
    methods: {
        ...mapActions(['ACTION_CHENGE_TOGGLE_MODAL', 'MUTATION_ADD_NEW_USER']),

        closeModalPopup() {
            this.ACTION_CHENGE_TOGGLE_MODAL()
        },

        addNewUser() {
            const objformData = {
                ...this.formData,
                arrayChildUser: []
            }

            this.MUTATION_ADD_NEW_USER(objformData);

            // reset form
            this.formData.name = ''
            this.formData.tel = ''
            this.$store.state.select = ''
        }

    }
}
</script>

<style >
.modal {
      margin: 50px auto;
      max-width: 350px;
      height: 300px;
      border: 1px solid gray;
}
/* header */
.modal__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 15px 15px;
}

.modal__header-icon-close {
      width: 15px;
      height: 15px;
      cursor: pointer;
}

.modal__header-icon-close svg:hover {
      cursor: pointer;
      width: 20px;
      fill: red;
}

/* inputs */
/* name */
.modal__input-name {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin: 0 15px;
   margin-top: 35px;   
}

.modal__input--modal-name {
      width: 100%;
      height: 25px;
      margin-left: 70px;
}
/* phone */
.modal__input-phone {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 15px;
      margin-top: 20px;
      margin-bottom: 20px;
}

.modal__input--modal-phone {
      width: 100%;
      height: 25px;
      margin-left: 35px;
}

/* select */

.modal__select {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 15px;  
}
.modal__select-control {
      width: 100%;
      height: 25px;
      margin-left: 22px;
}
/* btn send form */
.modal__button-send-form {
      margin-top: 35px;
      display: block;
      margin-left: 15px;
      text-align: left;
      padding-left: 15px;
      width: 145px;
      height: 25px;
      border-radius: 5px;
      transition: 0.5s;
      background: lightsalmon;
}
.modal__button-send-form:hover {
      cursor: pointer;
      transition: 0.5s;
      background: lightcoral;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none; 
}

input[type='number'],
input[type="number"]:hover,
input[type="number"]:focus {
    appearance: none;
    -moz-appearance: textfield;
}
</style>