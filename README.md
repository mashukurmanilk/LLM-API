# 🤖 LLM API — Gemini + TypeScript

A small TypeScript CLI project for learning how to integrate an **LLM API into a Node.js application** using Google's Gemini API.

The project demonstrates the fundamentals of connecting an application to a hosted large language model, securely loading API credentials from environment variables, sending a prompt, handling the asynchronous response, and reading the generated text.

## 🎯 Project Goal

This project was built as a hands-on introduction to **LLM API integration and AI engineering fundamentals**.

The main concepts explored are:

* Calling an LLM from a TypeScript application
* Using Google's official Gemini SDK
* Managing API keys with environment variables
* Working with asynchronous API calls
* Handling API responses
* Reading generated model output
* Building a simple terminal-based AI interaction

## 🛠️ Tech Stack

* **TypeScript**
* **Node.js**
* **Google Gemini API**
* **Google GenAI SDK**
* **dotenv**
* **tsx**
* **ES Modules**

## ✨ Features

* 🔑 Environment-based Gemini API authentication
* 🤖 Gemini model integration
* 💬 Terminal-based user input
* ⚡ Asynchronous LLM API requests
* 📦 Structured API response handling
* 🛡️ API key kept outside the source code
* 🧩 TypeScript-based implementation
* 🖥️ Command-line interface

## 🧠 How It Works

The application follows a simple flow:

```text
User
 │
 │ enters prompt
 ▼
Terminal CLI
 │
 ▼
TypeScript Application
 │
 │ reads GEMINI_API_KEY
 ▼
Google GenAI SDK
 │
 ▼
Gemini API
 │
 ▼
Generated Response
 │
 ▼
Terminal
```

The application first loads environment variables using `dotenv`, reads the `GEMINI_API_KEY`, and initializes a `GoogleGenAI` client. It then accepts input from the terminal and makes an asynchronous `generateContent` request to Gemini.

## 📦 Dependencies

### Runtime Dependencies

| Package         | Purpose                                                      |
| --------------- | ------------------------------------------------------------ |
| `@google/genai` | Official Google GenAI SDK for interacting with Gemini models |
| `dotenv`        | Loads environment variables from `.env`                      |

### Development Dependencies

| Package       | Purpose                               |
| ------------- | ------------------------------------- |
| `typescript`  | TypeScript compiler and type checking |
| `tsx`         | Execute TypeScript files directly     |
| `@types/node` | Node.js type definitions              |

These dependencies are defined in the project's current `package.json`.

## 🔐 Environment Variables

The project expects a Gemini API key to be provided through an environment variable:

```env
GEMINI_API_KEY=your_gemini_api_key
```

Create a `.env` file in the root directory:

```text
LLM-API/
├── src/
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

**Never commit your actual API key to GitHub.**

The application checks whether `GEMINI_API_KEY` exists before initializing the Gemini client.

## 💻 Run Locally

### Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* A Gemini API key

### 1. Clone the repository

```bash
git clone https://github.com/mashukurmanilk/LLM-API.git
```

### 2. Enter the project directory

```bash
cd LLM-API
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create your environment file

Create a `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key
```

### 5. Start the application

```bash
npm run dev
```

The project's current `dev` script runs `src/index.ts` through `tsx`.

### 6. Interact with the application

The program opens a terminal prompt:

```text
How can I help you today?
```

Enter your input and the application will make an LLM API request and print the generated response.

## 📂 Project Structure

```text
LLM-API/
│
├── src/
│   └── index.ts          # Main application
│
├── .gitignore
├── i.ts                  # Initial SDK experiment
├── package.json          # Dependencies and scripts
├── package-lock.json
├── tsconfig.json         # TypeScript configuration
└── README.md
```

The main application logic is contained in `src/index.ts`.

## 🔎 Core Implementation

The Gemini client is initialized using the API key from the environment:

```typescript
const apikey = process.env.GEMINI_API_KEY;

const client = new GoogleGenAI({
  apiKey: apikey
});
```

The application then calls Gemini through the SDK:

```typescript
const response = await client.models.generateContent({
  model: "gemini-3.6-flash",
  contents: "Explain what a callback function is in JavaScript in simple terms."
});
```

The generated text can then be accessed through:

```typescript
response.text
```

This is the central API integration demonstrated by the project.

## 📚 What I Learned

This project helped explore the basic building blocks required for AI-powered applications:

1. **API authentication**
2. **Environment variable management**
3. **SDK-based API integration**
4. **Async/await**
5. **TypeScript with Node.js**
6. **LLM request/response flow**
7. **CLI-based interaction with an AI model**

## 🚧 Future Improvements

Possible next steps for turning this learning project into a more complete LLM application:

* Accept the actual user prompt instead of using a hard-coded prompt
* Add conversation history
* Support multi-turn conversations
* Add streaming responses
* Add system instructions
* Expose model and generation configuration
* Add temperature and token controls
* Improve error handling
* Add request/response logging
* Add a web interface
* Add an Express/Fastify API layer
* Add structured output
* Add function/tool calling
* Add RAG capabilities

## 🔗 Links

* **GitHub Repository:** https://github.com/mashukurmanilk/LLM-API
* **GitHub Profile:** https://github.com/mashukurmanilk

## 👨‍💻 Author

**Mashuk-ur Rahman**

* GitHub: https://github.com/mashukurmanilk
* LinkedIn: https://www.linkedin.com/in/ur-manik-8055382a2/

---

⭐ If you found this project useful, consider giving the repository a star.
