const contactBook = {
    contacts: [
        {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "phone": "+1-202-555-0101",
            "email": "john.doe@example.com",
            "description": "Software Engineer at Tech Corp."
        },
        {
            "id": 2,
            "firstName": "Jane",
            "lastName": "Smith",
            "phone": "+1-202-555-0102",
            "email": "jane.smith@example.com",
            "description": "Project Manager with a focus on IT projects."
        },
        {
            "id": 3,
            "firstName": "Michael",
            "lastName": "Johnson",
            "phone": "+1-202-555-0103",
            "email": "michael.johnson@example.com",
            "description": "UI/UX Designer at Creative Studio."
        },
        {
            "id": 4,
            "firstName": "Emily",
            "lastName": "Davis",
            "phone": "+1-202-555-0104",
            "email": "emily.davis@example.com",
            "description": "Data Analyst with expertise in big data."
        },
        {
            "id": 5,
            "firstName": "David",
            "lastName": "Wilson",
            "phone": "+1-202-555-0105",
            "email": "david.wilson@example.com",
            "description": "DevOps Engineer at Cloud Solutions."
        },
        {
            "id": 6,
            "firstName": "Sarah",
            "lastName": "Brown",
            "phone": "+1-202-555-0106",
            "email": "sarah.brown@example.com",
            "description": "Content Writer and Marketing Specialist."
        },
        {
            "id": 7,
            "firstName": "James",
            "lastName": "Williams",
            "phone": "+1-202-555-0107",
            "email": "james.williams@example.com",
            "description": "Cybersecurity Expert with 10 years of experience."
        },
        {
            "id": 8,
            "firstName": "Olivia",
            "lastName": "Jones",
            "phone": "+1-202-555-0108",
            "email": "olivia.jones@example.com",
            "description": "HR Manager specializing in IT recruitment."
        },
        {
            "id": 9,
            "firstName": "Robert",
            "lastName": "Miller",
            "phone": "+1-202-555-0109",
            "email": "robert.miller@example.com",
            "description": "Full-Stack Developer working with JavaScript and Python."
        },
        {
            "id": 10,
            "firstName": "Sophia",
            "lastName": "Anderson",
            "phone": "+1-202-555-0110",
            "email": "sophia.anderson@example.com",
            "description": "Business Analyst focusing on process optimization."
        }
    ],

    lastId: 10,

    add(contact) {
        this.lastId++;
        contact.id = this.lastId;
        this.contacts.push(contact);
    },
    remove(id) {
        let index = this.contacts.findIndex(x => x.id == id);
        this.contacts.splice(index, 1);
    },
    update(id, contact) {
        let index = this.contacts.findIndex(x => x.id == id);
        this.contacts[index] = contact;
    },
    find(id) {
        let index = this.contacts.findIndex(x => x.id == id);
        return this.contacts[index];
    }
}