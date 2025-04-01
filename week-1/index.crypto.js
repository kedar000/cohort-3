const crypto = require("crypto");
const input = "kedar";

const hashKey = crypto.createHash("sha256").update(input).digest('hex');
console.log(hashKey)