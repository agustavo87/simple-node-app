# Simple Node App

## Installation

```sh
# Install packages
docker-compose run --rm node npm i

# Copy .env file
cp .env.example .env

# Initialize server with docker
$ docker-compose up
```

## Static files

Serves static assets at `public` folder

## Configuration

You can cofigure the port with the `PORT` env variable, modifiable in the `.env` file.