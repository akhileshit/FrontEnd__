const fs = require("fs");


//  THEY DID MORE SHORTER CODE THAN ME ACTUALLY...............

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
  const departmentMap = new Map();

  const normalize = (str) =>
    str
      .trim()
      .split(/\s+/)
      .map(word => word[0]?.toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

  for (const { department, badgeID, message } of logs) {
    const dept = department[0].toUpperCase() + department.slice(1).toLowerCase();
    const cleanedMessage = normalize(message);

    if (!departmentMap.has(dept)) {
      departmentMap.set(dept, []);
    }

    departmentMap.get(dept).push({ badgeID, cleanedMessage });
  }

  const sortedDepartments = Array.from(departmentMap.keys()).sort();

  for (const dept of sortedDepartments) {
    console.log(dept);
    const sortedLogs = departmentMap
      .get(dept)
      .sort((a, b) => a.badgeID - b.badgeID);         // Actually them also used same weird sorting which i used accidentally... (they "next-level!!" sorted the object only.. based on 1st key.  i based on 1st ele of array)
    for (const entry of sortedLogs) {
      console.log(`${entry.badgeID}: ${entry.cleanedMessage}`);
    }
  }
}

const { logs } = getInput();
organizeLogs(logs);