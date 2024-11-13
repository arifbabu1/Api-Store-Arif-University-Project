// let searchButtonEvent=document.querySelector(".search-button")
// searchButtonEvent.addEventListener("onclick",handelButton()=>{

// })

function handleSearch() {
  const searchInputValue = document.querySelector(".searchBar").value;
  console.log(searchInputValue);
  loadPhone(searchInputValue);
}

const loadPhone = async (searchText) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
  const serverData = await res.json();
  displayPhone(serverData.data);
  console.log(serverData);
};

const displayPhone = (data) => {
    
  const cardContainer=document.querySelector(".product-list")
  cardContainer.innerHTML=""
  data.forEach((singlePhone) => {
    const productCart = document.createElement("div");
    productCart.classList.add("product-card");
    
    productCart.innerHTML = `<img src="${singlePhone.image}" alt="Phone">
        <h3>${singlePhone.phone_name}</h3>
        <p>This is a very nice phone with all the latest features available in the market.</p>
        <span>$999</span>
        <button>Get Details</button>`;
        console.log(productCart)
        cardContainer.appendChild(productCart)

  });
};
