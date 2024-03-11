// Import the library
const UAParser = require('ua-parser-js');

// Create a new instance of the parser
const parser = new UAParser();

// Get the user-agent string (you can replace it with an actual user-agent string)
const userAgentString = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36';

// Parse the user-agent string
const result = parser.setUA(userAgentString).getResult();

// Extract browser information
const browserName = result.browser.name;
const browserVersion = result.browser.version;

// Output the browser information
console.log('Browser:', browserName);
console.log('Version:', browserVersion);