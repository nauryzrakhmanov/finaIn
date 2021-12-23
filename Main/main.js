function onEntry(entry){
    entry.forEach(change=>{
        if(change.isIntersecting){
            change.target.classList.add('element-show');
        }
    });
}



let options={threshold:[0.5]};
let observer= new IntersectionObserver(onEntry,options);
let elements=document.querySelectorAll('.sect1_part1,.sect1_part2,.sect2_part1,.sect2_part2,.sect3_elem,.sect4_part1,.sect4_part2,.sect5_part1,.sect6_block');

for(let elm of elements){
    observer.observe(elm);
}



//==================================//

const slider_arrays= document.querySelector('.slider_arrays');
const slider_content=document.querySelector('.slider_content');
const left_aray=document.querySelector('.left_array');
const right_array=document.querySelector('.right_array');
const slider_txt=document.querySelector('.slider_txt');
var count = 0;




right_array.addEventListener('click',function(){
   count++; 
    if(count >= 3){
        count=0;
    }
    rollslider();
});

left_aray.addEventListener('click',function(){
   count--; 
    if(count < 0){
        count=3-1;
    }
    rollslider();
});
function rollslider(){
    slider_content.style.transform='translate(-'+count*375+'px)';
    
}


//===========================================//

const burger=document.querySelector('.burger');
const burger_list=document.querySelector('.burger_list');
const line1=document.querySelector('.line1');
const line2=document.querySelector('.line2');
const line3=document.querySelector('.line3');

burger.addEventListener("click",function(event){
    burger_list.classList.toggle('_activeList');
    line1.classList.toggle('_activeLine1');
    line2.classList.toggle('_activeLine2');
    line3.classList.toggle('_activeLine3');
    
});



//==========================================//

const sect3=document.querySelector('.section3');
const footer=document.querySelector('.footer');
const sect5=document.querySelector('.section5');






function saveData(){

let email,pass;

email=document.getElementById("email").value;
pass=document.getElementById("pass").value;

let user_records=new Array();

user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(user_records.some((v)=>{return v.email==email && v.pass==pass})){

alert("Entered");

let current_user=user_records.filter((v)=>{return v.email==email && v.pass==pass})[0]
 localStorage.setItem('name',current_user.name);
 localStorage.setItem('email',current_user.email);

  window.open("../Main/main.html")
}
else
{
  alert('Error');
}

}


        $(".extremum-click").click(function () {
      $(this).siblings(".extremum-slide").slideToggle("slow");
    });
        function validateForm() {
        let x = document.forms["myForm"]["email"].value;
        if (x == "") {
        alert("Email must be filled out");
        return false;
            }
        }





