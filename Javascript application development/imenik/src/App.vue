<template>
  <div id="app-container">
    <app-body v-bind:todo="contact"></app-body>
    <app-footer v-on:item-add="itemAdd"></app-footer>
  </div>
</template>

<script>
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./model/Contact";
import ContactItem from "./model/ContactItem";

export default {
  name: "App",
  components: {
    "app-footer": Footer,
    "app-body": Body
  },
  data: function() {
    return {
      currentRoute: window.location.pathname,
      clickedTab: -1,
      contact: new Contact()
    };
  },
  methods: {
    tabChange: function(tab) {
      this.clickedTab = tab;
    },
    contactAdd: function(content) {
      let item = new ContactItem(content);
      this.contact.add(item);
    }
  }
};
</script>

<style>
body {
  background: linear-gradient(45deg, #6e5771, #f74991);
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

#app-container {
  max-width: 490px;
  margin: 0 auto;
  height: 95vh;
  background: white;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transform: translate(0, -50%);
  top: 50%;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
