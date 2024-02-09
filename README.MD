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

Can be done via enviroment variables. Can be changed in the `.env` file:
- `PORT`: The port exposed by the node app and the docker container.
- `PUBLIC_PATH`: The path relative to root directory to the directory with the files to serve statically.