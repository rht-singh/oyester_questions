

function  maxAndMinId(birdId) {


    let np = new Map();
  
    for(let i=0;i<birdId.length;i++){
       if(np.get(birdId[i])){
           np.set(birdId[i],np.get(birdId[i])+1)
       }
       else{
        np.set(birdId[i],1)

       }

        }

let max=0;
let min=1e5;

let id1=-1;
let id2=-1;

np.forEach((value,key)=>{
    if(value >=max){
                max=value
              id1=key
            }
    else if(min>=value){
        min=value
        id2=key
    }

    
})

np.forEach((value,key)=>{
if(value==max){
    if(id1>key){
        id1=key
    }
}
if(value == min){
    if(id2>key){
        id2=key
    }
}



})

console.log([id1,id2]);
    }
    


let birdId = [1,2,2,4,4,4,4,5];
maxAndMinId(birdId);