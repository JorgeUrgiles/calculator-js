const display = document.querySelector("#display");
const buttons =  document.querySelectorAll("button");
buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText="";
        }else if(item.id=="backspace"){
            let string = display.innerText.toString();
            display.innerText=string.substr(0, string.length-1);//substr(inicio,longitud menos uno para que extraiga el ultimo)

        }else if(display.innerText !=""&& item.id=="equal"){
            // let cadena =  "2+2"
            //con eval lo toma como operacion aritmetica
            display.innerText= eval(display.innerText)
        }else if(display.innerText=="" && item.id=="equal"){
            display.innerText="Null";
            //setTimeout= ejecuta un fragmento de codigo en un determinado tiempo en este ejmplo pedimos que se borre el Null en 2 segundos
            setTimeout(()=>(display.innerText=""),2000);

        }else{
            display.innerText += item.id;
            //8+9 se va adjuntando lo que vamos escribiendo
        }
    }
})
  
const themeToggleBtn =document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
let isDark=true;
themeToggleBtn.onclick=()=>{
    calculator.classList.toggle("dark");
    themeToggleBtn.classList.toggle("active");
    isDark!=isDark;
}
