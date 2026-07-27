# Base Image
FROM node:24-alpine

# Working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose Vite port
EXPOSE 5173

# Start Vite
CMD ["npm", "run", "dev", "--", "--host"]