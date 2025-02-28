# Use Node.js 18 Alpine
FROM node:18-alpine

# Setup pnpm globally
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build the app
RUN pnpm run build 

# Expose Vite dev server port
EXPOSE 5173

# Run the app in development mode with Docker-friendly host
CMD ["npx", "vite", "--host", "0.0.0.0"]
