let baseVal = 0
let addNumberEl = document.getElementById("add-number")
const convertBtn = document.getElementById("convert")
const resetBtn = document.getElementById("reset")
// const toggleBtn = document.getElementById("toggle")
// Watch these videos on how to create a light mode / dark mode toggle:
    // Dark & Light Mode Toggle | HTML, CSS & Javascript (https://www.youtube.com/watch?v=vQTZl_5H90k)

convertBtn.addEventListener("click", function() {
    baseVal = addNumberEl.value
    lengthConversion()
    volumeConversion()
    massConversion()
})

resetBtn.addEventListener("click", function() {
    if (baseVal != 0) {
        baseVal = null
        addNumberEl.value = null
        lengthConversion()
        volumeConversion()
        massConversion()
    }
})
function lengthConversion() {
    metersToFeet()
    feetToMeters()
}

function metersToFeet() {
    const feet = baseVal * 3.281
    const feetEl = document.getElementById("meters-to-feet")
    feetEl.textContent = `${baseVal} meters = ${feet.toFixed(3)} feet`
}

function feetToMeters() {
    const meter = baseVal * 0.305
    const meterEl = document.getElementById("feet-to-meters")
    meterEl.textContent = `${baseVal} feet = ${meter.toFixed(3)} meters`
}

function volumeConversion() {
    litersToGallons()
    gallonsToLiters()
}

function litersToGallons() {
    const gallon = baseVal * 0.264
    const gallonEl = document.getElementById("liters-to-gallons")
    gallonEl.textContent = `${baseVal} liters = ${gallon.toFixed(3)} gallons`
}

function gallonsToLiters() {
    const liter = baseVal * 3.785
    const literEl = document.getElementById("gallons-to-liters")
    literEl.textContent = `${baseVal} gallons = ${liter.toFixed(3)} liters`
}

function massConversion() {
    kilosToPounds()
    poundsToKilos()
}

function kilosToPounds() {
    const pound = baseVal * 2.204
    const poundEl = document.getElementById("kilos-to-pounds")
    poundEl.textContent = `${baseVal} kilograms = ${pound.toFixed(3)} pounds`
}

function poundsToKilos() {
    const kilo = baseVal * 0.454
    const kiloEl = document.getElementById("pounds-to-kilos")
    kiloEl.textContent = `${baseVal} pounds = ${kilo.toFixed(3)} kilograms`
}