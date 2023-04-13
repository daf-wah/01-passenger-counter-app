// document.getElementById("count-el").innerText = 5;

let count;
count = 0;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let countSave = `${count} - `;
    saveEl.textContent += countSave;
    console.log(count);
    count = 0;
    countEl.textContent = count;
}

let myName = "Joshua";
let greeting = "Welcome back";
let myGreeting = `${greeting}, ${myName}👋`;

// console.log(myGreeting);

let welcomeEl = document.getElementById("welcome-el");

welcomeEl.textContent = myGreeting;

