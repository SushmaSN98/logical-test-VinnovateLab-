function findPair(arr,key){
    var c
    var b=[]
    for(var i=0;i<arr.length-1;i++){
    c=i+1;
    if(arr[i]+arr[c]==key){
        b.push(arr[i])
        b.push(arr[c])
        return b
    }
    }
}
var arr=[4,6,5,7,3,3,9,1,4]
var key=5
var res=findPair(arr,key)
console.log(res)