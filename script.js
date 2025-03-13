const works = {
    "task1": { "title": "Project 1", "color": "rgb(255, 85, 85)", "text": "This is the first project." },
    "task2": { "title": "Project 2", "color": "rgb(85, 255, 85)", "text": "This is the second project." },
    "task3": { "title": "Project 3", "color": "rgb(85, 85, 255)", "text": "This is the third project." }
};

function showProject(task) {
    const display = document.getElementById("display");
    display.style.backgroundColor = works[task].color;
    display.innerHTML = `<h2>${works[task].text}</h2>`;
    display.style.transform = 'scale(1.05)';
    setTimeout(() => {
        display.style.transform = 'scale(1)';
    }, 300);
}
