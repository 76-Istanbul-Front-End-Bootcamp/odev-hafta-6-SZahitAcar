window.mockApiUrl = "https://5ff1a6b9db1158001748b31d.mockapi.io/pets/";

window.removePet = (id) => {
    console.log(id) // remove the pet with given id
    fetch(`${window.mockApiUrl}${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        }
    }).then(() => {
        window.location.reload();
    });

};
const divEl = document.createElement('div');
document.querySelector('body').appendChild(divEl);
window.generateDetails = (pet) => {
    return `<div class="modal fade" id="exampleModal${pet.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
      </div>
      <div class="modal-body">
        ${pet.name}</br>
        <img src=${pet.image}></br>
        ${pet.description}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
}

window.openPetDetail = (id) => {
    fetch(`${window.mockApiUrl}${id}`)
        .then(resp => resp.json())
        .then((data) => {
            const petModalHtml = generateDetails(data);
            divEl.innerHTML = ''
            divEl.innerHTML += petModalHtml;
            $(`#exampleModal${id}`).modal("show");
        })
};
window.getForm = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => input.value = '');
    $("#addPetModal").modal("show");

}