//define your array here
var kittens = ["Milo", "Otis", "Garfield"] 


// Add your functions and code here

var destructivelyAppendKitten = name =>{
  
  return kittens.push(name)
}

var destructivelyPrependKitten = name =>{
  
  return kittens.unshift(name)
  
}

var destructivelyRemoveLastKitten = () =>{
  kittens.pop()
  return kittens
  
}

var destructivelyRemoveFirstKitten = () =>{
  kittens.shift()
  return kittens
}

var appendKitten = name =>{
  kittens = [...kittens,name]
  return kittens
}
