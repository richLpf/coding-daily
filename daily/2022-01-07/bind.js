
Function.prototype.fakeBind = function(obj, ...rest){
    let that = this
    return function(...params){
        that.call(obj, ...rest, ...params)
    }
}
function f(b) {
    console.log(this.a, b);
}

f.fakeBind({ a: 3 })(4);

f.fakeBind({ a: 3 }, 10)(11);




// 判断数据类型