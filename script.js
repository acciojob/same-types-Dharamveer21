function isSameType(value1, value2) {
  let argument1Type = typeof (argument1);
    let argument2Type = typeof (argument2);

    if (argument1Type === argument2Type) {
        return true;
    }

    return false;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
