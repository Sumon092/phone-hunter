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
    const phoneContainer = document.getElementById('phone-container');
    const disPlay20items = phones.slice(0, 20);
    phoneContainer.textContent = '';
    if (!phones) {
        alert('No Phone found !')
    }
    disPlay20items?.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col shadow-lg p-3">
     <div class="card">
         <img src="${phone.image}" class="card-img-top rounded" alt="...">
         <div class="card-body">
             <h3 class="card-title fw-bold text-warning">${phone.phone_name}</h3>
             <h4 class="card-title">Brand : ${phone.brand}</h4>
         </div>
         <button class="btn btn-primary btn-rounded fw-bold fs-4" onclick="loadItemDetail('${phone.slug}');">EXPLORE MORE</button>
     </div>
     
 </div>`

        phoneContainer.appendChild(div);
    });
}
loadPhone('a');

const loadItemDetail = items => {
    const url = `https://openapi.programming-hero.com/api/phone/${items}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItemDetail(data.data));
}
displayItemDetail = item => {
    console.log(item);
    const showDetail = document.getElementById('item-detail');
    showDetail.textContent = '';

    const div = document.createElement('div');
    div.innerHTML = ` <div class="row g-0">
     <div class="col-md-4">
         <img width="400px"src="${item.image}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-md-8">
         <div class="card-body">
             <h5 class="card-title">${item.name}</h5>
             <p class="card-text"><small class="text-muted">Release Date:${item.releaseDate}</small></p>
             <p class="card-text">Brand: ${item.brand}</p>
             <h6 d-inline-block>Main Features:</h6>
             <p class="text-muted">Cheipset: ${item.mainFeatures.chipSet} ,Display: ${item.mainFeatures.displaySize}, Memory: ${item.mainFeatures.memory}
             </p>
             <p class="m-0">Others:</p>
             <p>Bluetooth:<span class="text-muted">${item.others.Bluetooth},</span> GPS:<span class="text-muted">${item.others.GPS},</span>NFC: <span class="text-muted">${item.others.NFC},</span></p>
             
         </div>
     </div>
 </div>
 `

    showDetail.appendChild(div);

}


