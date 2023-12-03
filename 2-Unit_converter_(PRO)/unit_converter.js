let num = 10
const addNumber = document.getElementById("add-number")
const convertBtn = document.getElementById("convert")
const initialValue = document.getElementsByClassName("initial-value")
const feetValue = document.getElementById("feet")
const meterValue = document.getElementById("meters")
const gallonValue = document.getElementById("gallons")
const literValue = document.getElementById("liters")
const poundValue = document.getElementById("pounds")
const kilogramValue = document.getElementById("kilograms")

// const feet = num.valueOf * 3.281
// const meter = num.valueOf * 0.305
// const gallon = num.valueOf * 0.264
// const liter = num.valueOf * 3.785
// const pound = num.valueOf * 2.204
// const kilogram = num.valueOf * 0.454

convertBtn.addEventListener("click", function() {
    // num = addNumber
    initialValue.textContent = num
    feetValue.textContent = num * 3.281
    meterValue.textContent = num * 0.305
    gallonValue.textContent = num * 0.264
    literValue.textContent = num * 3.785
    poundValue.textContent = num * 2.204
    kilogramValue.textContent = num * 0.454
    console.log("Is is working?")
    console.log(initialValue.textContent)
})