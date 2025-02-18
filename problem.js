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
        if (email.includes(".com") && email.includes("@") && !email.includes(" ") && email.endsWith(".com")) {
            return true;
        }
    }
    return false;
}


function electionResult(votes) {
    if (!Array.isArray(votes)) {
        return "Invalid";
    }
    if (votes.length == 0) {
        return "Draw";
    }
    let mangoParty = 0;
    let bananaParty = 0;
    for (const party of votes) {
        if (party === "mango" || party === "Mango") {
            mangoParty++;
        } else if(party === "banana" || party === "Banana") {
            bananaParty++;
        }
    }
    if (mangoParty > bananaParty) {
        return "Mango";
    } else if (bananaParty > mangoParty) {
        return "Banana";
    }else if (mangoParty == bananaParty) {
        return "Draw";
    }
    else {
        return "Draw";
    }
}

