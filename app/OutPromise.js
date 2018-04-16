'use strict';

let promise = new WeakMap()
let resolves = new WeakMap()
let rejects = new WeakMap()

module.exports = class {

  constructor(){
    let resolve
    let reject
    
    promise.set(this,new Promise((res,rej)=>{
      resolve = res
      reject = rej
    }))
    
    resolves.set(this,resolve)
    rejects.set(this,reject)
  }

  resolve(arg){ 
    resolves.get(this)(arg)
    return this
  }

  reject(e){ 
    rejects.get(this)(e) 
    return this
  }

  then(onFulfilled, onRejected){ return promise.get(this).then(onFulfilled, onRejected) }

  catch(onRejected){ return promise.get(this).catch(onRejected) }

  finally(onFinally){ return promise.get(this).finally(onFinally) }

}