const searchPhone = () => {
    const searchText = document.getElementById('input-field').value;
    loadPhone(searchText);
}

const loadPhone = searchText => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data));
}
const displayPhone = phones => {
    console.log(phones);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';
    for (const phone of phones) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col">
         <div class="card">
             <img src="..." class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">${phone.brand}</h5>
                 <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                     to
                     additional content. This content is a little bit longer.</p>
             </div>
         </div>
     </div>`
        phoneContainer.appendChild(div);
    }
    /*  
 
 }) */
}
loadPhone('iphone');
