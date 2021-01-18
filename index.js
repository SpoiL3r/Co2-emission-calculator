const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const data = require('./lib/data')
const co2Calculator = require('./lib/co2EmissionCalculator')

const argv = yargs(hideBin(process.argv)).argv

const defaultUnitOfDistance = data.unitOfDistance.KM
const co2Emission = data.co2Emission
const distance = argv.distance
const vehicleEmission = co2Emission.vehicles[argv.transportationMethod]
const unitOfDistance = (argv.unitOfDistance && argv.unitOfDistance.toLowerCase()) || defaultUnitOfDistance
const userOutput = (argv.output && argv.output.toLowerCase())



console.log(`your trip caused ${co2Calculator.totalEmissionGenerated(unitOfDistance, distance, vehicleEmission, userOutput)} of CO2-equivalent`)


