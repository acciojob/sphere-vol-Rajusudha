// script.js

function volume_sphere() {
    // Retrieve the radius value entered by the user
    const radiusInput = document.getElementById('radius').value;

    // Convert the radius input to a number
    const radius = parseFloat(radiusInput);

    // Validate the input: ensure the radius is a non-negative number
    if (isNaN(radius) || radius < 0) {
        // If input is not a number or is negative, display 'NaN'
        document.getElementById('volume').innerText = 'NaN';
        return;
    }

    // Calculate the volume of the sphere using the formula: V = (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Round the volume to four decimal places
    const roundedVolume = volume.toFixed(4);

    // Display the calculated volume in the designated output field
    document.getElementById('volume').innerText = roundedVolume;
}
