const longest = (list) => {
    let max = list[0]
    let output = [max]
    for (let x = 1; x < list.length; x++) {
        if (list[x].length == max.length) {
            output.push(list[x])
        }
        if (list[x].length > max.length) {
            output.push(list[x])
            delete output[output.findIndex(max)]
            max = list[x]
        }
    }

    for (let x = 0; x < output.length; x++) {
        console.log(output[x])
    }
}

longest(["the","quick","brown", "fox", "ate", "my", "chickens"])