const taskList = document.getElementById("taskList");
const startBtn = document.getElementById("startBtn");
const status = document.getElementById("status");

let tasks = [];

// Render tasks
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        li.textContent = `${index + 1}. ${task.text}`;

        if (task.completed) {
            li.style.textDecoration = "line-through";
            li.style.opacity = "0.6";
        }

        taskList.appendChild(li);
    });
}

// Add task
function addTask(taskText) {
    if (taskText.trim() === "") return;

    tasks.push({
        text: taskText,
        completed: false
    });

    renderTasks();
}

// Delete task
function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        renderTasks();
    }
}

// Mark task as completed
function markTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].completed = true;
        renderTasks();
    }
}

// Initial render
renderTasks();

const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    status.textContent = "Speech recognition is not supported in this browser.";
    startBtn.disabled = true;
} else {
    const recognition = new SpeechRecognition();

    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    startBtn.addEventListener("click", () => {
        status.textContent = "Listening...";
        recognition.start();
    });

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript
            .toLowerCase()
            .trim();

        status.textContent = `Heard: "${command}"`;

        // New task
        if (command.startsWith("new task")) {
            const taskText = command.replace("new task", "").trim();

            if (taskText) {
                addTask(taskText);
            }
        }

        // Delete task
        else if (command.startsWith("delete task")) {
            const number = parseInt(
                command.replace("delete task", "").trim()
            );

            if (!isNaN(number)) {
                deleteTask(number - 1);
            }
        }

        // Mark task
        else if (command.startsWith("mark task")) {
            const number = parseInt(
                command.replace("mark task", "").trim()
            );

            if (!isNaN(number)) {
                markTask(number - 1);
            }
        }

        else {
            status.textContent += " ❌ Command not recognized";
        }
    };

    recognition.onerror = (event) => {
        status.textContent = `Error: ${event.error}`;
    };

    recognition.onend = () => {
        if (status.textContent === "Listening...") {
            status.textContent = "No speech detected.";
        }
    };
}