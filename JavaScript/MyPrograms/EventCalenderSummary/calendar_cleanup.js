const fs = require("fs");

// Step 1: Read and parse input
function getInput() {
  const input = fs.readFileSync('file.txt', "utf-8").trim().split('\n');
  const n = parseInt(input[0]);
  const events = input.slice(1, n + 1).map(line => {
    const [date, time, ...titleParts] = line.trim().split(" ");
    const eventTitle = titleParts.join(" ");
    return { date, time, eventTitle };
  });
  return { events };
}

// Step 2: Clean, validate and group events
function buildCalendar({events}) {
    //Validate date (them)
  const formatDate = (dateStr) => {
    let parts = [];
    
    if (dateStr.match(/^\d{2}-\d{2}-\d{4}$/)) {
        parts = dateStr.split("-");
        const [part1, part2, year] = parts.map(Number);

        if (part1 > 12 && part2 <= 12) {
        // Clearly DD-MM-YYYY
        return `${year.toString().padStart(4, "0")}-${part2
            .toString()
            .padStart(2, "0")}-${part1.toString().padStart(2, "0")}`;
        } else if (part2 > 12 && part1 <= 12) {
        // Clearly MM-DD-YYYY
        return `${year.toString().padStart(4, "0")}-${part1
            .toString()
            .padStart(2, "0")}-${part2.toString().padStart(2, "0")}`;
        } else {
        // Ambiguous — fallback to DD-MM-YYYY
        return `${year.toString().padStart(4, "0")}-${part2
            .toString()
            .padStart(2, "0")}-${part1.toString().padStart(2, "0")}`;
        }
    } else if (dateStr.match(/^\d{4}\/\d{2}\/\d{2}$/)) {
        parts = dateStr.split("/");
        return `${parts[0]}-${parts[1]}-${parts[2]}`;
    } else if (dateStr.match(/^\d{4}-\d{2}-\d{2}$/)) {
        return dateStr;
    }

    return null;
  };

  //Validate time
  const isTimeValid = (timeStr) => {
    const [hh, mm] = timeStr.split(":").map(t => parseInt(t))
    if (hh < 0 || hh > 23 || mm < 0 || mm > 59) {
        return false
    }
    return true
  }
  
  // Your logic here
  const normalizedEvents = new Map()
  for (const {date, time, eventTitle} of events) {
    const formattedDate = formatDate(date);
    const validTime = isTimeValid(time)

    if (validTime && formattedDate !== null) {
        const normalizedEventTitle = eventTitle.trim().toLowerCase().replace(eventTitle[0].toLowerCase(), eventTitle[0].toUpperCase());
        const timeString = time.split(":").join("");
        
        if (!normalizedEvents.has(formattedDate)) normalizedEvents.set(formattedDate, []);
        normalizedEvents.get(formattedDate).push({timeString, normalizedEventTitle});
    }
  }
  const sortedDates = [...normalizedEvents.keys()].sort();
  for (const date of sortedDates) {
    console.log(date)
    
    const timesMap = new Map()
    for (const {timeString, normalizedEventTitle} of normalizedEvents.get(date)) {
        timesMap.set(timeString, normalizedEventTitle)
    }
    const sortedTimes = [...timesMap.keys()].sort();
    
    for (const time of sortedTimes) {
        console.log(timesMap.get(time));
    }
  }


}

buildCalendar(getInput())