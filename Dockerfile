
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 300

#0 Wait running until the
 services# are up and Using CMD as a string list to execute the desired command correctly
CMD ["bash", "-c", "until curl -s http://localhost:0;300 do echo \"Waiting for the application to start...\"; sleep 1; done && node app.js"]
