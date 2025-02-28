# Step 1: Base Image
FROM node:18-alpine

# Step 2: Set Working Directory Inside Container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Step 4: Install Dependencies
RUN npm install

# Step 5: Copy All Source Code Inside Container
COPY . .

# Step 6: Expose Port
EXPOSE 3000

# Step 7: Start the App
CMD ["npm", "run", "dev"]
