# Base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the Astro project
RUN npm run build

# Expose port (Astro default port is 4321)
EXPOSE 4321

# Start command for production
CMD ["npm", "run", "preview", "--", "--host"] 