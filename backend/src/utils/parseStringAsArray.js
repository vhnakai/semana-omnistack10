module.exports = function parseStringAsArray(arrayAsString){
    let r = String(arrayAsString)
    
    return r.split(', ').map(tech => tech.trim()).map(tech => tech.toUpperCase())
}