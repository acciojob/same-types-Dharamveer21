function isSameType(value1, value2) {
	{
    let argument1Type = typeof (value1);
    let argument2Type = typeof (value2);

    if (argument1Type === argument2Type) {
        return true;
    }

    return false;
}

let result = isSameType("4", 3);
console.log(result);
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
