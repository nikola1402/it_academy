<template>
  <div id="app-container">
    <all-contacts
      v-bind:contactObj="contactObj"
      v-on:item-delete="onDelete($event)"
    ></all-contacts>
    <add-contact v-on:item-add="itemAdd($event)"></add-contact>
  </div>
</template>

<script>
import AllContacts from "../components/AllContacts.vue";
import AddContact from "../components/AddContact.vue";

export default {
  name: "Container",
  props: ["contactObj"],
  components: {
    "all-contacts": AllContacts,
    "add-contact": AddContact,
  },
  methods: {
    onDelete: function (item) {
      this.$emit("item-delete", item);
    },
    itemAdd: function (item) {
      this.$emit("item-add", item);
    }
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
