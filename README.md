# Expense Tracker v1

Expense Tracker v1 is a modern web application built with [React.js](https://reactjs.org/), styled using [Tailwind CSS](https://tailwindcss.com/), and powered by [Firebase](https://firebase.google.com/). This application leverages custom hooks and the React Context API to manage and track the global state of user transactions in real-time, offering a seamless and responsive user experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have the following prerequisites installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Firebase CLI](https://firebase.google.com/docs/cli)

Install the Firebase CLI globally if you haven't already:

```bash
npm install -g firebase-tools
```

### Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/yourprojectname.git
cd yourprojectname
```

### Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### Set Up Firebase

Configure Firebase for the project:

1. Create a Firebase project in the Firebase console.
2. Add your Firebase configuration to the project.
3. Initialize Firebase in your project directory:

```bash
firebase init
```

### Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables for Firebase configuration:

```plaintext
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

## Usage

Instructions for running and using the project.

### Running the Development Server

Start the development server:

```bash
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the application.

## Features

Key features and functionalities of the project include:

- **User Authentication:** Secure login using Google accounts.
- **Transaction Management:** Add, view, and manage income and expenses seamlessly.
- **Real-time Data Fetching:** Instant updates to transaction data using Firebase Firestore, accessible across devices.
- **Responsive Design:** Fully responsive layout using Tailwind CSS for an optimal user experience on all devices.

### Future Enhancements

- **Sorting Transaction History:** Enhanced sorting options for better transaction management.
- **Editable Transactions:** Ability to edit existing transaction entries.
- **Additional Features:** More functionalities to improve user experience.

## API

Details about the API endpoints, request formats, and examples.

### Endpoints

- `GET /transactions`: Retrieve all transactions.
- `POST /transactions`: Create a new transaction.
- `DELETE /transactions/:id`: Delete a transaction by ID.

### Example Request

Here is an example of how to create a new transaction using curl:

```bash
curl -X POST http://localhost:3000/transactions -d '{"transactionType": "expense", "transactionAmount": 100}'
```

## Contributing

We welcome contributions to enhance the project. Follow these steps to contribute:

### Fork the Repository

Fork the repository to your GitHub account:

```bash
git clone https://github.com/yourusername/yourprojectname.git
```

### Create a Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
```

### Commit Your Changes

Commit your changes with a descriptive commit message:

```bash
git commit -m 'Add new feature'
```

### Push to the Branch

Push your branch to GitHub:

```bash
git push origin feature/your-feature-name
```

### Open a Pull Request

Open a pull request in the GitHub repository with a detailed description of your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

We would like to thank the following resources and libraries for their invaluable contributions:

- [React](https://reactjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
