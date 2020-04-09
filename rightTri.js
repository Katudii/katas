function rightTriangle(length) {
    // length has the number of lines the triangle should have
    var line = "";
    for (var i = 1; i <= length; i++) {

      for(var j=1; j<=i; j++){ 
        
        line += "*";
      }
      line+="\n";
  
    }
    // Print an additional newline "\n" if desired.
    return line + "\n";
  }
  console.log(rightTriangle(3))