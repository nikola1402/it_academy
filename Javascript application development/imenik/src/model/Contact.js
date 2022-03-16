import ContactItem from "./ContactItem";

class Contact {

    constructor() {
        this.contacts = this.loadFromLocalStorage();
    }

    add(contact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();
    }

    delete(contact) {
        this.contacts.splice(this.contacts.indexOf(contact), 1);
        this.saveToLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('contacts-data', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {
        var json = localStorage.getItem('contacts-data');

        if (json === null)
            return [];

        let jsonParsed = JSON.parse(json, (key, value) => {
            // if (key === "date") {
            //     value = new Date(value);
            // }
            return value;
        });

        if (jsonParsed.length === 0)
            return [];

        let contacts = [];

        for (let i = 0; i < jsonParsed.length; i++) {
            contacts.push(ContactItem.fromJSON(jsonParsed[i]));
        }

        return contacts;

    }

}


export default Contact;