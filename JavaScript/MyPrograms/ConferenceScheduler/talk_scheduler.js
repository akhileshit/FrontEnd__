const fs = require("fs");

// Function to read and parse input
function getInput() {
  const input = fs.readFileSync('file.txt', "utf-8").trim().split("\n");
  const n = parseInt(input[0]);
  const entries = input.slice(1, n + 1).map((line, idx) => {
    const parts = line.trim().split(/\s+/);
    const track = parts[0];
    const start = parts[1];
    const end = parts[2];
    const title = parts.slice(3).join(" ");
    return { track, start, end, title, idx };
  });
  return { entries };
}

// Helpers
function isValidTime(t) {
  if (!/^\d{2}:\d{2}$/.test(t)) return false;
  const [hh, mm] = t.split(":").map(Number);
  return hh >= 0 && hh <= 23 && mm >= 0 && mm <= 59;
}
function toMinutes(t) {
  const [hh, mm] = t.split(":").map(Number);
  return hh * 60 + mm;
}
function titleCase(s) {
  return s
    .trim()
    .split(/\s+/)
    .map(w => (w[0] ? w[0].toUpperCase() + w.slice(1).toLowerCase() : ""))
    .join(" ");
}

// Implement this function
function buildSchedule(rawEntries) {
  // Your logic here
  const trackMap = new Map()

  for (const {track, start, end, title} of entries) {
    const validDiff = toMinutes(end) - toMinutes(start) > 0
    if (isValidTime(start) && isValidTime(end) && validDiff) {
        const normalizedTrack = titleCase(track)
        const normalizedTitle = titleCase(title.trim())
        
        if (!trackMap.has(normalizedTrack)) trackMap.set(normalizedTrack, []);
        trackMap.get(normalizedTrack).push({start, end, normalizedTitle})
    }
  }

  for (const track of trackMap) {
    const earlyEnd = -1
    for (const info of trackMap.get(track)) {
        const start = toMinutes(start)
        const end = toMinutes(end)

        if (earlyEnd === -1) earlyEnd = end;
        if (earlyEnd > end) earlyEnd = end;

        
    }
  }

  const sortedTracks = [...trackMap.keys()].sort();
  for (const track of sortedTracks) {
    
  }


}

const {entries} = getInput()
buildSchedule(entries)
