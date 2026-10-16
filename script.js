const generate_btn=document.getElementById("generate-btn")
const palette_container=document.querySelector(".palette-container")


generate_btn.addEventListener("click",generateColorPalette)
palette_container.addEventListener("click",function(event){
    if(event.target.classList.contains("copy-BTN")){
        
        const hexvalue=event.target.previousElementSibling.textContent
        navigator.clipboard
        .writeText(hexvalue)
        .then(()=>showcopysuccess(event.target))
        .catch((err)=>console.log(err))
    }
    else if(event.target.classList.contains("color")){
        const hexvalue=event.target.nextElementSibling.querySelector(".hex-value").textContent
         navigator.clipboard
         .writeText(hexvalue)
        .then(()=>showcopysuccess(event.target.nextElementSibling.querySelector(".copy-BTN")))
        .catch((err)=>console.log(err))
    }
})

function showcopysuccess(element){
    element.classList.remove("far" , "fa-copy");
    element.classList.add("fas" , "fa-check");
    element.style.color="#48bb78";

    setTimeout(()=>{
        element.classList.remove("fas" , "fa-check");
        
        element.classList.add("far" , "fa-copy");
        element.style.color="";
    },1000)
}




function generateColorPalette(){
    const colors=[]

    for(let i=0;i<5;i++){
        colors.push(generateRandomColors())
    }
    appendhexvalues(colors)
}
function generateRandomColors(){
    const letters="0123456789ABCDEF"
    let color="#"
    for(let i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
function appendhexvalues(colors){
    const color_BOXES=document.querySelectorAll(".color-Box")
    color_BOXES.forEach((box,index) => {
        const color=colors[index]
        const colordiv=box.querySelector(".color")
        const hex_value=box.querySelector(".hex-value")
        colordiv.style.backgroundColor=color
        hex_value.textContent=color
    })
}