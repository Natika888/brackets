module.exports = function check(str, bracketsConfig) {
    // if (indexOf('|')!== -1 || indexOf('7')!== -1 || indexOf('8')!== -1 ) {
        
    // }



    let stack = []
    let brackets = bracketsConfig.flat().join('');
  
    for(let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
}
