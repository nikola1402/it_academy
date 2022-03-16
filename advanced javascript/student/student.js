class Student {
    constructor(name, address, phone, course) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.course = course;
        this.getInfo(); {
            return "Name: " + this.name + "\nAddress: " + this.address + "\nPhone: " + this.phone + "\nCourse: " + this.course
        }
    }
}