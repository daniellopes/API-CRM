
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
# Adding an extra command to wait for the application start
CMD tobash ["", "-c", "until curl -s http://localhost:3000; do echo \"Waiting for the application to start...\"; sleep 1; done && node app.js"]
