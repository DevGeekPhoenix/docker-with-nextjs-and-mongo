# Docker Sample with Next.js and MongoDB

This is a sample project showcasing a fullstack application built with Next.js, utilizing MongoDB as the NoSQL database and Docker for seamless deployment and runtime environment management.

## Features

> 1. Fullstack development with Next.js.
 
> 2. Integration of MongoDB as the NoSQL database.

> 3. Utilization of Mongo Express for MongoDB database management.

> 4. Persistence of database records using Docker volumes.

> 5. Simplified image building and container execution with Docker.

> 6. Running services in a Docker network using Docker Compose.

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

