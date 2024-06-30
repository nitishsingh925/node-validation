process.loadEnvFile();
// get the environment variable
const getEnvVariable = (key) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
};

// Declare variables
let PORT;
let MONGODB_URI;
let DB_NAME;

// Validate the environment variables
try {
  PORT = parseInt(getEnvVariable("PORT"), 10);
  MONGODB_URI = getEnvVariable("MONGODB_URI");
  DB_NAME = getEnvVariable("DB_NAME");
} catch (error) {
  console.error(error.message);
  process.exit(1);
}

// Export the variables after validation
export { PORT, MONGODB_URI, DB_NAME };
