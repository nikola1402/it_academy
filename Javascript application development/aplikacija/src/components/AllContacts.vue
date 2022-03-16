<template>
  <div id="all-contacts">
    <h1>Your contacts:</h1>
    <contactItem
      v-for="item in contacts"
      v-bind:key="item.id"
      v-bind:item="item"
      v-on:item-delete="onDelete(item)"
    ></contactItem>
  </div>
</template>

<script>
import Item from "./ContactItem.vue";
import Contact from "../model/Contact"

export default {
  name: "AllContacts",
  props: ["contacts"],
  components: {
    contactItem: Item
  },
  methods: {
    onDelete: function(item) {
      let contact = new Contact();
      contact.delete(item);
      // this.contacts.delete(item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#all-contacts {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;
}
</style>
