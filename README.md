# iNotebook - Your Personal Note Manager

iNotebook is a full-stack web application developed using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to manage their personal notes with features such as authentication, note creation, editing, deletion, and viewing.

## Features

- **User Authentication**:
  - Secure user registration and login using JWT (JSON Web Tokens).
  - Passwords are securely hashed using `bcrypt`.

- **Note Management**:
  - **Create Notes**: Users can create new notes.
  - **View Notes**: All notes are displayed in a user-friendly interface.
  - **Edit Notes**: Users can edit the content of their notes.
  - **Delete Notes**: Users can delete notes they no longer need.
  - Notes are stored securely in the MongoDB database and are accessible only by the authenticated user.

- **Responsive Design**:
  - The application is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

## Technologies Used

- **MongoDB**: NoSQL database for storing user notes and information.
- **Express.js**: Backend framework used to build the RESTful API.
- **React.js**: Frontend library used for building the user interface.
- **Node.js**: JavaScript runtime environment for running the backend server.
- **JWT**: For secure authentication and session management.
- **Mongoose**: ODM for MongoDB, used to interact with the database.
- **bcrypt**: For hashing passwords securely.

## Installation and Setup

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **MongoDB**: Set up MongoDB locally or use a cloud service like MongoDB Atlas.

### Steps to Set Up the Project

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/AtrePramod/inotebook.git
    ```

2. **Install Backend Dependencies**:
    ```bash
    cd ../backend
    npm install
    ```

3. **Install Frontend Dependencies**:
    ```bash
    npm install
    ```

5. **Run the Backend**:
    ```bash
    cd ../backend
    npm start
    ```

6. **Run the Frontend**:
    ```bash
    npm start
    ```

7. **Access the Application**:
    - Open your browser and go to `http://localhost:3000` to use iNotebook.

## Usage

- **Register/Login**: Create an account or log in to access your notes.
- **Create Notes**: Add new notes with titles and descriptions.
- **View Notes**: Browse through all your saved notes.
- **Edit Notes**: Modify existing notes to update their content.
- **Delete Notes**: Remove notes that you no longer need.


## Contact

For any questions or issues, please contact [pramodatre05@gmail.com](mailto:pramodatre05@gmail.com).
