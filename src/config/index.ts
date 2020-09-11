import dotnet from 'dotenv';

// Load the variables in .env file
dotnet.config();

// Assign variables into an object
const config = {
  port: Number(process.env.PORT) || 4000,
}

export default config;