var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Todo = /** @class */ (function () {
    function Todo(id, title, description, progress) {
        if (id)
            this.id = id;
        if (progress)
            this.progress = progress;
        this.progress = "new";
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
    }
    Todo.prototype.setDescription = function (description) {
        this.description = description;
    };
    Todo.prototype.setTitle = function (title) {
        this.title = title;
    };
    Todo.prototype.setProgress = function (progress) {
        this.progress = progress;
    };
    return Todo;
}());
// Function to handle the form submission and todo list
/* async function handleOnLoad(tasks:Todo[]){
  try {
    const serverTasks = await getBoardFromDB(ownerId);
   
    serverTasks.forEach(task => {
        const newTask = new Todo(task.id,task.title, task.description, task.progress);
        tasks.push(newTask);
    });
    renderToDo(tasks);
} catch (error) {
    console.error(error);
}
} */
function getBoardFromDB(ownerId) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch('/boards/get-board', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ ownerId: ownerId })
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok) {
                        throw new Error('Failed to fetch board data');
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [2 /*return*/, data];
                case 3:
                    error_1 = _a.sent();
                    console.error(error_1);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function handleList() {
    var form = document.querySelector('#form');
    var tasks = [];
    // handleOnLoad(tasks);
    form.addEventListener('submit', function (event) {
        try {
            event.preventDefault(); // Prevent form submission from reloading the page
            // Access the form elements properly
            var task = form.elements.namedItem('task');
            var description = form.elements.namedItem('description');
            var id = crypto.randomUUID();
            var progress = "new";
            // Create a new todo object
            var _task = new Todo(id, task.value, description.value, progress);
            // Push to tasks array and render the list
            console.log(_task.id);
            tasks.push(_task);
            addToDB(_task);
            renderToDo(tasks);
            form.reset();
        }
        catch (error) {
            console.error(error);
        }
    });
    // Initial render
    renderToDo(tasks);
}
function addToDB(task) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/add-task", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(task) //passing the data (in JSON format)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Error adding student");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.error(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function updateProgressDB(task) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/update-progress", {
                            method: "PATCH",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(task) //passing the data (in JSON format)
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Error adding student");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.error(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
function deleteFromDB(index) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, fetch("/api/delete-task/" + index, {
                            method: "DELETE",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })];
                case 1:
                    response = _a.sent();
                    if (!response.ok)
                        throw new Error("Error adding student");
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    console.log(data);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.error(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
// Function to render the todo list based on progress
function renderToDo(array) {
    var root = document.querySelector("#app");
    if (!root)
        return;
    var html = "\n    <div class=\"windows\">\n      <div class=\"leftPanel\">\n        <ul>";
    // Render "new" tasks
    array.forEach(function (todo) {
        if (todo.progress === "new") {
            console.log(todo.progress);
            html += "\n          <li>\n            <select data-id=\"" + todo.id + "\" class=\"select-progress\">\n            <option value=\"none\" >Progress</option>\n              <option value=\"new\" >New</option>\n              <option value=\"inProgress\" >In Progress</option> \n              <option value=\"Done\" >Done</option>\n            </select>\n            <h4>" + todo.title + "</h4>\n            <p>" + todo.description + "</p>\n            <button data-id=\"" + todo.id + "\" class=\"delete-button\">Delete</button>  \n          </li>";
        }
    });
    html += "\n        </ul>\n      </div>\n      <div class=\"middlePanel\">\n        <ul>";
    // Render "inProgress" tasks
    array.forEach(function (todo) {
        if (todo.progress === "inProgress") {
            html += "\n          <li>\n            <select data-id=\"" + todo.id + "\" class=\"select-progress\">\n            <option value=\"none\" >Progress</option>\n              <option value=\"new\" >New</option>\n              <option value=\"inProgress\" >In Progress</option>\n              <option value=\"Done\" >Done</option>\n            </select>\n            <h4>" + todo.title + "</h4>\n            <p>" + todo.description + "</p>\n            <button data-id=\"" + todo.id + "\" class=\"delete-button\">Delete</button>\n          </li>";
        }
    });
    html += "\n        </ul>\n      </div>\n      <div class=\"rightPanel\">\n        <ul>";
    // Render "finished" tasks
    array.forEach(function (todo) {
        if (todo.progress === "Done") {
            html += "\n          <li>\n            <select data-id=\"" + todo.id + "\" class=\"select-progress\">\n            <option value=\"none\" >Progress</option>\n              <option value=\"new\" >New</option>\n              <option value=\"inProgress\">In Progress</option>\n              <option value=\"Done\" >Done</option>\n            </select>\n            <h4>" + todo.title + "</h4>\n            <p>" + todo.description + "</p>\n            <button data-id=\"" + todo.id + "\" class=\"delete-button\">Delete</button>\n          </li>";
        }
    });
    html += "\n        </ul>\n      </div>\n    </div>";
    // Inject HTML into root element
    root.innerHTML = html;
    // Add event listeners for select elements
    var selects = document.querySelectorAll('.select-progress');
    selects.forEach(function (select) {
        select.addEventListener('change', function (event) {
            var selectElement = event.target;
            var todoId = selectElement.getAttribute('data-id');
            var newProgress = selectElement.value;
            // Find the task by id and update its progress
            var todo = array.find(function (todo) { return todo.id === todoId; });
            if (todo) {
                todo.setProgress(newProgress);
                console.log("Updated task progress to: " + newProgress + " for ID: " + todoId);
                // Re-render the list with updated progress
                updateProgressDB(todo);
                renderToDo(array);
            }
        });
    });
    var deleteButtons = document.querySelectorAll('.delete-button');
    deleteButtons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            var buttonElement = event.target;
            var todoId = buttonElement.getAttribute('data-id');
            // Find the index of the task by id and remove it from the array
            var taskIndex = array.findIndex(function (todo) { return todo.id === todoId; });
            if (taskIndex !== -1) {
                array.splice(taskIndex, 1); // Remove the task from the array
                console.log("Deleted task with ID: " + todoId);
                // Re-render the list after deletion
                deleteFromDB(todoId);
                renderToDo(array);
            }
        });
    });
}
// Call the handleList function to initialize
//handleList();
