"use strict";
import { Student } from "./student.js";
import {
  addStudentToArr,
  isOnlyLetters,
  cleanInput, // проверить и удалить если не нужно
  showPopup,
  closePopupWarn,
} from "./additional-functions.js";
// объект для управлінням групою студентів
class StudentManagement {
  constructor() {
    this.arrStudents = [
      {
        uniqId: 99,
        name: "Світлана",
        lastName: "Світланенко",
        age: 22,
        idCod: 12345,
        averageScore: 52.3,
      },
      {
        uniqId: 98,
        name: "Олександр",
        lastName: "Олександров",
        age: 23,
        idCod: 22345,
        averageScore: 48.3,
      },
      {
        uniqId: 97,
        name: "Микола",
        lastName: "Миколаєнко",
        age: 22,
        idCod: 13345,
        averageScore: 23.3,
      },
    ];
  }
  // метод створення студентів з откриванням попапу там де була помилка
  createItemStudent() {
    const name = document.getElementById("name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const age = Number(document.getElementById("age").value.trim());
    const idCod = Number(document.getElementById("number-id").value.trim());
    const averageScore = Number(
      document.getElementById("average-score").value.trim().replace(",", ".")
    );

    // Проверка имени и фамилии на наличие только букв
    if (!isOnlyLetters(name)) {
      this.showPopupWithFocus("Ім'я має містити лише літери!", "name");
      return;
    }

    if (!isOnlyLetters(lastName)) {
      this.showPopupWithFocus("Прізвище має містити лише літери!", "last-name");
      return;
    }

    // Проверка возраста
    if (isNaN(age) || age <= 0) {
      this.showPopupWithFocus("Рік повинен бути числом і більше нуля!", "age");
      return;
    }

    // Проверка ID кода
    if (isNaN(idCod) || idCod <= 0 || idCod.toString().length !== 5) {
      this.showPopupWithFocus(
        "Іден код студента повинен містити тільки числа та бути 5 знаків!",
        "number-id"
      );
      return;
    }

    // Проверка среднего балла
    if (isNaN(averageScore) || averageScore <= 0) {
      this.showPopupWithFocus(
        "Середній бал повинен бути числом більше нуля!",
        "average-score"
      );
      return;
    }

    // Если все проверки пройдены, создаем студента
    const student = new Student(name, lastName, age, idCod, averageScore);
    addStudentToArr(this.arrStudents, student);
    this.renderArrStudents(); // Рендер списка
  }

  // Модифицированная функция для показа попапа с установкой фокуса на поле
  showPopupWithFocus(message, inputId) {
    let textPop = document.querySelector(".popup-warn__text"); // Текст попапа
    textPop.textContent = message;

    // Показываем попап
    const popupBody = document.querySelector(".popup-warn");
    popupBody.classList.remove("hidden");

    // Обработка закрытия попапа предупреждения
    closePopupWarn("tok");
    let argument = "tok";
    if (argument) {
      // открыть форму добавления студентов
      const popupAddStudent = document.getElementById("popup-addStudent");
      popupAddStudent.classList.remove("hidden");

      // Фокусируемся на поле с ошибкой
    }
    const inputField = document.getElementById(inputId);
    console.log("показиваю инпут с ошибкой " + inputField);

    inputField.focus(); // Устанавливаем фокус на поле
    inputField.style.border = "2px solid red"; // Применяем красную рамку
    console.log("Проверка на работу фокуса");
  }

  // метод додавання до масиву студентів нових студентів клік на кнопку ДОДАТИ
  startCreateItemStudent() {
    const btnAdd = document.getElementById("btn-add");
    btnAdd.addEventListener("click", () => {
      this.createItemStudent(); // создаю студента

      //  cleanInput(); //очищаю инпуты
      //console.log("тут создяю студента");
    });
  }
  // метод рендер масиву студентів на сторінку
  renderArrStudents() {
    const ul = document.querySelector(".block-list__ul");
    ul.innerHTML = "";
    this.arrStudents.forEach((item) => {
      const li = document.createElement("li");
      li.classList.add("block-list__item");
      // Формируем строку для отображения информации о студенте
      li.textContent = `${item.name}  ${item.lastName}. років: ${item.age}. ID: ${item.idCod}. середній бал: ${item.averageScore}`;
      ul.appendChild(li);
    });
    console.log(this.arrStudents);
  }

  // рендер студентів на сторінці по кнопці показати всіх
  getRendarAllStudents() {
    const btnShowAll = document.getElementById("btn-show-all");
    btnShowAll.addEventListener("click", () => {
      const blockListBody = document.querySelector(".block-list__body");
      blockListBody.classList.remove("hidden");
      this.renderArrStudents();
    });
  }
  // прибрати список студентів при кліки на кнопку СХОВАТИ ВСІХ
  hideRendarAllStudents() {
    const btnHideAll = document.getElementById("btn-show-hide-everyone");
    btnHideAll.addEventListener("click", () => {
      const blockListBody = document.querySelector(".block-list__body");
      blockListBody.classList.add("hidden");
    });
  }

  // метод пошуку студента по імені або прізвищу та відображення на сторінці (тут не підключав )
  searchByNameOrLastName() {
    const search = document.getElementById("search").value.trim().toLowerCase();

    // Якщо поле пошуку порожнє, показуємо всіх студентів
    if (search === "") {
      this.renderArrStudents();
      return;
    }

    // Фільтрація студентів за іменем або прізвищем, що починаються з введеної строки
    const filteredStudents = this.arrStudents.filter(
      (student) =>
        student.name.toLowerCase().startsWith(search) ||
        student.lastName.toLowerCase().startsWith(search)
    );

    // Очистка списку перед відображенням результату пошуку
    const ul = document.querySelector(".block-list__ul");
    ul.innerHTML = "";

    // Якщо знайдено студентів, відобразити їх
    if (filteredStudents.length > 0) {
      filteredStudents.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("block-list__item");
        li.textContent = `${item.name} ${item.lastName}. років: ${item.age}. ID: ${item.idCod}. середній бал: ${item.averageScore}`;
        ul.appendChild(li);
      });
    } else {
      // Якщо жоден студент не знайдений, показати повідомлення
      const li = document.createElement("li");
      li.classList.add("block-list__item");
      li.textContent = "Студента з таким ім'ям або прізвищем не знайдено!";
      ul.appendChild(li);
    }
  }
  // метод ініціалізації події для пошуку по зміні значення в полі вводу (тут не підключав)
  initializeSearchByName() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
      this.searchByNameOrLastName(); // Запускаємо пошук за іменем або прізвищем
    });
  }

  // Общий метод для поиска студента по ID
  findStudentIndexById(id) {
    return this.arrStudents.findIndex((student) => student.idCod === id);
  }
  // метод пошуку по ай ди
  searchById() {
    const search = document.getElementById("search").value.trim();

    // Если поле поиска пустое, показать всех студентов
    if (search === "") {
      this.renderArrStudents();
      return;
    }

    // Проверка, что введенное значение является числом
    if (isNaN(search)) {
      console.log("Введіть будь ласка цифри");
      showPopup("Введіть будь ласка цифри");
      return;
    }

    // Фильтрация студентов по ID, которые начинаются с введенных цифр
    const filteredStudents = this.arrStudents.filter((student) =>
      student.idCod.toString().startsWith(search)
    );

    // Очистка списка перед отображением результата поиска
    const ul = document.querySelector(".block-list__ul");
    ul.innerHTML = "";

    // Отображение найденных студентов
    if (filteredStudents.length > 0) {
      filteredStudents.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("block-list__item");
        li.textContent = `${item.name} ${item.lastName}. років: ${item.age}. ID: ${item.idCod}. середній бал: ${item.averageScore}`;
        ul.appendChild(li);
      });
    } else {
      // Если студенты не найдены, показать сообщение
      const li = document.createElement("li");
      li.classList.add("block-list__item");
      li.textContent = "Студента з таким ID не знайдено!";
      ul.appendChild(li);
    }
  }
  // метод видалення по ай ди
  deleteStudentById() {
    const search = Number(document.getElementById("search").value.trim());

    // Проверка, что введенное значение является числом
    if (isNaN(search)) {
      console.log("Введіть правильний ID студента");
      showPopup("Введіть правильний ID студента");
      return;
    }

    // Поиск индекса студента по ID
    const studentIndex = this.findStudentIndexById(search);

    if (studentIndex === -1) {
      console.log("Студента з таким ID не знайдено");
      showPopup("Щоб видалити студента, введіть ID повністю");
      return;
    }

    // Удаление студента из массива
    this.arrStudents.splice(studentIndex, 1);

    // Обновление списка на странице
    this.renderArrStudents();

    // Сообщение об успешном удалении
    console.log("Студента успішно видалено");
  }
  // Обработчик изменения поля поиска
  searchInputId() {
    const searchInput = document.getElementById("search");
    searchInput.addEventListener("input", () => {
      this.searchById(); // Запускаем поиск студентов
    });
  }

  // Обработчик клика по кнопке удаления
  deleteOnId() {
    const btnDelete = document.getElementById("btn-dell");
    btnDelete.addEventListener("click", () => {
      this.deleteStudentById(); // Запускаем удаление студента
      document.getElementById("search").value = "";
    });
  }
}
export { StudentManagement };
