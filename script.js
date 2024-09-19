// Create empty array for save data
const listTask = [];

// Create function add data
const addTask = function (nameTask) {
  if (typeof nameTask === "string") {
    listTask.push({
      name: nameTask,
      isComplete: false,
    });
    console.log(`${nameTask} added successfully`);
    console.log(`--------------------------------`);
  } else {
    console.log(`Please enter data in string form!`);
  }
};

// Create function for delete data
const deleteTask = function (index) {
  if (index >= 0 && index < listTask.length) {
    const deleted = listTask[index];
    listTask.splice(index, 1);
    console.log(`List ${deleted.name} deleted successfully`);
  } else {
    console.log(`Please enter the correct index!!`);
  }
};

addTask("WorkOut");
addTask("Take a rest");

console.log(listTask);

// Create function markTask as Completed
const markTask = function (index) {
  if (index >= 0 && index < listTask.length) {
    listTask[index].isComplete = true;
    console.log(`Task ${listTask[index].name} completed`);
  } else {
    console.log(`Task ${listTask[index].name} not completed`);
  }
};

markTask(0);
console.log(listTask);
