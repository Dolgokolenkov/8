//1

pickPropArray=(array,prop)=>{
    newArray=[];
    array.forEach(item => {
        if(item[prop]!=undefined){
            newArray.push(item[prop])
        }
    });
    return newArray;
}

//2
createCounter=()=>{
    let count=0
    return function(){
        count+=1
    }
}
//3
spinWords=(message)=>{
    elements=message.split(" ");
    let result="";
    elements.forEach(item=>{
        if(item.length>5){
            result+=" "+[...item].reverse().join("");
        }
        else{
            result+=" "+item;
        }
    })
    return result.substring(1);
}
//4
returnTargetIndex=(nums,target)=>{
    for(let i=0;i<nums.length;i++){
        for(let j=i;j<nums.length;j++){
            if((nums[i]+nums[j])==target){
                return [i,j]
            }
        }
    }
    return "В массиве нет подходящих значений.";
}


