/* Create a multi user account task list */
var taskList = document.createElement('div');
taskList.innerHTML = '<h1>Task List</h1>';
document.body.appendChild(taskList);
var taskListForm = document.createElement('form');
taskListForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
taskListForm.innerHTML += '<input type="submit" value="Add Task" />';
taskList.appendChild(taskListForm);
var taskListTable = document.createElement('table');
taskListTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
taskList.appendChild(taskListTable);
taskListForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = taskListForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var taskListRow = document.createElement('tr');
  taskListRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  taskListTable.appendChild(taskListRow);
  taskListForm.elements.task.value = '';
});
/* web application. */
var webApp = document.createElement('div');
webApp.innerHTML = '<h1>Web Application</h1>';
document.body.appendChild(webApp);
var webAppForm = document.createElement('form');
webAppForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
webAppForm.innerHTML += '<input type="submit" value="Add Task" />';
webApp.appendChild(webAppForm);
var webAppTable = document.createElement('table');
webAppTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
webApp.appendChild(webAppTable);
webAppForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = webAppForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var webAppRow = document.createElement('tr');
  webAppRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  webAppTable.appendChild(webAppRow);
  webAppForm.elements.task.value = '';
});
/* The application must have the following */
var application = document.createElement('div');
application.innerHTML = '<h1>The application must have the following</h1>';
document.body.appendChild(application);
var applicationForm = document.createElement('form');
applicationForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
applicationForm.innerHTML += '<input type="submit" value="Add Task" />';
application.appendChild(applicationForm);
var applicationTable = document.createElement('table');
applicationTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
application.appendChild(applicationTable);
applicationForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = applicationForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var applicationRow = document.createElement('tr');
  applicationRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  applicationTable.appendChild(applicationRow);
  applicationForm.elements.task.value = '';
});
/* features: */
var features = document.createElement('div');
features.innerHTML = '<h1>features:</h1>';
document.body.appendChild(features);
var featuresForm = document.createElement('form');
featuresForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
featuresForm.innerHTML += '<input type="submit" value="Add Task" />';
features.appendChild(featuresForm);
var featuresTable = document.createElement('table');
featuresTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
features.appendChild(featuresTable);
featuresForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = featuresForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var featuresRow = document.createElement('tr');
  featuresRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  featuresTable.appendChild(featuresRow);
  featuresForm.elements.task.value = '';
});
/* 1. Be able to create multiple browser */
var browser = document.createElement('div');
browser.innerHTML = '<h1>1. Be able to create multiple browser</h1>';
document.body.appendChild(browser);
var browserForm = document.createElement('form');
browserForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
browserForm.innerHTML += '<input type="submit" value="Add Task" />';
browser.appendChild(browserForm);
var browserTable = document.createElement('table');
browserTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
browser.appendChild(browserTable);
browserForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = browserForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var browserRow = document.createElement('tr');
  browserRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  browserTable.appendChild(browserRow);
  browserForm.elements.task.value = '';
});
/* level user accounts with nameand */
var userAccounts = document.createElement('div');
userAccounts.innerHTML = '<h1>level user accounts with nameand</h1>';
document.body.appendChild(userAccounts);
var userAccountsForm = document.createElement('form');
userAccountsForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
userAccountsForm.innerHTML += '<input type="submit" value="Add Task" />';
userAccounts.appendChild(userAccountsForm);
var userAccountsTable = document.createElement('table');
userAccountsTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
userAccounts.appendChild(userAccountsTable);
userAccountsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = userAccountsForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var userAccountsRow = document.createElement('tr');
  userAccountsRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  userAccountsTable.appendChild(userAccountsRow);
  userAccountsForm.elements.task.value = '';
});
/* username */
var username = document.createElement('div');
username.innerHTML = '<h1>username</h1>';
document.body.appendChild(username);
var usernameForm = document.createElement('form');
usernameForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
usernameForm.innerHTML += '<input type="submit" value="Add Task" />';
username.appendChild(usernameForm);
var usernameTable = document.createElement('table');
usernameTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
username.appendChild(usernameTable);
usernameForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = usernameForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var usernameRow = document.createElement('tr');
  usernameRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  usernameTable.appendChild(usernameRow);
  usernameForm.elements.task.value = '';
});
/* 2. Be able to create user account */
var userAccount = document.createElement('div');
userAccount.innerHTML = '<h1>2. Be able to create user account</h1>';
document.body.appendChild(userAccount);
var userAccountForm = document.createElement('form');
userAccountForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
userAccountForm.innerHTML += '<input type="submit" value="Add Task" />';
userAccount.appendChild(userAccountForm);
var userAccountTable = document.createElement('table');
userAccountTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
userAccount.appendChild(userAccountTable);
userAccountForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = userAccountForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var userAccountRow = document.createElement('tr');
  userAccountRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  userAccountTable.appendChild(userAccountRow);
  userAccountForm.elements.task.value = '';
});
/* specific list of tasks with title, */
var listOfTasks = document.createElement('div');
listOfTasks.innerHTML = '<h1>specific list of tasks with title,</h1>';
document.body.appendChild(listOfTasks);
var listOfTasksForm = document.createElement('form');
listOfTasksForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
listOfTasksForm.innerHTML += '<input type="submit" value="Add Task" />';
listOfTasks.appendChild(listOfTasksForm);
var listOfTasksTable = document.createElement('table');
listOfTasksTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
listOfTasks.appendChild(listOfTasksTable);
listOfTasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = listOfTasksForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var listOfTasksRow = document.createElement('tr');
  listOfTasksRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  listOfTasksTable.appendChild(listOfTasksRow);
  listOfTasksForm.elements.task.value = '';
});
/* description and deadline (datetime) */
var description = document.createElement('div');
description.innerHTML = '<h1>description and deadline (datetime)</h1>';
document.body.appendChild(description);
var descriptionForm = document.createElement('form');
descriptionForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
descriptionForm.innerHTML += '<input type="submit" value="Add Task" />';
description.appendChild(descriptionForm);
var descriptionTable = document.createElement('table');
descriptionTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
description.appendChild(descriptionTable);
descriptionForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = descriptionForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var descriptionRow = document.createElement('tr');
  descriptionRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  descriptionTable.appendChild(descriptionRow);
  descriptionForm.elements.task.value = '';
});
/* for each task */
var forEachTask = document.createElement('div');
forEachTask.innerHTML = '<h1>for each task</h1>';
document.body.appendChild(forEachTask);
var forEachTaskForm = document.createElement('form');
forEachTaskForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
forEachTaskForm.innerHTML += '<input type="submit" value="Add Task" />';
forEachTask.appendChild(forEachTaskForm);
var forEachTaskTable = document.createElement('table');
forEachTaskTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
forEachTask.appendChild(forEachTaskTable);
forEachTaskForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = forEachTaskForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var forEachTaskRow = document.createElement('tr');
  forEachTaskRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  forEachTaskTable.appendChild(forEachTaskRow);
  forEachTaskForm.elements.task.value = '';
});
/* 3. Be able to share tasks with other user */
var shareTasks = document.createElement('div');
shareTasks.innerHTML = '<h1>3. Be able to share tasks with other user</h1>';
document.body.appendChild(shareTasks);
var shareTasksForm = document.createElement('form');
shareTasksForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
shareTasksForm.innerHTML += '<input type="submit" value="Add Task" />';
shareTasks.appendChild(shareTasksForm);
var shareTasksTable = document.createElement('table');
shareTasksTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
shareTasks.appendChild(shareTasksTable);
shareTasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = shareTasksForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var shareTasksRow = document.createElement('tr');
  shareTasksRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  shareTasksTable.appendChild(shareTasksRow);
  shareTasksForm.elements.task.value = '';
});
/* accounts */
var accounts = document.createElement('div');
accounts.innerHTML = '<h1>accounts</h1>';
document.body.appendChild(accounts);
var accountsForm = document.createElement('form');
accountsForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
accountsForm.innerHTML += '<input type="submit" value="Add Task" />';
accounts.appendChild(accountsForm);
var accountsTable = document.createElement('table');
accountsTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
accounts.appendChild(accountsTable);
accountsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = accountsForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var accountsRow = document.createElement('tr');
  accountsRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  accountsTable.appendChild(accountsRow);
  accountsForm.elements.task.value = '';
});
/* 4. Be able to view shared tasks [task */
var viewSharedTasks = document.createElement('div');
viewSharedTasks.innerHTML = '<h1>4. Be able to view shared tasks [task</h1>';
document.body.appendChild(viewSharedTasks);
var viewSharedTasksForm = document.createElement('form');
viewSharedTasksForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
viewSharedTasksForm.innerHTML += '<input type="submit" value="Add Task" />';
viewSharedTasks.appendChild(viewSharedTasksForm);
var viewSharedTasksTable = document.createElement('table');
viewSharedTasksTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
viewSharedTasks.appendChild(viewSharedTasksTable);
viewSharedTasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = viewSharedTasksForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var viewSharedTasksRow = document.createElement('tr');
  viewSharedTasksRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  viewSharedTasksTable.appendChild(viewSharedTasksRow);
  viewSharedTasksForm.elements.task.value = '';
});
/* details along with owner] in their */
var details = document.createElement('div');
details.innerHTML = '<h1>details along with owner] in their</h1>';
document.body.appendChild(details);
var detailsForm = document.createElement('form');
detailsForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
detailsForm.innerHTML += '<input type="submit" value="Add Task" />';
details.appendChild(detailsForm);
var detailsTable = document.createElement('table');
detailsTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
details.appendChild(detailsTable);
detailsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = detailsForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var detailsRow = document.createElement('tr');
  detailsRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  detailsTable.appendChild(detailsRow);
  detailsForm.elements.task.value = '';
});
/* Shared Tasks space */
var sharedTasks = document.createElement('div');
sharedTasks.innerHTML = '<h1>Shared Tasks space</h1>';
document.body.appendChild(sharedTasks);
var sharedTasksForm = document.createElement('form');
sharedTasksForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
sharedTasksForm.innerHTML += '<input type="submit" value="Add Task" />';
sharedTasks.appendChild(sharedTasksForm);
var sharedTasksTable = document.createElement('table');
sharedTasksTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
sharedTasks.appendChild(sharedTasksTable);
sharedTasksForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = sharedTasksForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var sharedTasksRow = document.createElement('tr');
  sharedTasksRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  sharedTasksTable.appendChild(sharedTasksRow);
  sharedTasksForm.elements.task.value = '';
});
/* 5. Only task owner will have access to */
var taskOwner = document.createElement('div');
taskOwner.innerHTML = '<h1>5. Only task owner will have access to</h1>';
document.body.appendChild(taskOwner);
var taskOwnerForm = document.createElement('form');
taskOwnerForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
taskOwnerForm.innerHTML += '<input type="submit" value="Add Task" />';
taskOwner.appendChild(taskOwnerForm);
var taskOwnerTable = document.createElement('table');
taskOwnerTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
taskOwner.appendChild(taskOwnerTable);
taskOwnerForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = taskOwnerForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var taskOwnerRow = document.createElement('tr');
  taskOwnerRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  taskOwnerTable.appendChild(taskOwnerRow);
  taskOwnerForm.elements.task.value = '';
});
/* change their task details */
var changeTaskDetails = document.createElement('div');
changeTaskDetails.innerHTML = '<h1>change their task details</h1>';
document.body.appendChild(changeTaskDetails);
var changeTaskDetailsForm = document.createElement('form');
changeTaskDetailsForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
changeTaskDetailsForm.innerHTML += '<input type="submit" value="Add Task" />';
changeTaskDetails.appendChild(changeTaskDetailsForm);
var changeTaskDetailsTable = document.createElement('table');
changeTaskDetailsTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
changeTaskDetails.appendChild(changeTaskDetailsTable);
changeTaskDetailsForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = changeTaskDetailsForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var changeTaskDetailsRow = document.createElement('tr');
  changeTaskDetailsRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  changeTaskDetailsTable.appendChild(changeTaskDetailsRow);
  changeTaskDetailsForm.elements.task.value = '';
});
/* Preferred technology stack-JavaScript/ */
var preferredTechnologyStack = document.createElement('div');
preferredTechnologyStack.innerHTML = '<h1>Preferred technology stack-JavaScript/</h1>';
document.body.appendChild(preferredTechnologyStack);
var preferredTechnologyStackForm = document.createElement('form');
preferredTechnologyStackForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
preferredTechnologyStackForm.innerHTML += '<input type="submit" value="Add Task" />';
preferredTechnologyStack.appendChild(preferredTechnologyStackForm);
var preferredTechnologyStackTable = document.createElement('table');
preferredTechnologyStackTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
preferredTechnologyStack.appendChild(preferredTechnologyStackTable);
preferredTechnologyStackForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = preferredTechnologyStackForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var preferredTechnologyStackRow = document.createElement('tr');
  preferredTechnologyStackRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  preferredTechnologyStackTable.appendChild(preferredTechnologyStackRow);
  preferredTechnologyStackForm.elements.task.value = '';
});
/* TypeScript, React. React Native, Redux, */
var typeScript = document.createElement('div');
typeScript.innerHTML = '<h1>TypeScript, React. React Native, Redux,</h1>';
document.body.appendChild(typeScript);
var typeScriptForm = document.createElement('form');
typeScriptForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
typeScriptForm.innerHTML += '<input type="submit" value="Add Task" />';
typeScript.appendChild(typeScriptForm);
var typeScriptTable = document.createElement('table');
typeScriptTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
typeScript.appendChild(typeScriptTable);
typeScriptForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = typeScriptForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var typeScriptRow = document.createElement('tr');
  typeScriptRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  typeScriptTable.appendChild(typeScriptRow);
  typeScriptForm.elements.task.value = '';
});
/* etc. */
var etc = document.createElement('div');
etc.innerHTML = '<h1>etc.</h1>';
document.body.appendChild(etc);
var etcForm = document.createElement('form');
etcForm.innerHTML = '<input type="text" name="task" placeholder="Task" />';
etcForm.innerHTML += '<input type="submit" value="Add Task" />';
etc.appendChild(etcForm);
var etcTable = document.createElement('table');
etcTable.innerHTML = '<tr><th>Task</th><th>User</th></tr>';
etc.appendChild(etcTable);
etcForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var task = etcForm.elements.task.value;
  var user = prompt('Who is doing this task?');
  var etcRow = document.createElement('tr');
  etcRow.innerHTML = '<td>' + task + '</td><td>' + user + '</td>';
  etcTable.appendChild(etcRow);
  etcForm.elements.task.value = '';
});