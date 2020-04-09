const combine = (arr1,arr2) =>{
    let output = []
    for(let x=0;x<arr1.length;x++){
        output.push(arr1[x])
        output.push(arr2[x])
    }

    console.log(output)
}

combine([11,22,33], [1,2,3])