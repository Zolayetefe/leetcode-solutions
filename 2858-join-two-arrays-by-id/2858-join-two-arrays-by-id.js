/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const combinedArray = [...arr1,...arr2]
    const merged = {}
  combinedArray.forEach((obj)=>{
    if(!merged[obj.id]){
        merged[obj.id]= {...obj}
    }else{
            merged[obj.id] ={...merged[obj.id],...obj}
    }
  })
    const joinedArray = Object.values(merged)
    return joinedArray
};