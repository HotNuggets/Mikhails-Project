document.addEventListener('DOMContentLoaded', () => {
    fetchUserBoard();
});

async function fetchUserBoard() {
    try {
        const response = await fetch('/boards/getBoard', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'include' // Include cookies in the request
        });

        if (response.ok) {
            const boardData = await response.json();
            renderBoard(boardData); // Function to display board data
        } else {
            console.error("Failed to fetch user board data");
        }
    } catch (error) {
        console.error("Error fetching user board:", error);
    }
}

function renderBoard(boardData) {
    // Example rendering code
    const boardContainer = document.getElementById('boardContainer') as HTMLDivElement;
    boardContainer.innerHTML = ''; // Clear any previous content

    boardData.columns.forEach(column => {
        const columnElement = document.createElement('div');
        columnElement.className = 'column';
        columnElement.innerHTML = `<h3>${column.title}</h3>`;

        column.tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.className = 'task';
            taskElement.innerHTML = `
                <h4>${task.title}</h4>
                <p>${task.description}</p>
                <p>Status: ${task.status}</p>
                <p>Due: ${task.dueDate}</p>
            `;
            columnElement.appendChild(taskElement);
        });

        boardContainer.appendChild(columnElement);
    });
}
    document.getElementById('form')!.addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const taskElement = document.getElementById('task') as HTMLInputElement | null;
const descriptionElement = document.getElementById('description') as HTMLInputElement | null;

if (taskElement && descriptionElement) {
    const title = taskElement.value;
    const description = descriptionElement.value;
    // Now proceed with form submission logic
} else {
    console.error("Form elements not found");
}
    
    // Fetch userId from the cookie (assuming it's stored in a cookie named 'userId')
    const userId = document.cookie
        .split('; ')
        .find(row => row.startsWith('userId='))
        ?.split('=')[1];

    if (!userId) {
        console.error("User ID not found");
        return;
    }

    // Send the data to the server to create a new task
    try {
        const response = await fetch('/api/board/task', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, title, description })
        });

        const result = await response.json();

        if (result.success) {
            alert('Task added successfully');
            // Optionally, refresh or reload the task display here
            loadBoard(); // Call a function to reload the board
        } else {
            alert('Failed to add task');
        }
    } catch (error) {
        console.error('Error adding task:', error);
    }
});

// Function to load and display the board (implement as needed)
async function loadBoard() {
    // Fetch and display the user's board, including all columns and tasks
}