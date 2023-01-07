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

const nums = [11,7,15,3]
const target = 18

console.log(returnTargetIndex(nums,target))