# Use an official Node runtime as a parent image
FROM node:lts

# Set the working directory in the container
WORKDIR /server

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source inside Docker image
COPY . .

# Your app binds to port 3000, so use the EXPOSE instruction to have it mapped by the docker daemon
EXPOSE 5555

# Define the command to run your app
CMD [ "node", "server.js" ]
