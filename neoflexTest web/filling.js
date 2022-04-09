const headphones = [
    {
        img: "./images/Image-1.png",
        title: "Apple BYZ S852I",
        price: "12344",
        rate: "3.2  ",
    },
    {
        img: "./images/Image-2.png",
        title: "Apple EarPods",
        price: "5588",
        rate: "4.7",
    },
    {
        img: "./images/Image-3.png",
        title: "Apple EarPods",
        price: "2326",
        rate: "5.0",
    },
    {
        img: "images/Image-4.png",
        title: "Apple EarPods",
        price: "1237",
        rate: "4.5",
    }
]




let counter = document.querySelector("#cart-counter")
sessionStorage.setItem('count', sessionStorage.count ? sessionStorage.count : 0)

/*function addElementToCart() {
    console.log("asdasd")
    counter.textContent += 1
}*/

//==============================
const catalog = document.querySelector(".catalog")
const template = document.querySelector(".catalog-element")
const img = template.querySelector(".element-image")
const name = template.querySelector(".element-name")
const price = template.querySelector(".element-price")
const rate = template.querySelector(".current-element-rate")
for (let i = 0; i < headphones.length; i++)
{   
    img.src = headphones[i].img    
    name.textContent = headphones[i].title
    price.textContent = headphones[i].price + " ₽"
    rate.textContent = headphones[i].rate
    template.id = i.toString()
    const newElement = template.cloneNode(true)
    newElement.querySelector(".buy-button").onclick = function f(){   
        counter.textContent = + counter.textContent + 1   
        
        sessionStorage.setItem('count', + sessionStorage.count + 1)
        sessionStorage.setItem(i, + sessionStorage.getItem(i) + 1)        
    }       
    catalog.appendChild(newElement)    
}



 


