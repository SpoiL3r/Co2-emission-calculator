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

# Default Values
*Transportation methods in CO2e per passenger per km:

Small cars:

1. small-diesel-car : 142g
2. small-petrol-car : 154g
3. small-plugin-hybrid-car : 73g
4. small-electric-car : 50g

Medium cars:

5. medium-diesel-car : 171g
6. medium-petrol-car : 192g
7. medium-plugin-hybrid-car : 110g
8. medium-electric-car : 58g

Large cars:

9. large-diesel-car : 209g
10. large-petrol-car : 282g
11. large-plugin-hybrid-car : 126g
12. large-electric-car : 73g

13. bus : 27g

14. train : 6g
