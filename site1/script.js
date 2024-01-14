/*document.body.style.background = "red";
setTimeout(() => document.body.style.background = "", 3000);
let heading = document.querySelector("h1");
heading.style.color = "red";
let header = document.querySelector("header");
header.style.borderColor = "red";
clickableDiv.addEventListener("click", function() {
    alert('Произведено нажатие на блок');
})
let heading = document.querySelector('h1');

function handleClick() {
    heading.style.color = "red";
    heading.style.textAlign = "center";
};

function handler() {
    heading.style.color = "blue";
    heading.style.textAlign = "start"; 
};

heading.addEventListener("click", handleClick);
heading.removeEventListener("click", handleClick);
heading.addEventListener("click", handler);

let student = new Object();
student["Name"] = {"student1":"Ivan","student2": "Oleg", "student3": "Eugenia", "student4":"Vepa", "student5":"Pavel", "student6":"Vlad", "student7":"Olga"};
student["Age"] = ["43 года", "58 лет", "18 лет", "25 лет", "29 лет", "25 лет", "18 лет"];
alert(student["Name"]);
alert(student["Age"]);

let firm = {};
firm.Name = "Oleg Inc";
firm.Adress = "Blicker Street 234";
alert(firm.Name);
alert(firm.Adress);

let firm2 = {"Name": "Oleg Inc", "Adress": "Blicker Street 234"};

delete firm.Adress;
delete firm2["Adress"];

if ("Adress" in firm) {
    alert("Объект есть");
} else {
    alert("Объекта нет");
}

let movieFiltr = {"genre": ["horror", "comedy", "action"], "director": ["Besson", "Balabanov", "Mikhalkov"], "year": [2000, 2010, 2020], "country": ["Russia", "USA", "India"]};
Document.write

let vepa = {
            firstname: 'Vepa',
            lastname: 'Akyyev',
            birthday: '08/06/1997',
            showInfo: function() {
                console.log(`Student name ${this.firstname} ${this.lastname}`);
            },
            showAge: function () {
                const deltaTime = Date.now() - Date.parse(this.birthday);
                const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
                console.log(`${this.firstname} ${this.lastname} is ${studentAge} years old.`);
            }
        }
        
        let oleg = {
            firstname: 'Oleg',
            lastname: 'Malinnikov',
            birthday: '08/06/1990',
            showInfo: function() {
                console.log(`Student name ${this.firstname} ${this.lastname}`);
            },
            showAge: function () {
                const deltaTime = Date.now() - Date.parse(this.birthday);
                const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
                console.log(`${this.firstname} ${this.lastname} is ${studentAge} years old.`);
            }
        }
        
        console.log(vepa);
        vepa.showInfo();
        vepa.showAge();
        console.log(oleg);
        oleg.showInfo();
        oleg.showAge();
        
        function Student(firstname, lastname, birthday) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.birthday = birthday;
            this.showInfo = function () {
                console.log(`Student name: ${this.firstname} ${this.lastname}`);
            }
            this.showAge = function () {
                const deltaTime = Date.now() - Date.parse(this.birthday);
                const studentAge = Math.floor(deltaTime/(365*24*60*60*1000));
                console.log(`${this.firstname} ${this.lastname} is ${studentAge} years old.`);
            }
        }
        
        let vepa = new Student('Vepa', 'Akyyev', '08/06/1997');
        console.log(vepa);
        vepa.showInfo();
        vepa.showAge();
         
        let oleg = new Student('Oleg', 'Malinnikov', '08/06/1990');
        console.log(oleg);
        oleg.showInfo();
        oleg.showAge();


function Hotel (name, country, rooms, bookedRooms) {
            this.name = name;
            this.country = country;
            this.rooms = rooms;
            this. bookedRooms = bookedRooms;
        }
         
        Hotel.prototype.availableRooms = function() {
                return this.rooms - this.bookedRooms;
        }
        
        Hotel.prototype.availablePercent = function() {
                return Math.floor(this.availableRooms() / this.rooms * 100) + '%';
        }
        
        let halupa = new Hotel('Halupa 2*', 'Kongo', 245, 107);
        let fourSeasons = new Hotel('Four Seasons Russia', 'Russia', 578, 234);
        let oneEyePirat = new Hotel('One Eye Pirat', 'Thailand', 190, 86);
        console.log(halupa.availableRooms(), halupa.availablePercent(), halupa.name);
        console.log(fourSeasons.availableRooms(), fourSeasons.availablePercent(), fourSeasons.name);
        console.log(oneEyePirat.availableRooms(), oneEyePirat.availablePercent(), oneEyePirat.name);*/






