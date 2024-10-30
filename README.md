# Cengineers

Welcome to **Cengineers**, the official chat application developed by our team of engineers for efficient and secure communication. Designed with a focus on simplicity and functionality, **Cengineers** offers users the ability to connect and communicate within dedicated rooms, share messages, and collaborate smoothly.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Usage](#usage)

---

## Project Overview

**Cengineers** is a real-time messaging platform that provides secure chat rooms, individual and group messaging, and user-friendly interactions within an intuitive interface. This application has been built exclusively for internal use, facilitating communication and collaboration among team members in a seamless way.

> **Note:** This project is private, and external contributions are not currently being accepted.

---

## Features

- **Real-Time Messaging**: Exchange messages in real time with low latency.
- **Chat Rooms**: Join dedicated rooms to collaborate on specific topics or projects.
- **User Profiles**: Customize user profiles for personalized experiences.
- **Message Encryption**: Secure messages with end-to-end encryption.
- **Notifications**: Get notified for new messages and activity within rooms.
- **Responsive Design**: Optimized for desktop and mobile devices.

---

## Technology Stack

The following technologies are used to build and maintain **Cengineers**:

- **Backend**: Node.js, Express.js
- **Frontend**: React.js, Redux
- **Database**: MongoDB
- **Real-Time Communication**: WebSockets with Socket.IO
- **Authentication**: JWT (JSON Web Token)
- **Styling**: Sass

---

## Getting Started

To get started with **Cengineers** internally, please contact the administrator for access and follow the installation instructions.

### Prerequisites

- **Node.js** (version 14 or higher)
- **MongoDB** (for data storage)
- **NPM** (Node Package Manager)

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/Cengineers/CengineersApp.git
cd CengineersApp
npm install
```

Configure environment variables by creating a `.env` file in the root directory. Required variables include:

```plaintext
DB_URI=<MongoDB_URI>
JWT_SECRET=<Your_JWT_Secret>
```

To start the server:

```bash
npm start
```

---

## Usage

After installation, navigate to `http://localhost:3000` in your browser to access the **Cengineers** app.

Use the following default credentials (provided by the administrator) to log in and explore the chat rooms, send messages, and customize your profile.

### Basic Commands

- **Enter Room**: Select or search for rooms to join and start messaging.
- **Send Message**: Type and send messages in real-time.
- **Notifications**: Enable browser notifications to stay updated on messages and activity.
