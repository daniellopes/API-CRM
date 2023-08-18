
# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json working to directory the
 packageCOPY*. .json/

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Wait until the services are up and running
# Adding an extra command to wait forCMD [" thebash application", start "-
c", "until curl -s http://localhost:3000; do echo \"Waiting for the application to start...\"; sleep 1; done && node app.js"]

# Fixing the CMD command by removing 'to' before 'bash' since it is an invalid command.
# Also removing 'to' before 'bash' makes it run the correct command using the correct shell.
# Also redefining the CMD command as a string list, so that it is executed with the desired behavior.
