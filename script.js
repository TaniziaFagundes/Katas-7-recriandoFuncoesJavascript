const  newForEach = (array, callback)=>{
    for(var i=0;i< array.length;i++){
        callback(array[i],i,array)
    }
}

/*
newForEach([1,2,4,6,5,2], function(value){
    console.log(arr)
})
*/

const  newMap = (array, callback)=>{

    let newArray = []
    for(var i=0;i< array.length;i++){
        newArray[i]= callback(array[i],i,array)
    }

    return newArray
}

/*
newMap([1,2,4,6,5,2], function(value){
    return arr*2
})
*/


const newSome = (array, callback)=>{

    let aux = false
    for(var i=0;i< array.length;i++){
        aux = callback(array[i],i,array)
        if(aux) return true
    }

    return false
}

/*
newSome([46,7,3,87,34,543], function(value){
    return value == 9
})
*/

const newFind = (array, callback)=>{
    let aux = false
    for(var i=0;i<array.length;i++){
        aux = callback(array[i],i,array)
        if(aux) return array[i]
    }
    return undefined
}

/*
console.log(newFind([46,7,3,87,34,543], function(value){
    return value < 5
}))
*/


const newFindIndex =(array, callback)=>{
    let aux = false
    for(var i=0;i<array.length;i++){
        aux = callback(array[i],i,array)
        if(aux) return i
    }
    return -1
}


const newEvery = (array, callback)=>{
    for(var i=0;i<array.length;i++){
        while(callback(array[i],i,array) == false){
            return false
        }
    }
    return true
}


/*
console.log(newEvery([46,7,3,87,34,543], function(value){
    return value < 1000
}))
*/


const newFilter = (array, callback)=>{

    let newArray = []
    let cont = 0
    for(var i=0;i< array.length;i++){
        if(callback(array[i],i,array)){
            newArray[cont] = array[i]
            cont++
        }
    }

    return newArray
}

/*
console.log(newFilter([46,7,3,87,34,543], function(value){
    return value > 40 && value < 500
}))
*/



//extras

const newConcat  = (...theArgs)=>{
    
    let newArray = []
    let cont =0 
    
    for(var i=0;i<theArgs.length;i++){
        
        if(typeof(theArgs[i]) == "object"){
            aux = theArgs[i]
            for (var y = 0; y <aux.length;y++){
                newArray[cont] = aux[y]
                cont++
            }
        }else{
            newArray[cont] = theArgs[i]
            cont++
        }
    }
    
    cont = 0 
    return newArray
}


//newConcat(1,[4,5,6],21,47,[1,2])

const newIncludes  = (...theArgs)=>{
    

    let i = 0
    if(theArgs[2] != undefined) i = theArgs[2]

    let aux = theArgs[0]
    console.log(theArgs[1])
    for(i;i<aux.length;i++){
        
        if(aux[i] == theArgs[1]) return true

    }
    return false
}

//newIncludes([123,45,,3,56,7],8)

const newIndexOf  = (arr, elementPesquisa, index)=>{

    
    if(index >= 0){
        for(var i = index; i < arr.length; i++){
            if(arr[i] == elementPesquisa) return i
        }
    }else{
       for(var i=arr.length; i >=0; i--){
           if(arr[i] == elementPesquisa) return i
       }
    }   
    
    return -1
}

//newIndexOf([1,3,6,43,776,23,1],43,1)

const newJoin = (...theArgs)=>{

    let separador = ","
    let newString = ""
    let arr = theArgs[0]
    if(theArgs[1] != undefined) separador = theArgs[1]

    if(theArgs[0].length == 0) return []


    for(var i = 0; i< arr.length;i++){
        
        newString += arr[i]
        if(arr.length > i+1) newString +=  separador
    }
    return newString
}

//newJoin(["oi", "meu", "nome"],"/"))

const newSlice  = (...theArgs)=>{
    let arr = theArgs[0]
    let i = theArgs[1]
    let newArray = []
    let cont = 0
    if(theArgs[2] != undefined){
        fim = theArgs[2]
    }else{
        fim = arr.length
    }
     
    for(i;i < fim; i++){
        newArray[cont] = arr[i]
        cont++
    }
    cont=0
    return newArray

}

//newSlice([1,2,3,4,5,6,7,8,9],2,7)


const newArrayOf  = (...theArgs)=>{
    let arr = []
    let cont =0
    for(let i=0 ;i < theArgs.length;i++){
        arr[cont] = theArgs[i]
        cont++
    }
    return arr
}

//console.log(newArrayOf(1,2,754,23,2))

const newFlat  = ()=>{}
const newFlatMap  = ()=>{}

