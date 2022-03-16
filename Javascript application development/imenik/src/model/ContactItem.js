
class ContactItem {

    constructor(content) {
        this.id = Math.random().toString(36).substring(7);
        this.content = content;
    }


    static fromJSON (json) {
        let contact = new ContactItem();
        contact.id = json.id;
        contact.content = json.content;

        return contact;
    }
}

export default ContactItem;