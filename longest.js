const longest = (list) => {
    let longest = list[0]
    let output = [longest]
    for (let x = 1; x < list.length; x++) {

        if (list[x].length >= longest.length) {
            output.push(list[x])
            if (list[x].length != longest.length) {
                delete output[output.indexOf(longest)]
            }
            longest = list[x]
        }
    }

    for (let x = 0; x < output.length; x++) {
        if (output[x] != undefined) {
            console.log(output[x])
        }
    }
}

longest(["the", "quick", "bro", "fox", "ate", "my", "chickenss", "highestih"])