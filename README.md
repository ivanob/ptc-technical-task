# ptc-technical-task
This is a coding task challenge. The goal is to develop a microservice to
keep track of the performance of N processes. It accepts 2 REST calls:
- Store task: stores the duration of a task given its ID
- Return average: retrieves the average duration of the task which ID is sent

# How to run the microservice (Docker)

### Mongo
You need a mongo database directory on your host machine. This should be placed in
the following path:
```
/data/db
```
In case you have a different path in your machine, you can edit the docker-compose.yml
file and change that path.

### Docker
To build the image and deploy the container, you need to run the following commands
```
docker-compose build
docker-compose up
```

# How to run the microservice (locally)

To run the application without docker, you need to have mongo installed in your
machine and run the daemon:
```
mongod
```

After that, you can go to the project directory and run the microservice
```
npm install
npm start
```

# How to test it

I am using HTTPie tool to test the service (https://httpie.org/)
An example of use from command line is: Ask for the average performance
of tasks with ID 3
```
http GET localhost:3000/task/3
```
Store the performance of task with ID 4, and duration=20.5 seconds
```
http POST localhost:3000/task id=4 duration=20.5
```
