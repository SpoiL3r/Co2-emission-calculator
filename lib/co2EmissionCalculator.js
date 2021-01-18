const data = require('./data')

const co2EmissionCalculator = (inputUnitOfDistance, distanceTravelled, vehicleEmissionPerKm) => {
    let newDistance = inputUnitOfDistance === data.unitOfDistance.M ? distanceTravelled/1000 :distanceTravelled
    return determineCO2EmissionUnit() === data.unitOfCO2Emission.KG ? (newDistance * vehicleEmissionPerKm)/ 1000 : (newDistance * vehicleEmissionPerKm)
}

const determineCO2EmissionUnit = (inputUnitOfDistance) =>{
    let unitOfCO2Emission = data.unitOfCO2Emission.KG

    if(inputUnitOfDistance == data.unitOfDistance.M){
        unitOfCO2Emission = data.unitOfCO2Emission.G
    }
    return unitOfCO2Emission
}

const totalEmissionGenerated = (inputUnitOfDistance, distanceTravelled, vehicleEmissionPerKm, userOutput) =>{
    let co2EmissionUnit = determineCO2EmissionUnit(inputUnitOfDistance)
    let totalEmission = co2EmissionCalculator(inputUnitOfDistance, distanceTravelled, vehicleEmissionPerKm)

    //unit conversion
    if(userOutput&&(userOutput === data.unitOfCO2Emission.KG && co2EmissionUnit === data.unitOfCO2Emission.G)){
        totalEmission = totalEmission / 1000
        co2EmissionUnit = userOutput
    } else if(userOutput && (userOutput === data.unitOfCO2Emission.G && co2EmissionUnit === data.unitOfCO2Emission.KG)){
        totalEmission = totalEmission * 1000
        co2EmissionUnit = userOutput

    }
    return totalEmission.toFixed(1) + co2EmissionUnit

}

module.exports = {
    totalEmissionGenerated: totalEmissionGenerated,
    determineCO2EmissionUnit: determineCO2EmissionUnit,
    co2EmissionCalculator: co2EmissionCalculator
} 