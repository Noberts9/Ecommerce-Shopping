const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav =document.getElementById('navbar');

if(bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

let availableKeywords =[
  'sneakers',
  'Air Jordan',
  'Prada',
  'Drew',
  'Nike',
  'Tshirt',
  'Clogs',
  'jeans',
  'Hoodie',
  'Heels',
  'Skirt',
  'Bape',
];

const resutBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if (input.length){
    result = availableKeywords.filter((keyword) =>{
      return keyword.toLowerCase().includes(input.toLowerCase());
    });
    console.log(result);
  }
   display(result);

   if(!result.length){
    resutBox.innerHTML ='';
   }
}
function display(result){
  const content = result.map((list) =>{
    return "<li onclick=selectInput(this)>" + list + "</li>";
  });

  resutBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}
function selectInput(list){
  inputBox.value = list.innerHTML;
  resutBox.innerHTML = '';
}






const forms=document.querySelector(".forms"),
  pwShowHide=document.querySelectorAll(".field i"),
  links=document.querySelectorAll(".link");

  pwShowHide.forEach(fieldi => {
    fieldi.addEventListener("click", ()=> {
        let pwFields = fieldi.parentElement.parentElement.querySelector(".password");
        
        
        pwFields.forEach (password => {
            if(password.type === "password"){
                password.type = "text";
                fieldi.classList.replace("ri-eye-off", "ri-eye");
                return;
            }
            password.type = "password";
            fieldi.classList.replace("ri-eye", "ri-eye-off");
        })
    })
  })

  links.forEach(link =>{
    link.addEventListener("click",e => {
        e.preventDefault();//preventing from submitting
        forms.classList.toggle("show-signup");
    })
  })
