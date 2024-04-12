# Contact Management App

This is a simple contact management application built using React.js and Firebase Firestore. It allows users to manage their contacts by adding, editing, and deleting them.

## Features

- View a list of contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- Search for contacts by name

## Technologies Used

- React.js: Frontend JavaScript library for building user interfaces.
- Firebase Firestore: Cloud-hosted NoSQL database used for storing contact data.
- react-toastify: Library for displaying toast notifications.

## Setup Instructions

1. Clone the repository:

```
git clone https://github.com/Nagendraindus/contact_app_firebase.git
```

2. Install dependencies:

```
cd contact-management-app
npm install
```

3. Configure Firebase:

   - Create a Firebase project on the [Firebase Console](https://console.firebase.google.com/).
   - Set up Firestore database.
   - Obtain Firebase configuration settings.

4. Update Firebase configuration:

   - Create a `config` folder in the `src` directory.
   - Create a file named `firebase.js` inside the `config` folder.
   - Add your Firebase configuration settings to `firebase.js`:

   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };

   const app = initializeApp(firebaseConfig);
   const db = getFirestore(app);

   export { db };
   ```
5. Run the application:
```
npm run dev
```





#
Folder Structure
```
contact-management-app/
│
├── public/            # Public assets and HTML template
│   └── index.html
│
├── src/               # Source code
│   ├── components/    # React components
│   ├── config/        # Firebase configuration
│   ├── App.jsx        # Main application component
│   └── index.js       # Entry point
│
├── package.json       # Node.js dependencies and scripts
├── README.md          # Project documentation
└── .gitignore         # Files and directories ignored by Git
```


# **License**
This project is licensed under the MIT License

Feel free to customize the README.md according to your project's specific details and requirements!


