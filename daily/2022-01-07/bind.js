Function.prototype.fakeBind = function(obj, ...args){
    return (...rest) => this.call(obj, ...args, ...rest);
}

function f(b){
    console.log(this.a, b);
}
f.fakeBind({ a: 3})(4);
