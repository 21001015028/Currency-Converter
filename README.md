# Currency Converter

A simple React app to convert between different currencies using real-time exchange rates.

## Features
- Convert between multiple currencies
- Real-time exchange rates (powered by currencyapi.com)
- Responsive and user-friendly interface

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/currency-converter.git
   cd currency-converter
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the App
Start the development server:
```sh
npm start
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
```sh
npm run build
```

## Project Structure
```
public/
  index.html
  manifest.json
src/
  App.js
  App.css
  index.js
  index.css
  setupTests.js
  components/
    converter.js
    converter.css
package.json
README.md
```

## API Key
This app uses [currencyapi.com](https://currencyapi.com/) for exchange rates. The API key is hardcoded in `src/components/converter.js`. For production, use environment variables for API keys.

## License
MIT

---
Made with ❤️ using React.
