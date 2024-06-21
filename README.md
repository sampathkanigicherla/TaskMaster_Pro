# TaskMaster_Pro

# Task Management Application

## Description

A simple Task Management Application that allows users to create, read, update, and delete tasks. This project demonstrates proficiency in both front-end and back-end development using HTML, CSS, JavaScript, and Node.js with Express.

## Features

- Add new tasks with a title, description, and due date.
- View a list of all tasks.
- View detailed information of each task.
- Edit existing tasks.
- Delete tasks.
- Responsive design for both desktop and mobile devices.

## Technologies Used

- Front-end: HTML, CSS, JavaScript
- Back-end: Node.js, Express
- Dependencies: `express`, `body-parser`, `cors`, `uuid`

## Project Structure

task-management-app/
├── public/
│ ├── index.html
│ ├── styles.css
│ └── script.js
├── server.js
├── package.json
└── README.md


## Installation and Setup

### Prerequisites

- Node.js and npm installed on your machine.

### Steps

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd task-management-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the back-end server:**

    ```bash
    node server.js
    ```

4. **Open the front-end:**

    Open the `public/index.html` file in your web browser:
    - Simply double-click the `index.html` file to open it in your default web browser.
    - Alternatively, you can use a simple HTTP server like `live-server`:
      ```bash
      npm install -g live-server
      live-server public
      ```

5. **Navigate to the application:**

    - Open your browser and go to `http://localhost:3000` to see the Task Management Application.

## API Endpoints

### Get all tasks

- **URL:** `/tasks`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:** `[{ id, title, description, dueDate }]`

### Create a new task

- **URL:** `/tasks`
- **Method:** `POST`
- **Data Params:** `{ title: string, description: string, dueDate: string }`
- **Success Response:**
  - **Code:** `200`
  - **Content:** `{ id, title, description, dueDate }`

### Get a task by ID

- **URL:** `/tasks/:id`
- **Method:** `GET`
- **Success Response:**
  - **Code:** `200`
  - **Content:** `{ id, title, description, dueDate }`
- **Error Response:**
  - **Code:** `404`
  - **Content:** `Task not found`

### Update a task by ID

- **URL:** `/tasks/:id`
- **Method:** `PUT`
- **Data Params:** `{ title: string, description: string, dueDate: string }`
- **Success Response:**
  - **Code:** `200`
  - **Content:** `{ id, title, description, dueDate }`
- **Error Response:**
  - **Code:** `404`
  - **Content:** `Task not found`

### Delete a task by ID

- **URL:** `/tasks/:id`
- **Method:** `DELETE`
- **Success Response:**
  - **Code:** `200`
  - **Content:** `Task deleted`

## Future Improvements

- Implement authentication for user-specific task management.
- Add more detailed error handling and validation.
- Enhance the UI with better styling and animations.
- Add functionality for task prioritization and categorization.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the [Express](https://expressjs.com/) team for their excellent web framework.
- Thanks to the [Node.js](https://nodejs.org/) community for their continuous support and development.
