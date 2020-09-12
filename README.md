# Template for a new project in Node with Typescript and MongoDB

This template was created for facilitate the creation of a new microservices project with NodeJs. Isn't include web sockets implementation.

## Pre-requisites

- Node v12 or higher.
- Typescript 4 o higher.
- MongoDb 4 o higher.

## Characteristics

- API Rest with Express.
- Environment variables for development and production.
- Connection with MongoDb.
- Unit testing with Jest.

# Installation

Get Node packages and build project.

```sh
npm install
tsc -w
```

### Development environment

It's necessary to get two command line windows opened. One is for build in real time the project (with TypeScript).

```sh
npm run watch
```

The another one is for monitoring the API rest with Nodemon.

```sh
npm run start:dev
```

### Production environment

In this environment only is necessary execute the next script:

```sh
npm run start
```

# Environment variables

All environment variables will be in a file. One for every environment. The path of these files will be in the root folder.

| Environment | Name      |
| ----------- | --------- |
| Development | .env      |
| Production  | .env.prod |

# Variables list

| Name             | Function                             | Type   | process.env      |
| ---------------- | ------------------------------------ | ------ | ---------------- |
| Port             | Port used in the server              | Number | PORT             |
| Mongo Url        | Url to connect with MongoDb          | String | MONGO_URL        |
| Mongo collection | Collection's name in Mongo           | String | MONGO_COLLECTION |
| Mongo user       | User for authentication in Mongo     | String | MONGO_USER       |
| Mongo pass       | Password for authentication in Mongo | String | MONGO_PASS       |

This list will be update as more variables are assigned in the project.

### Assign environment variables

All variables will be assign in [this](https://github.com/Platzi-Master-TM-AnaMartinez/template-server-nodejs-without-sockets/blob/master/src/config/index.ts) config file.

The config file load the `.env` file and create an object called `config`. In this object will be all environment variables for using in the project.

# Unit testing

The project comes with the Jest library, using for unit testing with JavaScript (and Typescript).

### Create a new test

The test file should be create in the [test](https://github.com/Platzi-Master-TM-AnaMartinez/template-server-nodejs-without-sockets/tree/master/tests/) folder. The file name should be get the structure `file.spec.ts`.

### Execute test

There are three different options to execute tests:

- `npm run test`: for all test file in the folder [tests](https://github.com/Platzi-Master-TM-AnaMartinez/template-server-nodejs-without-sockets/tree/master/tests/).
- `npm run test "tests/[folder-name]/"`: Execute all test files into the folder.
- `npm run test "tests/[folder-name]/[file-name.spec.ts]"`: Execute only the test file.

### Coverage

Coverage allows us to obtain a report of the coverage of the tests in our code. This generates a folder in the root called "coverage". The folder contains a `.html` file with the visual information of the report.

Execute:

```sh
npm run test:coverage
```

### Clear cache

Sometimes it is necessary to clear the testing cache in Jest. For this execute:

```sh
npm run test:cache
```

### Licencia

Mit [License](https://github.com/Platzi-Master-TM-AnaMartinez/template-server-nodejs-without-sockets/blob/master/LICENSE)
