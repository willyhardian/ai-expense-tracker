# AI Expense Tracker

A React-based web application that uses Google's Gemini AI to scan and extract structured data from receipt images, helping users track and manage their expenses efficiently.

## ✨ Features

-   **Receipt Scanning**: Upload receipt images to automatically extract structured data
-   **Data Extraction**: Extracts store name, date, items, prices, discounts, subtotal, tax, and total
-   **JSON Output**: Converts receipt data into structured JSON format for easy processing

## 🛠️ Tech Stack

-   **Frontend**: React with Vite
-   **Styling**: Tailwind CSS
-   **AI Integration**: Google Gemini API
-   **Code Quality**: ESLint

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/willyhardian/ai-expense-tracker.git
cd ai-expense-tracker
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with your Gemini API key:

```
VITE_GEMINI_API_KEY=your-gemini-api-key
```

## 🏃‍♂️ Running the Application

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## 📝 Code Structure

-   `src/utils/geminiApi.js`: Handles communication with Google's Gemini API for image processing
-   `vite.config.js`: Configuration for the Vite build tool
-   `eslint.config.js`: ESLint configuration for code quality

## 🧩 How It Works

1. Users upload receipt images through the web interface
2. The application sends the image to Google's Gemini AI via the API
3. Gemini processes the image using OCR and extracts structured data
4. The application receives the structured JSON data and displays it to the user

## 📄 License

[MIT License](LICENSE)

## 👨‍💻 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
