# Use Alpine as the base image
FROM alpine:latest

# Install dependencies
RUN apk add --no-cache git nodejs npm

# Clone the GitHub repository
RUN git clone https://github.com/itsyashsahu/signopedia.git /app

# Set the working directory
WORKDIR /app

# Install the application dependencies
RUN npm install
RUN git pull
RUN npm run build
CMD ["npm run start"]

# Install pm2 globally
# RUN npm install pm2 -g

# Set the startup command to use pm2
# CMD ["pm2-runtime", "start", "app.js"]
