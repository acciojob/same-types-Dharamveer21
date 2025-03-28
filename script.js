function isSameType(value1, value2) {

    if (Number.isNaN(value1) || Number.isNaN(value2)) {
        let isBothNan = (Number.isNaN(value1) && Number.isNaN(value2));
        return (isBothNan);
    }

    let argument1Type = typeof (value1);
    let argument2Type = typeof (value2);

    return (argument1Type === argument2Type);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
