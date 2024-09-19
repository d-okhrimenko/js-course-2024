let throwCount = +prompt("Скільки разів ви хочете кинути шестигранний кубик?");
        let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        
        let d12 = () => random(1, 12);
        let d6 = () => random(1, 6);

        for (let i = 0; i < throwCount; i++) {
            const result = d6();
            console.log(result);
        }