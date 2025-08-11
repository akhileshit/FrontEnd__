const fs = require("fs")

function getInput() {
    const rawInput = fs.readFileSync('file.txt', 'utf-8').trim().split("\n")    // w/o specifying the encoding type, it is not working..
    const n = parseInt(rawInput[0])
    const users = rawInput.slice(1, n+1).map(line => {  // process each element of array (a line)
        const [email, tags] = line.trim().split(" ");  // may be this is more like a tuple in python    [email, tags]        here array itself is acting as that
        const tagList = tags.split(",")
        return {email, tagList}           // return an object with keys 'email' & 'tagList'!!!
    })
    return {users}             // return an object with a key 'users'           so it becomes {users: users} !!!!         want proof? print and see
}

function normalizeAndGroup(users) {
    const domainMap = new Map()

    for (const {email, tagList} of users) {
        const [_, domain] = email.split("@")

        const normalizedTags = [...new Set(tagList.map(tag => tag.toLowerCase()))].sort()
        if (!domainMap.get(domain)) domainMap.set(domain, []);
        domainMap.get(domain).push({email, normalizedTags})
    }

    const sortedDomains = Array.from(domainMap.keys()).sort()
    for (const domain of sortedDomains) {
        console.log(domain);
        const users = domainMap.get(domain)
        for (const {email, normalizedTags} of users) {
            // normTags = normalizedTags.join(",")               // join the array elements with "," (NO NEED acutally since we have `${}` !!!)        `${}` is not just a formatting syntax what u thought earlier...!
            console.log(`${email} : ${normalizedTags}`)
        }
    }
}

const {users} = getInput()
normalizeAndGroup(users)


//.......................................................
// Want to make any object as Array?       use [... ]  (or)   Array.form()