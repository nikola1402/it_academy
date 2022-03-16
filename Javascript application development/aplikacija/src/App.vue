<template>
  <div id="app-container">
    <app-header v-on:tab-change="changeBody"></app-header>
    <app-container v-bind:contacts="contacts"></app-container>
  </div>
</template>

<script>
import Container from "./components/Container.vue";
import Header from "./components/Header.vue";
import Contact from "./model/Contact"

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-container": Container,
  },
  data: function() {
    return {
      contacts: this.$data.contacts
    }
  },
  props: ["contacts"],
  mounted: function() {
    var contactObj = new Contact();
    this.$props.contacts = contactObj.getContacts();
  },
  methods: {
    changeBody: function(param) {
      if (param === 0) {
         document.getElementById("all-contacts").style.marginLeft = 0;
         var contactObj = new Contact();
         this.$data.contacts = contactObj.getContacts();
      } else {
         document.getElementById("all-contacts").style.marginLeft = "-100%";
         var contactObj = new Contact();
         this.$data.contacts = contactObj.getContacts();
      }
    },
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  margin-top: 3rem;
  margin-bottom: 3rem;
}

#all-contacts {
  width: 100%;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;

  overflow: auto;
}
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
