'use strict'

let weekDay = [
    {
        name: 'Sunday',
        message: 'Recharge and prepare for the upcoming week. Reflect and rejuvenate.',
        color: 'rgba(196, 196, 196, 0.8)'
    },

    {
        name: 'Monday',
        message: "Let's go! It's the start of a productive week. Set the tone for greatness!",
        color: 'rgba(231, 231, 103, 0.8)'
    },

    {
        name: 'Tuesday',
        message: "Keep the momentum going! You're already making progress.",
        color: 'rgba(58, 255, 180, 0.8)'
    },

    {
        name: 'Wednesday',
        message: "Halfway there! Stay focused, and you're on track to success.",
        color: 'rgba(72, 212, 255, 0.8)'
    },

    {
        name: 'Thursday',
        message: 'Push through! The weekend is almost in sight. Finish strong.',
        color: 'rgba(255, 181, 96, 0.8)'
    },

    {
        name: 'Friday',
        message: 'Finish your tasks, and the weekend reward is yours! Keep up the energy.',
        color: 'rgba(255, 81, 81, 0.8)'
    },

    {
        name: 'Saturday',
        message: 'Time to relax! Take a walk, refresh your mind, and enjoy the day.',
        color: 'rgba(206, 141, 250, 0.8)'
    }
];

const button = document.querySelector('.btn');
const result = document.querySelector('.answer-header');
const resultMessage = document.querySelector('.answer-text');

button.onclick = whatDayIsToday;

function whatDayIsToday() {
    showResultMessage(weekDay[getCurrentDay()]);
}

function getCurrentDay() {
    return new Date().getDay();
}

function showResultMessage(day) {
    result.innerHTML = day.name.toUpperCase();
    result.style.color = day.color;
    resultMessage.innerHTML = `Today is ${day.name}. ${day.message}`;
    resultMessage.style.color = day.color;
}


