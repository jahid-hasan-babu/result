function result(){
    var mark = document.getElementById("number").value;
    var latter = "";
    switch(true){
        case mark >= 80 :
            latter = "5";
            break;
        case mark >= 70 :
            latter = "4";
            break;
        case mark >= 60 :
            latter = "3.5";
            break;
        case mark >= 50 :
            latter = "3";
            break;
        case mark >= 40 :
            latter = "2";
            break;
        case mark >= 33 :
            latter = "1";
            break;
        default:
            latter = "0";
    }
    document.getElementById("result").innerHTML = latter;
}