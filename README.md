# Power TODO expo

![Todo List App Screenshot](./screenshot.png)

Welcome to Awesome Todo List App! This is a simple and intuitive to-do list application built with React Native and Django, utilizing Expo to support both web and mobile platforms.

## Live

Front-web <https://power-todo.vercel.app/>

API <https://power-todo.herokuapp.com/api>

## Features

- Add, edit, and delete tasks
- Mark tasks as completed
- Easy-to-use user interface

## Technologies Used

- React Native (<https://github.com/facebook/react-native>)
- Expo (<https://github.com/expo/expo>)
- Axios (<https://github.com/axios/axios>)
- Yup (<https://github.com/jquense/yup>)
- React-hook-form (<https://github.com/react-hook-form/react-hook-form>)
- Django (<https://github.com/django/django>)
- Django REST Framework (<https://github.com/encode/django-rest-framework>)
- Mysql (<https://github.com/PyMySQL/mysqlclient>)

## Installation

Before getting started, make sure you have the following prerequisites:

- Node.js (<https://nodejs.org>)
- Expo CLI (<https://expo.dev>)

### Backend repository

<https://github.com/lucasalberto01/power-todo-api>

### Frontend Setup

1. Install the Node.js dependencies:

    ```ssh
    yarn install
    ```

2. Start the Expo development server:

    ```ssh
    npm start
    ```

3. Follow the instructions from the Expo CLI to run the app on your desired platform (web, iOS, or Android).

### Build frontend

1. Run build command:

    ```ssh
    yarn build:web
    ```

2. Deploy to vercel:

    ```ssh
    vercel:deploy
    ```

    Preview Local (option)

    ```ssh
    npx serve web-build
    ```

## Configuration

The application uses environment variables for configuration. Create a `.env` file in the frontend directory and add the following variables:

> API_URL=<http://localhost:8000/>

## Contributing

Contributions are welcome! If you find any issues or want to contribute enhancements, please feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [React Native](https://reactnative.dev) community for their amazing work
- [Django](https://www.djangoproject.com) community for the powerful web framework
- [Expo](https://expo.dev) for simplifying the development workflow
