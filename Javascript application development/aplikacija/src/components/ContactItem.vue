<template>
  <div class="contact-item">
    <div class="contact-item-content">
      <span class="name">{{ item.name }}</span>
    </div>
    <div class="contact-item-content">
      <span class="number">{{ item.number }}</span>
    </div>
    <span class="delete-btn" title="delete" v-on:click.stop="onDelete"></span>
  </div>
</template>

<script>
export default {
  name: "ContactItem",
  props: ["item"],
  methods: {
    onDelete: function () {
      this.$emit("item-delete");
    },
  },
};
</script>

<style scoped>
.contact-item {
  padding: 22px 4px;
  margin: 0px 12px;
  cursor: pointer;
  border-top: 1px solid #e8e8e8;

  display: flex;
  align-items: center;
}

.contact-item-content {
  flex-grow: 1;
  color: #7b7b7b;
  padding: 0 16px;
}

.contact-item:hover .contact-item-content {
  color: #4e4e4e;
}

.delete-btn {
  display: inline-block;
  width: 26px;
  height: 26px;
  background-image: url(~@/assets/icon-delete-light.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  flex-shrink: 0;
}

.delete-btn:hover {
  background-image: url(~@/assets/icon-delete.png);
}
</style>