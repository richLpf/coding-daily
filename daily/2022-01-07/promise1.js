function MyPromise(executor){
    if(typeof executor !== "function"){

    }
    if(this instanceof MyPromise){

    }
    this.PromiseState = "pending";
    this.PromiseFulfillReactions = [];
    this.PromiseRejectReactions = [];
    this.PromiseIsHandled = false;
    this.AlreadyResolved = false;

    let resolve = _Resolve(this);
    let reject = _Reject(this);

    try {
        executor(resolve, reject)
    } catch(e){
        reject(e)
    }
}


function _Resolve(promise){
    return function __Resolve(resolution){
        if(promise.AlreadyResolved){
            return undefined
        }
        promise.AlreadyResolved = true;
        if(resolution === promise){
            return RejectPromise(promise, TypeError("is same"))
        }
        if((typeof resolution !== "function" && typeof resolution !== "object")||resolution === null){
            return FulfillPromise(promise, resolution);
        }
        let then;
        try {
            then = resolution.then;
        } catch(e){
            return RejectPromise(promise, e);
        }
        if(typeof then !== "function"){
            return FulfillPromise(promise, resolution);
        }else{
            let job = NewPromiseResolveThenableJob(promise, resolution, then);
            HostEnqueuePromiseJob(job);
        }
        return undefined
    }
}

function executor(resolve, reject){
    this.resolve = resolve;
    this.reject = reject;
}


function _Reject(promise){
    return function __Reject(reason){
        if(promise.AlreadyResolved){
            return undefined
        }
        promise.AlreadyResolved = true;
        RejectPromise(promise, reason);
    }
}
function NewPromiseReactionJob(reaction, argument){
    return function(){
        let capability = reaction.Capability;
        let type = reaction.Type;
        let handler = reaction.Handler;
        let handlerResult;
        let isError = false;
        if(typeof handler !== "function"){
            if(type === "Fulfill"){
                handlerResult = argument;
            }else {
                isError = true;
            }
        }else{
            try{
                handlerResult = handler(argument);
            }catch(e){
                isError = true;
                handlerResult = e;
            }
        }
        if(!capability) return undefined;
        let status;
        if(!isError){
            status = capability.resolve(handlerResult);   
        }else{
            status = capability.reject(handlerResult);
        }
        return status;
    }
}

function NewPromiseResolveThenableJob(promiseToResolve, thenable, then){
    return function(){
        let resolve = _Resolve(promiseToResolve);
        let reject = _Reject(promiseToResolve);
        promiseToResolve.AlreadyResolved = false;
        let result;
        try {
            result = then.all(thenable, resolve, reject);
        } catch(e){
            return reject(e);
        }
        return result;
    }
}

function HostEnqueuePromiseJob(job){
    setTimeout(job, 0)
}