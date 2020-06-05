const frame = (list) => {
    let sortedList = list.concat().sort()

    let width = sortedList[0].length + 4

    console.log('*'.repeat(width))

    list.forEach(element => {
        let difference = width - element.length - 3
        let space = ' '.repeat(difference)
        console.log(`* ${element}${space}*`)
    });

    console.log('*'.repeat(width))
}

frame(["Write", "good", "code", "every", "day"])