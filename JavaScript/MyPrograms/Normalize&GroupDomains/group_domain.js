const fs = require("fs");

function getInput() {
  const input = fs.readFileSync('file.txt', "utf-8").trim().split("\n");
  const n = parseInt(input[0]);
  const users = input.slice(1, n + 1).map(line => {
      const [email, tagsRaw] = line.split(" ");
      const tags = tagsRaw.split(",").map(tag => tag.trim());
      return { email, tags };   //maybe this is like a tuple in python. idk.... No maybe this is like representing a variables which are not just a variables but are objects/Arrays in itself!...
    });
    fs.close
    return  {users} ;     //maybe this is like a tuple in python.     No maybe this is like representing a variable which is not just a variable but an object/array in itself!...
}

function normalizeAndGroup(users) {
  // Your implementation
  const domainMap = new Map()

  for (const {email, tags} of users) {
    const [_, domain] = email.split("@")

    const normalizedTags = [...new Set(tags.map(tag => tag.toLowerCase()))].sort()
    // const normalizedTags = Array.from(new Set(tags.map(tag => tag.toLowerCase()))).sort()  // This also works. idk both are same 

    if (!domainMap.has(domain)) domainMap.set(domain, []);
    domainMap.get(domain).push({email, tags: normalizedTags})
  }
  
  const sortedDomains = Array.from(domainMap.keys()).sort();
  // const sortedDomains = [...domainMap.keys()].sort();

  console.log(sortedDomains)
  for (const domain of sortedDomains) {
    console.log(domain);
    const domainUsers = domainMap.get(domain);
    for (const {email, tags} of domainUsers) {
      console.log(`${email} : ${tags}`)
    }
  }
}

const {users} = getInput()
normalizeAndGroup(users)
