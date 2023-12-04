let num = 0
const addNumberEl = document.getElementById("add-number")
const convertBtn = document.getElementById("convert")
let initialVal = document.getElementsByClassName("initial-value").textContent
let feetVal = document.getElementById("feet").textContent
let meterVal = document.getElementById("meters").textContent
let gallonVal = document.getElementById("gallons").textContent
let literVal = document.getElementById("liters").textContent
let poundVal = document.getElementById("pounds").textContent
let kilogramVal = document.getElementById("kilograms").textContent

// const feet = num.valueOf * 3.281
// const meter = num.valueOf * 0.305
// const gallon = num.valueOf * 0.264
// const liter = num.valueOf * 3.785
// const pound = num.valueOf * 2.204
// const kilogram = num.valueOf * 0.454

convertBtn.addEventListener("click", function() {
    num = addNumberEl.value
    initialVal = num
    feetVal = num * 3.281
    meterVal = num * 0.305
    gallonVal = num * 0.264
    literVal = num * 3.785
    poundVal = num * 2.204
    kilogramVal = num * 0.454
    console.log("Is is working?")
    console.log(num)
})