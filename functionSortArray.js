function mySort(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0; //если a == b
}
var arr = [10, 2, 5, 1,1000,25,1.345];
arr.sort(mySort);
console.log(arr);