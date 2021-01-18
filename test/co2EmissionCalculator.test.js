const co2Calculator = require('./../lib/co2EmissionCalculator')
const data = require('./../lib/data')

describe('Co2 calculator', () => {
    test('should return gram co2 emission unit for meter distance unit', () => {
        //given
        let inputDistanceUnitOfDistance = data.unitOfDistance.M;

        //when
        const unitOfEmission = co2Calculator.determineCO2EmissionUnit(inputDistanceUnitOfDistance);

        //then
        expect(unitOfEmission).toBe(data.unitOfCO2Emission.G);
    });

    test('should return default kilogram co2 emission unit for Kilometer distance unit', () => {
        //given
        let inputDistanceUnitOfDistance = data.unitOfDistance.KM;

        //when
        const unitOfEmission = co2Calculator.determineCO2EmissionUnit(inputDistanceUnitOfDistance);

        //then
        expect(unitOfEmission).toBe(data.unitOfCO2Emission.KG);
    });

    test('should return correct co2 emission for 14500 m of train travel', () => {
        //given
        let inputDistanceUnitOfDistance = data.unitOfDistance.M;
        let distance = 14500;
        let vehicleEmissionPerKm = data.co2Emission.vehicles["train"];

        //when
        const co2Emission = co2Calculator.co2EmissionCalculator(inputDistanceUnitOfDistance, distance, vehicleEmissionPerKm);

        //then
        expect(co2Emission).toBe(0.087);
    });
    
});