import ContactItem from "./ContactItem";

class Contact {

    constructor() {
        this.loadFromLocalStorage();
    }

    getContacts() {
        return this.contacts;
    }

    add(contact) {
        this.contacts.push(contact);
        this.saveToLocalStorage();
        this.loadFromLocalStorage();
    }

    delete(contact) {
        let contactItem = ContactItem.fromJSON(contact);
        console.log("Deleting " + contactItem.name)
        let pos = this.contacts.map(function(e) { return e.id; }).indexOf(contactItem.id)
        this.contacts.splice(pos, 1);
        this.saveToLocalStorage();
        this.loadFromLocalStorage();
    }

    saveToLocalStorage() {
        localStorage.setItem('contacts-table', JSON.stringify(this.contacts));
    }

    loadFromLocalStorage() {

        let contacts = [];
        var json = localStorage.getItem('contacts-table');

        if (json === null) {
            this.contacts = contacts;
            return [];
        }

        let jsonParsed = JSON.parse(json); 

        if (jsonParsed.length === 0) {
            this.contacts = contacts;
            return [];
        }

        for (let i = 0; i <= Object.keys(jsonParsed).length; i++) {
            if (jsonParsed[i]) 
                contacts.push(ContactItem.fromJSON(jsonParsed[i]));
        }

        this.contacts = contacts;
    }

}


export default Contact;