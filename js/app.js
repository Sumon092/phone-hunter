const searchGadgets = () => {
    const searchText = document.getElementById('input-field').value;
    loadGadgets(searchText);

    // clear search field
    document.getElementById('input-field').value = '';
}

const loadGadgets = searchText => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayGadgetItems(data.data));
}
const displayGadgetItems = gadgets => {

    if (gadgets.length <= 0 || gadgets == null) {
        alert("phone not found !");

        return false;
    }
    const phoneContainer = document.getElementById('phone-container');
    const disPlay20items = gadgets.slice(0, 20);
    phoneContainer.textContent = '';

    disPlay20items?.forEach(gadget => {
        const div = document.createElement('div');
        div.innerHTML = `<div class="col shadow-lg p-3">
     <div class="card">
            <img src="${gadget.image}" class="card-img-top rounded" alt="...">
         <div class="card-body">
             <h3 class="card-title fw-bold text-primary">${gadget.phone_name}</h3>
             <h4 class="card-title">Brand : ${gadget.brand}</h4>
         </div>
         <button class="btn btn-primary btn-rounded fw-bold fs-5" onclick="loadGadgetDetail('${gadget.slug}');">EXPLORE MORE</button>
     </div>
     
 </div>`

        phoneContainer.appendChild(div);
    });
}
loadGadgets('a');

const loadGadgetDetail = items => {
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
             <h4 class="card-title fw-bold">${item.name}</h4>
             <p class="card-text lh-sm"><small class="text-muted">${item?.releaseDate ? item?.releaseDate : 'Released date : Unknown'}</small></p>
             <p class="card-text fw-bold">Brand: <span        class="text-muted">${item.brand}</p>

            <!--  Main features-->

             <h6 class="fw-bold">Main Features:</h6>
             <p>
                Cheipset : <span class="text-muted">${item.mainFeatures.chipSet},</span>  Display : <span class="text-muted">${item.mainFeatures.displaySize}</span>, Memory : <span class="text-muted">${item.mainFeatures.memory}</span>
             </p>
             <!--Sensor-->
             <P class="fw-bold mb-0">Sensor</p>
             <p>${item.mainFeatures.sensors}</p?

                <!--Others features-->

             <p class="m-0">Others:</p>
             <p>
                Bluetooth :
                <span class="text-muted"> ${item?.others?.Bluetooth ? item.others?.Bluetooth : 'No'}.</span> 
                GPS :
                <span class="text-muted"> ${item?.others?.GPS ? item?.others?.GPS : 'No'}. </span>
                NFC : 
                <span class="text-muted"> ${item?.others?.NFC ? item?.others?.NFC : 'No'}.</span> 
                Radio : <span class="text-muted"> ${item?.others?.Radio ? item?.others?.Radio : 'No'}.</span> 
                USB : <span class="text-muted"> ${item?.others?.USB ? item?.others?.USB : 'No'}.</span> 
                WLAN : <span class="text-muted"> ${item?.others?.WLAN ? item?.others?.WLAN : "No"}.</span>
            </p>
             
         </div>
     </div>
 </div>
 `

    showDetail.appendChild(div);

}


