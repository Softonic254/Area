function square() {
    let side = prompt("Enter the length of one side");


    if (side != "") {
        if (isNaN(side)) {
            alert("The value of side should be a number.")
        } else {
            var area = Math.pow(side, 2);
            alert("Area of the square is " + area + " square units.");
        }
    } else {
        alert("No value entered.")
    }

}


function rectangle() {
    let length = prompt("Enter the value of length");
    let width = prompt("Enter the value of width");

    if (length != "" && width != "") {
        if (isNaN(length) && isNaN(width)) {
            alert("Values should be numbers");
        } else {
            let area = length * width;
            alert("Area of the rectangle is " + area + " square units.");
        }
    } else {
        alert("Provide both values.")
    }
}

function circle() {
    let radius = prompt("Enter the value of radius");

    if (radius != "") {
        if (isNaN(radius)) {
            alert("The value of radius should be a number.")
        } else {
            var area = Math.PI * Math.pow(radius, 2);
            area = Math.round(area);
            alert("Area of the circle is " + area + " square units.");
        }
    } else {
        alert("No value entered.")
    }

}

function rhombus() {
    let length = prompt("Enter the value of length");
    let height = prompt("Enter the value of height");

    if (length != "" && height != "") {
        if (isNaN(length) && isNaN(height)) {
            alert("Values should be numbers");
        } else {
            let area = length * height;
            alert("Area of the rhombus is " + area + " square units.");
        }
    } else {
        alert("Provide both values.")
    }
}

function triangle() {
    let base = prompt("Enter the value of base");
    let height = prompt("Enter the value of height");

    if (base != "" && height != "") {
        if (isNaN(base) && isNaN(height)) {
            alert("Values should be numbers");
        } else {
            let area = 0.5 * (base * height);
            alert("Area of the triangle is " + area + " square units.");
        }
    } else {
        alert("Provide both values.")
    }
}

function cylinder() {
    let radius = prompt("Enter the value of radius");
    let height = prompt("Enter the value of height");

    if (radius != "" && height != "") {
        if (isNaN(radius) && isNaN(height)) {
            alert("Values should be numbers");
        } else {
            let area = (Math.PI * Math.pow(radius, 2)) + (2 * (Math.PI * radius * height));
            area = Math.round(area);
            alert("Area of the cylinder is " + area + " square units.");
        }
    } else {
        alert("Provide both values.")
    }
}