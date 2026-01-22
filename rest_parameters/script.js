const nums1 = [1,2,3,4]

function add() {
    let sum = 0
    for(let i = 0; i< arguments.length(); i++) {
        sum += arguments[i];
    }
    return sum;
}