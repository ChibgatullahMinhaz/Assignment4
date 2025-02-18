function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    const charge = money * 1.75 / 100;
    return charge;
}

function validEmail(email) {
    if (typeof email !== "string") {
        return "Invalid";
    }
    if (email.charAt(0) !== "." && email.charAt(0) !== "-" && email.charAt(0) !== "+" && email.charAt(0) !== "@") {
        if (email.includes(".com")  && email.includes("@") && !email.includes(" ") && email.endsWith(".com")) {
            return true;
        }
    }
    return false;
}
