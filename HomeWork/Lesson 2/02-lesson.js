// const button = document.getElementById('btn').onclick = () => {
//     const name = prompt('Inter your name', '');
//     name ? alert(`Hi ${name}`) : null;
// }

const button = document.getElementById('btn').onclick = () => {
    const name = prompt('Inter your name');
    const nameOutput = document.getElementById('name');
    name ? nameOutput.innerHTML = `Hi! My name is ${name}` : null;
}

// const button = document.getElementById('btn');
//  const nameOutput = document.getElementById('name');
// button.addEventListener('click', () => {
//    const name = prompt('Inter your name', '');
//    name ? nameOutput.innerHTML = `Hi! My name is ${name}` : null;
// })
