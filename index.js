// Code your solution in this file!
function distanceFromHqInBlocks(dist) {
    return Math.abs(42 - dist)
}

function distanceFromHqInFeet(dist) {
    return distanceFromHqInBlocks(dist) * 264
}

const distanceTravelledInFeet = (start, dest) => {
    let distInBlocks = distanceFromHqInBlocks(Math.abs(start - dest))
    let distInFeet = distanceFromHqInFeet(distInBlocks)
    return distInFeet
}

const calculatesFarePrice = (start, dest) => {
    let distInFeet = distanceTravelledInFeet(start, dest)
    if (distInFeet <= 400) {
        return 0
    } else if (distInFeet > 400 && distInFeet <= 2000) {
        return (distInFeet - 400) * 0.02
    } else if (distInFeet > 2000 && distInFeet <= 2500) {
        return 25
    } else if (distInFeet > 2500) {
        return 'cannot travel that far'
    }
}