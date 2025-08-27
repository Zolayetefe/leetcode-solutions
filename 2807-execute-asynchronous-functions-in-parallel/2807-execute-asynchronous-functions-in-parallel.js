/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    const length = functions.length
    const arr = new Array()
    let resolveCounter=0
    return new Promise((resolve,reject)=>{
          for (let i=0; i<length;i++){
            functions[i]()
            .then(result=>{
                 arr[i]=result
                 resolveCounter++
            if(resolveCounter=== length){
                resolve(arr)
            }
            }).
            catch(err=> reject(err))
        };
    })
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */