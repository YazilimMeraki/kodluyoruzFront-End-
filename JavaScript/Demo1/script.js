let id = prompt ("Kulanıcı Adi Giriniz :") 
let myname = document.querySelector("#myName")
myname.innerHTML= id 

function showTime ()
{
    let date = new Date();  
    let hours = date.getHours(); 
    let minute = date.getMinutes(); 
    let second = date.getSeconds(); 
    var d = new Date(); 
    var day= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];  
    let fulldate = document.querySelector("#myClock") 
    fulldate.innerHTML= hours + ":" + minute +":" + second + " " + day[d.getDay()]; 
}
let simdi = setInterval(showTime,100); 