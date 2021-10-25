<template>
    <div class="wrapper-table">
      <!-- header -->
      <table class="table-title">
        <tr>
          <td class="table-title__name" @click="sortItems">
            Имя &#9650; &#9660;
          </td>
          <td class="table-title__phone" @click="sortItemsTelefons">
            Телефон &#9650; &#9660;
          </td>
        </tr>
      </table>

      <!-- PARENT TABLE USER -->
      <table v-for="(item, index) in $store.state.users" :key="index">
        <table class="table-parent">
          <tr>
            <td class="table-parent__name">{{ item.name }}</td>
            <td class="table-parent__phone">{{ item.tel }}</td>
          </tr>
        </table>

        <!-- CHILD TABLE USER -->
        <table
          class="table-child"
          v-for="(itemChild, index) in item.arrayChildUser"
          :key="index"
        >
          <tr>
            <td class="table-child__name">{{ itemChild.name }}</td>
            <td class="table-child__phone">{{ itemChild.tel }}</td>
          </tr>
        </table>
        <!-- END CHILD TABLE USER -->
      </table>
    </div>
</template>

<script>
export default {
methods:{
     sortItemsTelefons() {
      let flagForSortReverse = false;

      this.$store.state.users.sort((a, b) => {
        if (a.tel.trim() > b.tel.trim()) {
          flagForSortReverse = true;
          return 1;
        }
        if (a.tel.trim() < b.tel.trim()) {
          flagForSortReverse = false;
          return -1;
        }
        return 0;
      });
        if (flagForSortReverse) {
            this.$store.state.users.reverse();
        }
    },
    
    sortItems() {
      let flagForSortReverse = false;

       this.$store.state.users.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          flagForSortReverse = true;
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          flagForSortReverse = false;
          return -1;
        }
        return 0;
      });
        if (flagForSortReverse) {
            this.$store.state.users.reverse();
        }
    },
}
}
</script>

<style>
table {
  border-collapse: collapse;
}
th,
td {
  border: 1px solid black;
  padding: 15px;
}

/*  ==================================================== */
.wrapper-table {
  width: 400px;
  margin: 0 auto;
}
.table-title {
  width: 400px;
}
.table-title__name {
  width: 238px;
  transition: 0.5s;
  background: #95ecb7;
}
.table-title__phone {
  transition: 0.5s;
  background: #95ecb7;
}
.table-title__name:hover,
.table-title__phone:hover {
  cursor: pointer;
  transition: 0.5s;
  background: #30f17a;
}
/*  ========================table parent============================ */
.table-parent {
  width: 400px;
}
.table-parent__name {
  word-break: break-all;
  background: #9bec95;
  width: 238px;
}
.table-parent__phone {
  background: #9bec95;
  word-break: break-all;
}
/*  ============================table child======================== */
.table-child {
  width: 350px;
  margin-left: 50px;
}
.table-child__phone {
  border-top: none;
  word-break: break-all;
}
.table-child__name {
  word-break: break-all;
  width: 188px;
  border-top: none;
}
</style>