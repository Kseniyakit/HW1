const array = [2, 78, 56, 45];

function getMaxValue(arr){
    let max = arr[0]; 
    for (let i = 0; i < arr.length; i++) { 
        if (max < arr[i]) max = arr[i]; 
    }
    return arr.indexOf(max);
}

getMaxValue(array);