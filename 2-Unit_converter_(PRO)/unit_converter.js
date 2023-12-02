let num = 0
const convertBtn = document.getElementById("convert")
const lengthUnits = document.getElementById("meters-feet")
const volumeUnits = document.getElementById("liters-gallons")
const massUnits = document.getElementById("kilograms-pounds")

const feet = num.valueOf * 3.281
const meter = num.valueOf * 0.305
const gallon = num.valueOf * 0.264
const liter = num.valueOf * 3.785
const pound = num.valueOf * 2.204
const kilogram = num.valueOf * 0.454

convertBtn.addEventListener("click", function() {
    num = document.getElementById("add-number")
    lengthUnits.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meter} meters.`
    volumeUnits.textContent = "liters to gallons; gallons to liters"
    massUnits.textContent = "kilograms to pounds; pounds to kilograms"
})