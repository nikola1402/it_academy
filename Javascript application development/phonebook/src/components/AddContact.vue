<template>
  <div id="new-contact">
    <h1>Add new contact:</h1>
    <div id="form">
      <div class="entry" id="name-entry">
        <label>Name:</label>
        <input type="text" id="name" v-model="contactname"/>
      </div>
      <div class="entry" id="number-entry">
        <label>Phone number:</label>
        <input type="text" id="phone-no" v-model="contactnumber"/>
      </div>
      <input v-on:click="saveContact" type="submit" value="Add new contact" />
    </div>
  </div>
</template>

<script>
import ContactItem from '../model/ContactItem'
import Contact from '../model/Contact'
let contact;
export default {
  name: "AddContact",
  data: function () {
    return {
      contactname: "",
      contactnumber: "",
      contact: new Contact(),
    };
  },
  methods: {
    saveContact: function() {
      let item = new ContactItem(this.contactname, this.contactnumber);
      this.contactname = "";
      this.contactnumber = "";
      this.$emit("item-add", item);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#new-contact {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;
}

#form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.entry {
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin-bottom: 10px;
}

input {
  width: 65%;
}

input[type="submit"] {
  width: 20%;
  margin-top: 15px;
}
</style>
