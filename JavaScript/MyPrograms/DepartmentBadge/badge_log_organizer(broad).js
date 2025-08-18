const fs = require("fs");

function getInput() {
    const rawInput = fs.readFileSync('file.txt', 'utf-8').trim().split("\n");
    const n = parseInt(rawInput[0].trim())
    const logs = rawInput.slice(1, n+1).map(line => {
        const [department, badgeID, ...messageParts] = line.trim().split(" ");
        const message = messageParts.join(" ");
        const badgeId = parseInt(badgeID)
        return {department, badgeId, message};
    })
    return logs
}

function organizeLogs(logs) {
    const departmentMap = new Map()

    for (const {department, badgeId, message} of logs) {
        const normalizedDepartment = department.toLowerCase().replace(department.charAt(0).toLowerCase(), department.charAt(0).toUpperCase());
        const normalizedMessage = message.trim().split(/\s+/).map(word => word.toLowerCase().replace(word.charAt(0).toLowerCase(), word.charAt(0).toUpperCase())).join(" ");

        if (!departmentMap.has(normalizedDepartment)) departmentMap.set(normalizedDepartment, [])
        departmentMap.get(normalizedDepartment).push({badgeId, normalizedMessage});
    }

    const sortedDep = [...departmentMap.keys()].sort()
    for (const dep of sortedDep) {
        console.log(dep)

        const badges = new Map();
        for (const {badgeId, normalizedMessage} of departmentMap.get(dep)) {
           badges.set(badgeId, normalizedMessage);
        }
        const sortedBadges = [...badges].sort();

        for (const [badgeId, normalizedMessage] of sortedBadges) {
            console.log(`${badgeId}: ${normalizedMessage}`)
        }
    }
}

const logs = getInput()
organizeLogs(logs)




// Alternate sort for badges which i thought earlier, but accidentally ended up with the above weird method!!!

// for (const dep of sortedDep) {
//         console.log(dep)

//         const badges = new Map();
//         for (const {badgeId, normalizedMessage} of departmentMap.get(dep)) {
//            badges.set(badgeId, {badgeId, normalizedMessage});
//         }

//         const badgeArray = []
//         for (const id of badges.keys()) badgeArray.push(id);
//         const sortedBadges = badgeArray.sort()
        
//         for (const id of sortedBadges) {
//             const {badgeId, normalizedMessage} = badges.get(id)
//             console.log(`${badgeId}: ${normalizedMessage}`)
//         }
//     }