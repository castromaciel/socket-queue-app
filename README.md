<!-- PROJECT TITLE -->
<h1 align="center">Socket Queue App</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#technologies-used">Technologies used</a></li>
      </ul>
    </li>
    <li>
      <a href="#development">Development</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#make-it-your-own">Make it your own</a></li>
        <li><a href="#install-dependencies">Install dependencies</a></li>
        <li><a href="#available-scripts">Available Scripts</a></li>
      </ul>
    </li>
    <li><a href="#base-dependencies">Base Dependencies</a></li>
    <li><a href="#folder-structure">Folder Structure</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#credits">Credits</a></li>
  </ol>
</details>

## About the project
The app is all about practicing socket fundamentals and custom events.

For this, an application is created in which tickets can be created and attended to on the screen. We access the screens through a form and a name.
<hr />
<img width="1435" alt="image" src="https://github.com/castromaciel/socket-queue-app/assets/83432755/d33c3f86-45a5-417c-8955-de11ec8fb273">

On this screen (or desktop) we can attend to these tickets one by one. In addition, we can see the pending tickets.
<hr />
<img width="1410" alt="image" src="https://github.com/castromaciel/socket-queue-app/assets/83432755/e91307e3-21f2-4b89-86dd-1211223f5221">

<img width="1433" alt="image" src="https://github.com/castromaciel/socket-queue-app/assets/83432755/73bff974-d905-4d6c-9f3a-e7f0381204ce">

### Technologies used
[![socket.io][socket.io]][socket.io-url]
[![javascript][javascript]][javascript-url]
[![nodejs][nodejs]][nodejs-url]

## Development

### Prerequisites
Before init, we need:

* [Nodejs][nodejs-url]

### Make it your own
To get a local copy, clone it using:
```bash
git clone https://github.com/github_username/repo_name.git
```

Or get it downloading

```bash
rm -rf .git && git init
git add .
git commit -m "Initial commit"
```

### Install dependencies:

```bash
pnpm install
#or
yarn install
#or
npm install 
```

### Available Scripts

In this project, you can run the following scripts:

| Scripts       | Description                                         |
| ------------- | --------------------------------------------------- |
| pnpm dev      | Runs the app in the development mode.               |
| pnpm start    | Runs the app in production mode.                    |

## Base Dependencies

- [cors](https://github.com/expressjs/cors#readme) for providing a Connect/Express middleware.
- [dotenv](https://github.com/motdotla/dotenv#readme) loads environment variables from a .env file into process.env.
- [socket.io](https://expressjs.com/) bidirectional and low-latency communication for every platform.

## Folder Structure

```bash
socket-queue-app/
├── db                       # Database
├── node_modules             # Third party libraries
├── public                    
|  ├── audio                  
|  ├── css                   # stylesheet 
|  ├── js                     
|  ├── index.html            # index file 
└── src                      # Root directory
|  ├── models                # Classes
|  ├── sockets               # Socket controllers
|  └── server                # Server configuration and initialization
├── .gitignore               # Files ignored at publish into github
├── app.js                   # Server instance
├── LICENSE                  # License information
├── nodemon.json             # nodemon configuration
├── package.json
├── pnpm-lock.yaml
└── README.md                 
```

## License

This project is licensed under the terms of the [MIT license][license-url].

## Credits

Project_title is built and maintained by [Castro Maciel][profile-url].

Badges used from [Ileriayo • markdown-badges](https://github.com/Ileriayo/markdown-badges).


<!-- MARKDOWN LINKS & IMAGES -->
[license-url]: https://github.com/castromaciel/socket-queue-app/blob/main/LICENSE
[nodejs-url]: https://nodejs.org/en
[profile-url]: https://github.com/castromaciel

[socket.io]: https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101
[socket.io-url]: https://socket.io/get-started/chat
[javascript]: https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E
[javascript-url]: https://devdocs.io/javascript/
[nodejs]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/en
