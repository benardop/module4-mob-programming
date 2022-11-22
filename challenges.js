function rotateLeft(d, arr) {
    const arr1 = arr.slice(0, d);
    const arr2 = arr.slice(d);
    
    const newArr = arr2.concat(arr1);
    
    return newArr;
}
