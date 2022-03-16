<template>
  <div id="app-container">
    <all-contacts v-bind:contacts="contacts"></all-contacts>
    <add-contact></add-contact>
  </div>
</template>

<script>
import AllContacts from "../components/AllContacts.vue";
import AddContact from "../components/AddContact.vue";

export default {
  name: "Container",
  props: ["contacts"],
  components: {
    "all-contacts": AllContacts,
    "add-contact": AddContact,
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app-container {
  width: 80%;
  margin: 0 auto;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
}
</style>
