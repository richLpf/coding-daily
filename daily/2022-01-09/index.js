//lodash get
const object = { a: [{ b: { c: 3 } }] };

function get(object, params, rest){
    if(rest !== undefined) return rest
    let temp = params.split(".")
    let value = object;
    for(let i = 0; i<temp.length; i++){
        value = getValue(temp[i], value)
    }
    return value
}

function getValue(params, result){
    if(params.indexOf("[")>-1){
        let objKey = params.split("[")[0]
        const right = params.split("[")[1]
        let arrKey = right.substring(0, right.length-1)
        return result[objKey][arrKey]
    }
    return result[params]
}

//=> 3
console.log("1111", get(object, "a[0].b.c"));

//=> 3
console.log("222", get(object, 'a[0]["b"]["c"]'));

//=> 10086
let result = get(object, "a[100].b.c", 10086);
// console.log("result", result)
