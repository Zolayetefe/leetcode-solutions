/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
const   chunkArray = new Array()
let i=0 
    while(i<arr.length){
        chunkArray.push(arr.slice(i,i+size))
        i+=size
    }

    return chunkArray
};
