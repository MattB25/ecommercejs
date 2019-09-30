document.addEventListener("DOMContentLoaded", function() 
{
	loadData(insertProducts);
});



function loadData(){

	const myReq = new XMLHttpRequest();

	myReq.open("GET", 'products.json');

	myReq.onload = function()
	{
		try
		{
			const json = JSON.parse(myReq.responseText);
			insertProducts(json);
			insertBasket();
			addToCart();
		} 
		catch(e)
		{
			console.warn("Could not read JSON");
		}

	};

	myReq.send();
}


function insertProducts (json)
{
	for (i=0; i<json.products.length; i++)
	{

		var myGrid = document.getElementById("productgrid");
		var myProduct = document.createElement("div");
		var productID = document.createElement("input");
		var productCategory = document.createElement("input");
		var productName = document.createElement("h1");
		var productDescription = document.createElement("p");
		var productImages = document.createElement("img");
		var productPrice = document.createElement("h2");
		var productQuantity = document.createElement ("input")
		var productButton = document.createElement("input"); 
		//makes variables and creates each element in the html 

		myProduct.id = 'product';
		productID.type = 'hidden';
		productID.value='';
		productCategory.type = 'hidden';
		productCategory.value='';
		productImages.src='images/';
		productQuantity.type = 'number';
		productQuantity.min = 1;
		productQuantity.max = 5;
		productQuantity.value = 1;
		productButton.type = 'button';
		productButton.value = 'Add To Basket';
		productButton.setAttribute('id','productButton' + i);
		//customising the elements

		//console.log(productButton);

		productID.innerHTML = json.products[i].id;
		myProduct.appendChild(productID);

		productCategory.innerHTML = json.products[i].category;
		myProduct.appendChild(productCategory);

		productName.innerHTML = json.products[i].name;
		myProduct.appendChild(productName);

		productDescription.innerHTML = json.products[i].description;
		myProduct.appendChild(productDescription);

		productImages.src ="images/" + json.products[i].images[0].src;
		myProduct.appendChild(productImages);

		productPrice.innerHTML = json.products[i].price;
		myProduct.appendChild(productPrice);

		myProduct.appendChild(productQuantity);

		myProduct.appendChild(productButton);

		myGrid.appendChild(myProduct);

		//appending all the elements to the productgrid so they are displayed on the webpage

	}
		productButton.addEventListener('click', addToCart);
		//when product button is clicked, goes to addtocart function
}

function insertBasket()
{
	var myBasket = document.getElementById("basket");
	var myCart = document.createElement("div");
	var cartHeader = document.createElement("h1");
	//creates elements

	myCart.id = 'cart';

	cartHeader.innerHTML = "Basket";
	myCart.appendChild(cartHeader);

	myBasket.appendChild(myCart);
	//appends elements to basket and displays basket on page
}

window.addEventListener('DOMContentLoaded', function()
{
	var users = {};
	var Name = document.getElementById("inputName");
	var Address = document.getElementById("inputAddress");
	var Postcode = document.getElementById("inputPostcode");
	var Notes = document.getElementById("inputNotes");
	var Button = document.getElementById("inputButton");
	var message = document.getElementById("message");
	//gets the elements from the html and sets variables for them

	if(window.localStorage.getItem("users")) 
	{
	    var getUser = JSON.parse(window.localStorage.getItem("users"));
    	message.innerHTML = "Welcome back " + getUser.Name;
	} //if the user is already in local storage, display message that welcomes them back

	inputButton.addEventListener("click", addUser);
	//button links to adduser function

	if(localStorage.length > 0)
	{
		users = JSON.parse(localStorage.getItem("users"));
		//if there is something already in local storage, get it
	}

	function addUser()
	{
		users.Name = Name.value;
		users.Address = Address.value;
		users.Postcode = Postcode.value;
		users.Notes = Notes.value;
		message.innerHTML = "Hello " + Name.value;
		window.localStorage.setItem('users', JSON.stringify(users))
		//sets values entered in text boxes to values in the localstorage
		//produces message to new user saying hello
	}

})



function addToCart(id)
{
	var productID = json.products[i].id;
	var productName = json.products[i].name;
	var productPrice = json.products[i].price;

	var item = {
		'id' : productID,
		'name' : productName,
		'price' : productPrice
	};

	if(productButton.id == productID)
	{
		myCart.appendChild(item);
		myBasket.appendChild(myCart);
	}

	//attempt at trying to add to cart. 
	//wanted to link button id to the id of the certain box, then push the contents of the box in the basket.


}

function sortByPrice()
{
	//tried to use the sort() function to sort the array that is all the products.
	//function took 2 parameters of a and b, then minused one from the other to sort by price, didn't work in the end.
}

function categoriseItems()
{
	//if keyboards category button is clicked, 
		//for category.id == 0
			//show results

	//if mice category button is clicked, 
		//for category.id == 1
			//show results

	//if monitor category button is clicked, 
		//for category.id == 2
			//show results

	//pseudocode of trying to categorise items, code for this didn't work out either.
}
