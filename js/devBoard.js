const completedModal = document.getElementById('completed-modal');
const closeCompletedModal = document.getElementById('close-completed-modal');
const okButton = document.getElementById('ok-button');
const historyButton = document.getElementById('history-btn');
const discoverSection = document.getElementById('discover-section');
const blogsSection = document.getElementById('blogs');
const mainSection = document.querySelector('main > section:first-child');
const backToDeskButton = document.querySelector('header .btn');
const headerRight = document.querySelector('header > div:nth-child(2)');

function showCompletedModal() {
    completedModal.classList.remove('hidden');
}

function hideCompletedModal() {
    completedModal.classList.add('hidden');
}

closeCompletedModal.addEventListener('click', hideCompletedModal);

const btnCompleted = document.querySelectorAll(".btn-completed");
const taskAssignedNumber = document.querySelector(".task-number");
const totalCompletedNumber = document.querySelector(".total-completed");
const textBox = document.getElementById('text-box');

let taskNumber = parseInt(taskAssignedNumber.textContent);
let totalCompleted = parseInt(totalCompletedNumber.textContent);

for (let i = 0; i < btnCompleted.length; i++) {
    const completedBtn = btnCompleted[i];
    completedBtn.addEventListener('click', function (event) {
        showCompletedModal();
        event.target.classList.remove("bg-blue-500");
        event.target.classList.add("bg-blue-200");

        taskNumber--;
        totalCompleted++;

        taskAssignedNumber.textContent = taskNumber;
        totalCompletedNumber.textContent = totalCompleted;

        const taskDescription = event.target.parentElement.parentElement.querySelector('.card-title').textContent;
        completedModal.dataset.taskDescription = taskDescription;
        console.log(taskDescription);
    });
}

okButton.addEventListener('click', function () {
    const taskDescription = completedModal.dataset.taskDescription;
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const logEntry = `You have completed ${taskDescription} at ${timeString}\n`;

    textBox.textContent += logEntry;
});

historyButton.addEventListener('click', function () {
    textBox.textContent = '';
});

discoverSection.addEventListener('click', function () {
    mainSection.classList.add('hidden');
    blogsSection.classList.remove('hidden');
    backToDeskButton.parentElement.classList.remove('hidden');
    headerRight.classList.add('hidden');
});

backToDeskButton.addEventListener('click', function () {
    mainSection.classList.remove('hidden');
    blogsSection.classList.add('hidden');
    backToDeskButton.parentElement.classList.add('hidden');
    headerRight.classList.remove('hidden');
});