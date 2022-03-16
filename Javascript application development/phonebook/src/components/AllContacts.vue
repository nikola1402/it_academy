<template>
  <div id="all-contacts">
    <h1>Your contacts:</h1>
    <contactItem
      v-for="item in contactObj.contacts"
      v-bind:key="item.id"
      v-bind:item="item"
      v-on:item-delete="onDelete(item)"
    ></contactItem>
  </div>
</template>

<script>
import Item from "./ContactItem.vue";

export default {
  name: "AllContacts",
  props: ["contactObj"],
  components: {
    contactItem: Item
  },
  methods: {
    onDelete: function(item) {
      this.$emit("item-delete", item);
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
