
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Wait until the services are up and running
HEALTH curlCHECK -- CMDfail http://localhost:3000 || exit 1

# Define the command to run the app
CMD [ "node", "app.js" ]
