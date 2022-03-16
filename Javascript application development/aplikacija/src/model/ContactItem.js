
class ContactItem {
    
    constructor(name, number) {
        this.id = this.id = Math.random().toString(36).substring(7);
        this.name = name;
        this.number = number;
    }

    static fromJSON(json) {
        let contactItem = new ContactItem();
        contactItem.id = json.id;
        contactItem.name = json.name;
        contactItem.number = json.number;

        return contactItem;
    }
}

export default ContactItem;