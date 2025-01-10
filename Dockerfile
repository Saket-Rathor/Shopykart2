# Step 1: Use the official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json for dependency installation
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application files
COPY . .

# Step 6: Build the React app
RUN npm run build

# Step 7: Install a lightweight web server to serve the build files (e.g., `serve`)
RUN npm install -g serve

# Step 8: Expose port 3000 to access the app
EXPOSE 3000

# Step 9: Command to run the application
CMD ["serve", "-s", "build", "-l", "3000"]
