let num = 0
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
    num = addNumber
    // initialValue.value = num
    // feetValue.value = num.value * 3.281
    // meterValue.value = num.value * 0.305
    // gallonValue.value = num.value * 0.264
    // literValue.value = num.value * 3.785
    // poundValue.value = num.value * 2.204
    // kilogramValue.value = num.value * 0.454
    console.log("Is is working?")
    console.log(num)
})