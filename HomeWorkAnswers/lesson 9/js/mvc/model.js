const bookList = {
    bookRecords: [
        { 
            id: 1,
            title: "1984",
            author: "Джордж Орвелл",
            year: 1949,
            genre: "Антиутопія"
        },
        {
            id: 2,
            title: "Гаррі Поттер і філософський камінь",
            author: "Дж. К. Роулінг",
            year: 1997,
            genre: "Фентезі"
        },
        {
            id: 3,
            title: "Гра престолів",
            author: "Джордж Р. Р. Мартін",
            year: 1996,
            genre: "Фентезі"
        },
        {
            id: 4,
            title: "Старий і море",
            author: "Ернест Хемінгуей",
            year: 1952,
            genre: "Пригоди"
        },
        {
            id: 5,
            title: "Майстер і Маргарита",
            author: "Михайло Булгаков",
            year: 1967,
            genre: "Фентезі"
        }
    ],

    getActualId: function () {
        let max = Number.MIN_VALUE;
    
        this.bookRecords.forEach(record => {
            if (record.id > max) 
                max = record.id;
        });
        
        return max;
    },

    add(record) {
        record.id = this.getActualId() + 1;
        this.bookRecords.push(record);
    },

    find(id) {
        let result = null;
        let foundIndex = this.bookRecords.findIndex(x => x.id == id);
        if (foundIndex != -1) result = this.bookRecords[foundIndex];

        return result;
    },

    remove(id) {
        let foundIndex = this.bookRecords.findIndex(x => x.id == id);
        if (foundIndex != -1) this.bookRecords.splice(foundIndex, 1);
    },
    
    update(id, record) {
        let foundIndex = this.bookRecords.findIndex(x => x.id == id);
        if (foundIndex != -1) {
            record.id = id;
            this.bookRecords[foundIndex] = record;
        }
    },
}
