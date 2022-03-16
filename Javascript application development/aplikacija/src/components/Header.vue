<template>
  <div id="app-header">
    <div v-on:click="$emit('tab-change', 0)" v-text="title1" class="header-cell" id="all-contacts-tab"></div>
    <div v-on:click="$emit('tab-change', 1)" v-text="title2" class="header-cell" id="new-contact-tab"></div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data: function () {
    return {
      title1: "Show All Contacts",
      title2: "Add Contact",
    };
  },
  methods: {
    showAllContacts: function () {
      document.getElementById("all-contacts").style.marginLeft = 0;

    },
    addNewContact: function () {
      document.getElementById("all-contacts").style.marginLeft = "-100%";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-header {
  width: 80%;
  margin: 0 auto;
  display: flex;
  text-align: center;
}

.header-cell {
  width: 50%;
}
</style>
