function printOccurence(str){
    var res=" "
    for(var i=0;i<str.length;i++){
        if(!res.includes(str.charAt(i))){
            res=res+str.charAt(i)
        }
    }
    console.log(res)
}
var str="sajhags"
printOccurence(str)