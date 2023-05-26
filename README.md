# Docker sample with NextJs and Mongo

This is a [Next.js](https://nextjs.org/) fullstack sample project with [MongoDB](https://www.mongodb.com/) as NoSQL database and using [Docker](https://www.docker.com/) to run and deploy the application.

## Features

> 1. fullstack development with NextJs.

> 2. using MongoDB as NoSQL database.

> 3. using Mongo Express to manage MongoDB Database.

> 4. using docker volume to persist database records.

> 5. using docker to build images and run containers.

> 6. using docker compose to run services in a docker network.

### How To Use


#### First see this [docker cheat sheet](https://github.com/wsargent/docker-cheat-sheet#readme)

Then install Docker on your machine.

#### 1- Clone the repo and run yarn install.
`$ yarn`
#### 2- Build the NextJs app image using this command:
`$ docker build -t nextjs-docker:1.0 .  `
    
#### 3- Run services with this command: 
`$ docker-compose -f docker-compose.yaml up `

>⚡: for runnig services in detached mode run this command:
####

`$ docker-compose -f docker-compose.yaml start `

#### 4- Open these addresses to see the services 
```javascript
  Client ===> http://localhost:3000/
  Mongo Express ===> http://localhost:8080/
```

