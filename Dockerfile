# Stage 1: Build the React app
FROM node:alpine AS build
WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app using Vite
RUN npm run build

# Add a debug step to ensure the dist folder exists
RUN ls -al /app/dist

# Stage 2: Serve the app with Nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app from the previous stage (dist folder)
COPY --from=build /app/dist /usr/share/nginx/html
