var toString = Object.prototype.toString;
// 判断数组的几种方法
function isArray(val) {
    return toString.call(val) === '[object Array]'
}

// 判断undefined
function isUndefined(val){
    return typeof val === 'undefined';
}

// 判断buffer
function isBuffer(val){
    return val !== null
    && !isUndefined(val)
    && val.constructor !== null
    && !isUndefined(val.constructor)
    && typeof val.constructor === "function"
    && val.constructor.isBuffer(val);
}

// 判断FormData类型
function isFormData(val){
    return typeof FormData !== 'undefined' && val instanceof FormData
}

// 判断空对象
function isObject(val){
    return val !== null && Object.prototype.toString.call(val) === '[object, Object]'
}

function isPlainObject(val){
    if(Object.prototype.toString.call(val) !== '[object, Object]'){
        return false;
    }
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype
}
// 判断Date
function isDate(val){
    return Object.prototype.toString.call(val) === '[object, Date]'
}

// 判断文件
function isFile(val){
    return Object.prototype.toString.call(val) === '[object, File]'
}

// trim 去除首尾空格
function trim(str){
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '')
}

// 用一个函数来迭代数组或对象
function forEach(obj, fn){
    if(obj === null || typeof obj === 'undefined'){
        return
    }
    if(typeof obj !== 'Object'){
        obj = [obj]
    }
    if(isArray(obj)){
        for(var i=0; i<obj.length; i++){
            fn.call(null, obj[i], i, obj)
        }
    }else{
        for(var key in obj){
            if(Object.prototype.hasOwnProperty.call(obj, key)){
                fn.call(null, obj[key], key, obj)
            }
        }
    }
}

// 判断数字
function isNumber(val){
    return typeof val === 'number'
}
// 判断对象
function isObject(val){
    return Object.prototype.toString.call(val) === '[object, Object]'
}

// 判断空对象
function isEmptyObject(val){
    return val && Object.keys(val).length ? true : false
}

// 判断数组
// 1、isArray
// 2、原型判断
function isArray(val){
    return Object.prototype.toString().call(val) === '[object, Array]'
}

// 判断日期
function isDate(val){
    return Object.prototype.toString().call(val) === '[object, Date]'
}
// 判断文件类型
function isFile(val){
    return Object.prototype.toString().call(val) === '[object, File]'
}
// 判断函数
function isFunction(){
    return Object.prototype.toString().call(val) === '[object, Function]'
}
// 去除首尾空格
function trim(val){
    return val.trim ? val.trim() : val.replace(/^\s+|\s+$/g, '')
}
// 判断undefined
function isUndefined(val){
    return typeof val === 'undefined'
}
// 判断formData
function isFormData(val){
    return typeof val !== null && val instanceof FormData
}
// 传入一个函数迭代对象
function forEach(obj, fn){
    if(obj === null || typeof obj === 'undefined'){
        return
    }
    if(typeof obj !== 'Object'){
        obj = [obj]
    }
    if(isArray(obj)){
        for(var i=0, length = obj.length; i<length; i++){
            fn.call(null, obj[i], i, obj)
        }
    }else{
        for(var key in obj){
            fn.call(null, obj[key], key, obj)
        }
    }
}