class students {
    constructor(name, lastName, age, id, averageScore) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.averageScore = averageScore;
    }
}

let studentsCard = {
    card: [],

    add: function (name, lastName, age, id, averageScore) {
        this.card.push(new students(name, lastName, age, id, averageScore));
    },

    remove: function (id) {
        const idIndex = this.card.findIndex(index => index.id == id);
        this.card.splice(idIndex, 1);
    },

    studentsInfo: function () {
        for (let info of this.card) {
            displayInfo(info);
        }
    },

    idInfo: function (id) {
        const info = this.card.find(index => index.id == id);
        displayInfo(info);
    }
}

function displayInfo(info) {
    console.log('Name: ' + info.name);
    console.log('Last Name: ' + info.lastName);
    console.log('Age: ' + info.age);
    console.log('Id: ' + info.id);
    console.log('Average score: ' + info.averageScore);
    console.log('');
    console.log('');
};


// studentsCard.add('Andrey', 'Urusov', 52, 1, 85);
// studentsCard.add('Dima', 'Urusov', 11, 2, 76);
// studentsCard.add('Luda', 'Urusova', 50, 3, 82);
// studentsCard.add('Petya', 'Pupkin', 25, 4, 30);

// studentsCard.remove(4);

// studentsCard.idInfo(3);

// studentsCard.studentsInfo();














