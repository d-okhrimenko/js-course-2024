let calcPerTriangle = (a, b, c) => a + b + c;
        let calcAreaTriangle = (a, b, c) => {
          let perimetr = a+b+c;
          return Math.sqrt(
            perimetr *
              (perimetr - a) *
              (perimetr - b) *
              (perimetr - c)
          );
        };

        let calcPerRectangle = (a, b) => 2 * (a + b);
        let calcAreaRectangle = (a, b) => a * b;

        let calcPerCircle = (r) => 2 * r * Math.PI;
        let calcAreaCircle = (r) => Math.PI * Math.pow(r, 2);

        let showCalculate = (getFigure) => {
          let sideOne, sideTwo, sideThree, getPerimetr, getArea;
          switch (getFigure) {
            case 1:
              sideOne = getValue("Введіть 1 сторону");
              sideTwo = getValue("Введіть 2 сторону");
              sideThree = getValue("Введіть 3 сторону");
              getPerimetr = calcPerTriangle(sideOne, sideTwo, sideThree);
              getArea = calcAreaTriangle(sideOne, sideTwo, sideThree);
              alert(
                `Периметр трикутника з сторонами а=${sideOne}, b=${sideTwo}, c=${sideThree}\nдорівнює ${getPerimetr}, площа дорівнює ${getArea.toFixed(2)}`
              );
              break;
            case 2:
              sideOne = getValue("Введіть 1 сторону");
              sideTwo = getValue("Введіть 2 сторону");
              getPerimetr = calcPerRectangle(sideOne, sideTwo);
              getArea = calcAreaRectangle(sideOne, sideTwo);
              alert(
                `Периметр прямокутника з сторонами а=${sideOne}, b=${sideTwo}\nдорівнює ${getPerimetr}, площа дорівнює ${getArea}`
              );
              break;
            case 3:
              let radius = getValue("Введіть радіус кола");
              getPerimetr = calcPerCircle(radius);
              getArea = calcAreaCircle(radius);
              alert(
                `Периметр кола з радіусом ${radius} дорівнює ${getPerimetr.toFixed(2)}, площа дорівнює ${getArea.toFixed(2)}`
              );
              break;
            default:
              alert("Ви не вірно задали фігуру для розрахунків");
          }
        };

        let getNumber = getValue(
          "Введіть 1 для розрахунку трикутника, 2 прямокутника, 3 кола"
        );
        showCalculate(getNumber);