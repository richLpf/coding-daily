const object = { a: [{ b: { c: 3 } }] };

function get(object, params, rest){
    if(rest !== undefined) return rest
    let temp = params.split(".")
    console.log("111111", temp)
    let value = object;
    for(let i = 0; i<temp.length; i++){
        console.log("temp", value, temp[i])
        value = value[temp[i]]
    }
    console.log("result", value)
    return value
}

//=> 3
get(object, "a[0].b.c");

//=> 3
// get(object, 'a[0]["b"]["c"]');

//=> 10086
let result = get(object, "a[100].b.c", 10086);
// console.log("result", result)

