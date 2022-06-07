function managerCard(manager) {
    return `<div class="col-4 my-3">
    <div class="card" style="width: 15rem;">
        <div class="card-body bg-primary">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text"><i class="fa-solid fa-mug-hot"></i>Manager</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email:${manager.email}</li>
            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
    </div>
</div>`
}

module.exports = managerCard