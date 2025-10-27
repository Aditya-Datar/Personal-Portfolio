# Custom React Portfolio

This repository contains a **personal portfolio website** built using **React**. It serves as a professional portfolio framework to showcase projects, patents, and experience with easy configuration through a single data file.



## 📁 Repository Overview

```

Portfolio/
│
├── node_modules/             # Installed dependencies
│
├── public/                   # Static assets and public files
│   ├── images/               # Project and profile images
│   ├── index.html            # HTML entry point for React
│   └── netlify.toml          # Netlify deployment configuration
│
├── src/                      # React source code and configuration
│   ├── components/           # Reusable UI components
│   ├── contexts/             # Context providers for global state
│   ├── App.css               # Global CSS styling
│   ├── App.js                # Main application component
│   ├── index.css             # Global CSS entry file
│   ├── index.js              # React entry point (renders the app)
│   └── portfolio.js          # Main configuration file for data, projects, and skills
│
├── .env                      # Environment variables (optional)
├── .eslintrc.json            # ESLint configuration
├── .prettierrc.json          # Prettier formatting configuration
├── LICENSE                   # License information
├── package.json              # Dependencies and project metadata
├── package-lock.json          # NPM dependency lock file
├── yarn.lock                 # Yarn dependency lock file
└── README.md                 # Project documentation (this file)

```



## ⚙ Setup and Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Aditya-Datar/Personal-Portfolio
cd portfolio

# Using yarn
yarn install
yarn start

# Or using npm
npm install
npm start
````

The development server will start at [http://localhost:3000](http://localhost:3000).



## 🧩 Configuration

All portfolio content is defined in **`src/portfolio.js`**.
This single file controls:

* Header and footer details
* About section (name, role, and description)
* Technical skills and categories
* Project details (name, description, stack, links)
* Contact and social links

You can customize these fields without editing any React components.




## 🧱 Project Structure

| Section     | Description                                                             |
| ----------- | ----------------------------------------------------------------------- |
| `aboutMe`   | Holds name, image, role, description, and technical skills.             |
| `projects`  | List of projects, internships, and patents with their stacks and links. |
| `infoCards` | Education and professional summary displayed on the portfolio cards.    |
| `skills`    | Flat list of normalized and deduplicated technical skills.              |
| `footer`    | Footer navigation and social links.                                     |
| `contact`   | Contact section and location info.                                      |




## 🧠 Customization Guide

* **Images**: Place local project images inside `public/images/` or use external URLs.
* **Colors / Styling**: Adjust theme values and CSS variables in the `src` directory.
* **Icons**: You can use emojis or import icons from libraries such as `lucide-react`.
* **Text / Layout**: Each section is automatically generated from `portfolio.js`.



## ☁ Deployment

This project is configured for deployment on **GitHub Pages**.

1. Edit the homepage field in `package.json`:

   ```json
   "homepage": "https://aditya-datar.netlify.app/"
   ```

2. Build and deploy:

   ```bash
   yarn build
   yarn deploy
   ```



## 🧾 License

This repository is released under the [MIT License](https://choosealicense.com/licenses/mit/). Content © 2025 **Aditya Datar**.




## 🧩 Key Features

* Built with **React + Vite** for fast builds and modular structure.
* Single-source configuration via `portfolio.js`.
* Fully responsive layout optimized for modern browsers.
* Easy integration with GitHub Pages or custom domains.
* Minimal dependencies, simple deployment workflow.

---

## 🧰 Tech Used

* **Frontend**: React, JavaScript, HTML5, CSS3
* **Tooling**: Yarn, ESLint, Prettier
* **Deployment**: GitHub Pages

---