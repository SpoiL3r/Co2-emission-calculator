# Co2 Emission Calulator

A command-line tool to calculate the Co2 equivalent emitted by a transportation method when travelled certain distance.
Follow below intructions for installing dependencies, running unit-tests and executing the tool.

## Installing dependencies
Execute below command to install dependencies in the folder where `package.json` file is present.

```
npm install
```

## Executing Unit-Tests
Execute below command to execute the unit-tests in the folder where `package.json`. Below command creates the folder `unit-tests-reports` which includes the test report and coverage report.

```
npm run test
```

## Executing the CLI tool
Use below command to execute the CLI tool to find out the Co2 equivalent.

```
node index.js --distance 1800.5 --transportation-method large-petrol-car
```
