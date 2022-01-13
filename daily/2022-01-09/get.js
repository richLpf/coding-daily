function get(object, path, defaultValue){
    const result = object === null ? undefined : baseGet(object, path)
    return result === undefined ? defaultValue : result
}

function baseGet(object, path){
    path = castPath(path, object);
    return object[path]
}

function castPath(value, object){
    if(Array.isArray(value)){
        return value
    }
    return stringToPath(value)
}

function stringToPath(value){
   console.log("test", value) 
}