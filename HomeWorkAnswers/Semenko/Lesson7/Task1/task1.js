class Group {
    constructor(id, name) {
      this.id = id;
      this.name = name;
      this.students = [];
    }

    add(student) {
    this.students.push(student);
    };
    delete() {
    let id = +prompt("Введите id");                                                                                                                                                                                                                                                                       
    let student = this.students.find(student => student.id == id)
    let index = this.students.indexOf(student);
    this.students.splice(index, 1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
    }
    findById() {
    let id = +prompt("Введите id");                                                                                                                                                                                                                                                                       
    let student = this.students.find(student => student.id == id)       
    document.querySelector("#output").innerHTML =
     `Id : ${student.id} | Name : ${student.name} | LastName : ${student.lastName}  | Age : ${student.age} | Grade : ${student.avgGrade}`;    
    }      
    showList() {
        document.querySelector("#output").innerHTML = "";                      
        this.students.forEach((student) => {document.querySelector("#output").innerHTML +=
         `Id : ${student.id} | Name : ${student.name} | LastName : ${student.lastName}  | Age : ${student.age} | Grade : ${student.avgGrade}<br>`;});                                    
    }
  };

  let myGroup = new Group(1, "JavaScript");     
        
        document.querySelector("#list").addEventListener('click', function(){
        document.querySelector("#group").innerHTML = `Group № :  ${myGroup.id} | Direction :  ${myGroup.name}`
        myGroup.showList()});
        document.querySelector("#add").addEventListener('click', function(){
        document.querySelector("#myForm").style.display = "block";
        });
        document.querySelector("#myForm").addEventListener('submit', function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const student = {}
        formData.forEach((value, key) => {
            student[key] = value; 
        });
        myGroup.add(student);
        event.target.reset();
        document.querySelector("#myForm").style.display = "none";
      });
        document.querySelector("#del").addEventListener('click', function(){myGroup.delete()});
        document.querySelector("#find").addEventListener('click', function(){
        document.querySelector("#group").innerHTML = `Group № :  ${myGroup.id} | Direction :  ${myGroup.name}`
        myGroup.findById()});