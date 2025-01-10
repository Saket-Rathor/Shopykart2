FROM node:18

WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Build the app
RUN npm run build

# Install serve globally to serve the build folder
RUN npm install -g serve

# Expose the necessary port
EXPOSE 5000

# Serve the app from the dist directory
CMD ["serve", "-s", "dist"]
