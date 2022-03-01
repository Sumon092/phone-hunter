const searchPhone = () => {
    const searchText = document.getElementById('input-field').value;
    loadPhone(searchText);

    // clear search field
    document.getElementById('input-field').value = '';
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
    const disPlay20items = phones.slice(0, 20);
    phoneContainer.textContent = '';
    for (const phone of disPlay20items) {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col shadow-lg p-3">
         <div class="card">
             <img src="${phone.image}" class="card-img-top rounded" alt="...">
             <div class="card-body">
                 <h3 class="card-title fw-bold text-warning">${phone.phone_name}</h3>
                 <h4 class="card-title">Brand : ${phone.brand}</h4>
             </div>
             <button class="btn btn-primary btn-rounded fw-bold fs-4" onclick="exploreMore();">EXPLORE MORE</button>
         </div>
         
     </div>`

        phoneContainer.appendChild(div);
    }
    /*  
 
 }) */
}
loadPhone('a');
