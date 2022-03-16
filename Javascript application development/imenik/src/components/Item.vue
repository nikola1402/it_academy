<template>
  <div class="contact-item" v-on:click="onClick">
    <div class="contact-item-content">
      <span class="data">{{item.content}}</span>
    </div>
    <span class="delete-btn" title="delete" v-on:click.stop="onDelete"></span>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: ["item"],
  methods: {
    onClick: function() {
      this.$emit("item-click");
    },
    onDelete: function() {
      this.$emit("item-delete");
    }
  }
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

.contact-item.completed .data {
  text-decoration: line-through;
}

.contact-item .data {
  text-decoration: none;
}

.contact-item-content {
  flex-grow: 1;
  color: #7b7b7b;
  padding: 0 16px;
}

.contact-item-date {
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: bold;
  background: #ecb2c3;
  padding: 6px 14px;
  border-radius: 6px;
  color: white;
}

.contact-item-date .day {
  font-size: 22px;
}

.contact-item-date .month {
  font-size: 14px;
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