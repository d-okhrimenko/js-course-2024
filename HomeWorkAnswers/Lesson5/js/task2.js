function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2) * 100) / 100;
}

function getCirclePerimeter(radius) {
  return Math.round(2 * Math.PI * radius * 100) / 100;
}

function getRectangleArea(length, heigth) {
  return Math.round(length * heigth * 100) / 100;
}

function getRectanglePerimeter(length, heigth) {
  return Math.round(2 * (length + heigth) * 100) / 100;
}

function getTriangleArea(a, b, c) {
  let p = (a + b + c) / 2;
  return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
}

function getTrianglePerimeter(a, b, c) {
  return Math.round((a + b + c) * 100) / 100;
}

function checkValidRectangle(a, b, c) {
  let min = Math.min(a, b, c);
  let max = Math.max(a, b, c);
  let middle = 0;
  if (a == min || a == max) {
    if (b == min || b == max) {
      middle = c;
    } else if (c == min || c == max) {
      middle = b;
    }
  } else if (b == min || b == max) {
    middle = a;
  }
  if (min + middle > max) {
    return true;
  } else {
    return false;
  }
}

document.querySelector("#btn").onclick = function () {
  let radius = Number(document.querySelector("#radius").value);
  let length = Number(document.querySelector("#length").value);
  let height = Number(document.querySelector("#height").value);
  let a = Number(document.querySelector("#a").value);
  let b = Number(document.querySelector("#b").value);
  let c = Number(document.querySelector("#c").value);

  if (radius > 0) {
    let area = getCircleArea(radius);
    let perimeter = getCirclePerimeter(radius);
    let output = document.querySelector("#circle_output");
    output.innerHTML = `Площа круга: ${area} Периметр кола: ${perimeter}`;
  }

  if (length > 0 && height > 0) {
    let area = getRectangleArea(length, height);
    let perimeter = getRectanglePerimeter(length, height);
    let output = document.querySelector("#rectangle_output");
    output.innerHTML = `Площа прямокутника: ${area} Периметр прямокутника: ${perimeter}`;
  }

  if (a > 0 && b > 0 && c > 0) {
    if (checkValidRectangle(a, b, c)) {
      let area = getTriangleArea(a, b, c);
      let perimeter = getTrianglePerimeter(a, b, c);
      let output = document.querySelector("#triangle_output");
      output.innerHTML = `Площа трикутника: ${area} Периметр трикутника: ${perimeter}`;
    } else {
      let output = document.querySelector("#triangle_output");
      output.innerHTML = `Такого трикутника не існує!!!`;
    }
  }
};
