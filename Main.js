// NextButton BackButton

const NextButton = document.querySelector(".NextButton")


const BackButton = document.querySelector(".BackButton")


const Gallery = document.querySelector(".Gallery")


console.log(NextButton)
console.log(BackButton)
console.log(Gallery)

Gallery.addEventListener("wheel", (e)=>{

//  console.log(e)

// e.preventDefault()

Gallery.style.scrollBehavior ="auto"

if(e.deltaY*1 == 100)
  Gallery.scrollLeft += e.deltaY-60;
else
Gallery.scrollLeft += e.deltaY+60;
})


NextButton.addEventListener("click" , ()=>{

// console.log("Test")

Gallery.style.scrollBehavior ="smooth"

    Gallery.scrollLeft += 900;

})

BackButton.addEventListener("click" , ()=>{

    // console.log("Test")
    Gallery.style.scrollBehavior ="smooth"
        Gallery.scrollLeft -= 900;
    
    })