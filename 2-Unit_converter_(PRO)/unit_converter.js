let num = 0
const convertBtn = document.getElementById("convert")
const lengthUnits = document.getElementById("meters-feet")
const volumeUnits = document.getElementById("liters-gallons")
const massUnits = document.getElementById("kilograms-pounds")

const feet = num * 3.281
const meter = num * 0.305
const gallon = num * 0.264
const liter = num * 3.785
const pound = num * 2.204
const kilogram = num * 0.454

convertBtn.addEventListener(onclick, function() {
    lengthUnits.textContent = "meters to feets; feet to meters"
    volumeUnits.textContent = "liters to gallons; gallons to liters"
    massUnits.textContent = "kilograms to pounds; pounds to kilograms"
})