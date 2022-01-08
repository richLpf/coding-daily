// 手动实现promise
// promise的特点 三个状态 pending resolve reject

class Prom {
    static resolve(value){
        // console.log("value", value)
        if(value && value.then){
            return value;
        }
        return new Prom((resolve) => {
            return resolve(value)
        });
    }
    constructor(fn){
        this.value = undefined;
        this.reason = undefined;
        this.status = "PENGING";

        this.resolveFns = [];
        this.rejectFns = [];

        const resolve = value => {
            console.log("value111", value)
            setTimeout(() => {
                this.status = "RESOLVED";
                this.value = value;
                this.resolveFns.forEach(({ fn, resolve: res, reject: rej}) => {
                    res(fn(value))
                })
            })
        }
        
        const reject = (e) => {
            console.log("e", e)
            setTimeout( () => {
                this.status = "REJECTED";
                this.reason = e;
                this.rejectFns.forEach(({fn, resolve: res, reject: rej}) => {
                    rej(fn(e))
                })
            })
        }
        // console.log("fn", fn(resolve, reject))
        fn(resolve, reject)
    }

    then(fn){
        if(this.status === "RESOLVED"){
            const result = fn(this.value);
            return Prom.resolve(result);
        }
        if(this.status === "PENDING"){
            return new Prom((resolve, reject) => {
                this.resolveFns.push({ fn, resolve, reject});
            })
        }
    }

    catch(fn){
        if(this.status === "REJECTED"){
            const result = fn(this.value);
            return Prom.resolve(result);
        }
        if(this.status === "PENDING"){
            return new Prom((resolve, reject) => {
                this.rejectFns.push({ fn, resolve, reject });
            })
        }
    }
}

// console.log("then", Prom.resolve(0), Prom.resolve(10).then(o => console.log("res", o)))

console.log("prom", Prom.resolve(10))

//.then(o => o * 10).then(o => o + 10).then(res => console.log("o", o))

// return new Prom((resolve, reject) => reject("Error")).catch(e => {
    // console.log('%c [ e ]-71', 'font-size:13px; background:pink; color:#bf2c9f;', e)
// })