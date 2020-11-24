const print = process.stdout

const printIsosceles = size => {
    let step = 1

    for (let a = 1; a <= size; a++) {
        for (let b = size - 1; b >= a; b--) {
            print.write(" ")
        }
        for (let c = 0; c < step; c++) {
            print.write("*")
        }
        print.write("\n")
        step = step + 2
    }
}