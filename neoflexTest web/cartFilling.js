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

const cartList = document.querySelector(".cartList")
const template = document.querySelector(".cartElement")
const img = template.querySelector(".cartElementImage")
const name = template.querySelector(".titleInCart")
const unitPrice = template.querySelector(".unitPrice")
const quantity = template.querySelector(".quantity")
const priceForQuantity = template.querySelector(".priceForQuantity")
let totalCost = 0


function drowElement(element, q){

}



for (let i = 0; i < headphones.length; i++)
{
	let q = sessionStorage.getItem(i)
	if (q > 0) {
		img.src = headphones[i].img
		name.textContent = headphones[i].title
		unitPrice.textContent = headphones[i].price + " ₽"
		quantity.textContent = sessionStorage.getItem(i)	
		priceForQuantity.textContent = q * headphones[i].price + " ₽"
		totalCost 	+= q * headphones[i].price
		const newElement = template.cloneNode(true)
		newElement.id = i
		
		newElement.querySelector("#plus").onclick = function f() {
			const temElement = this.parentElement.parentElement.parentElement.parentElement.id
			sessionStorage.setItem('count', + sessionStorage.count + 1)
			sessionStorage.setItem(temElement, + sessionStorage.getItem(temElement) + 1)
			location.reload()
		}		
		newElement.querySelector("#minus").onclick = function f() {
			const temElement = this.parentElement.parentElement.parentElement.parentElement.id						
			sessionStorage.setItem('count', + sessionStorage.count - 1)
			sessionStorage.setItem(temElement, + sessionStorage.getItem(temElement) - 1)
			location.reload()
		}
		
		
		cartList.appendChild(newElement)				
	}
}

document.querySelector("#finalCost").textContent = totalCost + " ₽"