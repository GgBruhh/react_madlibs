function addCommas(number) {
    const formattedNumber = number.toLocaleString("en-US")
    return formattedNumber;
}

console.log(addCommas(12345.678))

module.exports = addCommas;