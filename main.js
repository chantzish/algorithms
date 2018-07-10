var boxes=[]

function render (){
    boxes.forEach(size => $("<div></div>").css({"width": size+"px", "height": size+"px", "background-color": "red"}).appendTo("#canvas") )
}

function create(){
    boxes.push(Number($("#size").val()));
    $("#canvas").empty()
    render();
}

function sort(){
    split(0,boxes.length-1)
    $("#canvas").empty()
    render();
}

function split(start,end){
    if(start >= end)
        return;
    var temp;
    var middle = start;
    var i =start+ 1, j = end;
    while(i<j){
        if(boxes[i] <= boxes[middle]){
            i++;
        }
        else {
            temp=boxes[i]
            boxes[i] = boxes[j]
            boxes[j]=temp
            j--;
        }
    }
    if(boxes[i]<=boxes[middle]){
        temp=boxes[i]
        boxes[i] = boxes[middle]
        boxes[middle] = temp
        middle = i
    }
    else {
        temp = boxes[i-1]
        boxes[i-1] = boxes[middle]
        boxes[middle]=temp
        middle = i-1
    }
    split(start,middle-1)
    split(middle+1,end)
}

$("#create").click(create)
$("#sort").click(sort)