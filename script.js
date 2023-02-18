

var list0 = [];
var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];



var n = 1;
var x = 0;

function addrow(){

    var addrown = document.getElementById('tbl');
    var newrow = addrown.insertRow(n);
    var time = new Date().toLocaleString();

    list0[x]=document.getElementById('ID');
    list1[x]= document.getElementById('Bname').value;
    list2[x]= document.getElementById('issueto').value;
    list3[x]= document.getElementById('d&t').value;
    list4[x]= document.getElementById('sts').value;
    
    if(list1[x]==""||list2[x]==""){
        return false;
    }
      
    
    var cel0=newrow.insertCell(0);
    var cel1 = newrow.insertCell(1);
    var cel2 = newrow.insertCell(2);
    var cel3 = newrow.insertCell(3);
    var cel4 = newrow.insertCell(4);

    cel0.innerHTML=n;
    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = time;
    cel4.innerHTML ="Not Returned";
    cel4.style ="color:red;"

    n++;
    x++;

    // cel4.addEventListner('click',myfunction);

    // function myfunction (){
    //     document.getElementById("change").innerHTML="returned";
    // }


    var obj ={id:n,book_name: cel1.innerHTML,issued_book:cel2.innerHTML,time:time,sts:"Not Returned"}

    console.log(obj);
    return true; 

}



