let {hash,compare, genSalt} = require("bcrypt")


module.exports.generateHash = async function generateHash(word) {
    let salt = await genSalt(10)    
    return await hash(word,salt)
}

module.exports.compaireHash = async function compaireHash(word, hash) {
    return await compare(word,hash)
}