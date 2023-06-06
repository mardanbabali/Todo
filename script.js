// Create an empty array to store the to-do list
let toDoList = [];

// Function to add a task to the to-do list
function addTask(task) {
  toDoList.push(task);
  console.log(`Task "${task}" has been added to the to-do list.`);
}

// Function to remove a task from the to-do list
function removeTask(task) {
  const index = toDoList.indexOf(task);
  if (index > -1) {
    toDoList.splice(index, 1);
    console.log(`Task "${task}" has been removed from the to-do list.`);
  } else {
    console.log(`Task "${task}" is not found in the to-do list.`);
  }
}

// Function to display the current to-do list
function displayList() {
  if (toDoList.length === 0) {
    console.log("The to-do list is empty.");
  } else {
    console.log("Current to-do list:");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i + 1}. ${toDoList[i]}`);
    }
  }
}
