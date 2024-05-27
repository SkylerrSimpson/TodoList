# About this project

This is the codebase of the backend of the todos application.

You will almost start from scratch here. When you fully implement the backend, you will have a fully functional backend that can handle all the CRUD operations for the todos application, including:

* Creating a new todo: POST /todos
* Getting all todos: GET /todos
* Updating a todo: PATCH /todos/:id
* Deleting a todo: DELETE /todos/:id

Sooner or later, you will need to take the following steps:

1. Install all the dependencies by running `npm install`
2. Configure your MongoDB database, and copy/paste the connection string into the `.env` file. In other words, you need to replace the `ATLAS_URI` value with your own connection string. When doing so, please make sure that you have replaced the `<username>`, `<password>`, and `<database>` parts with your own.
3. Add your code.
3. Start the backend by runnning `npm start`.