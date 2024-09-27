Homework [Lesson1](https://github.com/NJul/js-2024), [Lesson2](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson2/), [Lesson3](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson3/), [Lesson4](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson4/), [Lesson5](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson5/), [Lesson6](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson6/), [Lesson7](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson7/), [Lesson8](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson8/), [Lesson9](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson9/), [Lesson10](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson10/), [Lesson11](https://njul.github.io/js-course-2024/HomeWorkAnswers/Lesson11/)

[Code](https://github.com/NJul/js-course-2024/tree/master/HomeWorkAnswers)

```

```

# My Page :bookmark:

### :green_heart: Lesson 1

```

```

**Git** - це розподілена система контролю версій

git [-v | --version]

git init

git add . _`-` saved in a Staging Area_

git commit -m "first commit" _`-` saved in a Local Repo_

git status

git log

git diff b0015 04a84

git push _`-` saved in a Remote Repo_

git fetch

git pull

---

git switch -c development

---

git branch feature1

git branch

git checkout feature1

---

git checkout main

git merge feature1

---

git branch -D `<branchName>` : feature/experiment : delete the git branch locally

git push origin --delete `<branchName>` : delete the branch on the server

---

git branch -r

---

git fetch -p : така команда повинна видалити гілки локально, якщо вони були видалені з ремоуту

---

_В локальному репозиторії злила гілку Lesson4 в master і хотіла ці зміни запушити на віддалений. Але забула, що на віддаленому вже були зміни, яких не було на локальному. Як тепер синхронізувати локальний репозиторій з віддаленим?_

Повідомлення, яке ви отримали, вказує на те, що ваші локальні та віддалені гілки master мають розбіжності (divergent branches). Це означає, що є комміти як у вашій локальній гілці, так і віддаленій гілці, які відсутні в іншій.

Git не знає, як поєднати ці зміни, і пропонує вам вказати, як ви хочете це зробити: за допомогою злиття (merge), перемотування (rebase) або fast-forward.

Варіанти розв'язання

1. Злиття (Merge)
   Злиття об'єднає зміни віддаленої гілки з вашими локальними змінами, створивши новий коміт злиття.

   Команда:
   git pull --no-rebase

2. Перемотування (Rebase)
   Перемотування застосовує ваші локальні зміни поверх змін віддаленої гілки, зберігаючи лінійну історію.

   Команда:
   git pull --rebase

3. Лише fast-forward
   Fast-forward застосовує зміни віддаленої гілки тільки в тому випадку, якщо ваша локальна гілка не має додаткових комітів. Якщо є додаткові комміти, операція перерветься з помилкою.

   Команда:
   git pull --ff-only

Приклад використання
Якщо ви хочете просто злити зміни та створити новий коміт злиття:

git pull origin master --no-rebase

Якщо ви віддаєте перевагу використанню перемотування, щоб зберегти лінійну історію:

git pull origin master --rebase

Якщо ви хочете використовувати fast-forward тільки:

git pull origin master --ff-only

---

**Command Prompt | cmd :** Ctrl + Shift + N ; F2 ; D: ; cd "Ca(Tab)libre" ; cd .. ;

🠕 🠗 ; - following the history of commits

**VS Code:** Ctrl + Space ; - clue ; Ctrl + Shift + G ; - sourse control ;

Win + V - clipboard history - everything that was copied before

```

```

**init** - ініціалізація проекту, перший коміт :seedling:

**feature** - використовується під час додавання нової функціональності рівня додатка

**fix** - якщо виправили якусь серйозну :bug:

**docs** - усе, що стосується документації

**style** - виправляємо одруки, виправляємо форматування

**refactor** - рефакторинг коду додатка

**test** - усе, що пов'язано з тестуванням

**chore** - звичайне обслуговування коду :money_with_wings:

```

```
