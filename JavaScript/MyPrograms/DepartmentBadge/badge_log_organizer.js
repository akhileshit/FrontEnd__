const fs = require("fs");

// Step 1: Read and parse input
function getInput() {
  const input = fs.readFileSync("file.txt", "utf-8").trim().split("\n");
  const n = parseInt(input[0]);
  const logs = input.slice(1, n + 1).map(line => {
    const [department, badgeStr, ...messageParts] = line.trim().split(" ");
    const badgeID = parseInt(badgeStr);
    const message = messageParts.join(" ");
    return { department, badgeID, message };
  });
  return { logs };
}

// Step 2: Implement the log organizer
function organizeLogs(logs) {
    // Implement grouping, cleaning, and sorting logic here
    const depGroup = new Map()
    for (const loger of logs) {
        const [department, badgeId, message] = [loger.department, loger.badgeID, loger.message]

        const normalizedMessage = [...message.trim().split(/\s+/).map(word => {               // Regular expression syntax in JavaScript!!
            const lowered = word.toLowerCase()
            const replaced = lowered.replace(lowered.charAt(0), lowered.charAt(0).toUpperCase())
            return replaced
        })].join(" ")
        // const normalizedMessage = [...message.trim().split(/\s+/).map(word => word.toLowerCase().replace(word.charAt(0).toLowerCase(), word.charAt(0).toUpperCase()))].join(" ")         
        
        const normalizedDepartment = department.toLowerCase().replace(department.charAt(0).toLowerCase(), department.charAt(0).toUpperCase())

        if (!depGroup.has(normalizedDepartment)) depGroup.set(normalizedDepartment, []);
        depGroup.get(normalizedDepartment).push({badgeId, normalizedMessage})
    }

    const sortedDep = Array.from(depGroup.keys()).sort();
    for (const dep of sortedDep) {
        console.log(dep);

        const badges = new Map()
        for (const {badgeId, normalizedMessage} of depGroup.get(dep)) {
            badges.set(badgeId, normalizedMessage)
        }
        const sortedBadges = [...badges].sort();
        for (const [id, msg] of sortedBadges) {
            console.log(`${id}: ${msg}`)
        }
    }
}
const {logs} = getInput()
organizeLogs(logs)