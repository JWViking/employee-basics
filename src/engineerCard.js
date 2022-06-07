function engineerCard(engineer) {
    return `<div class="col-4 my-3">
    <div class="card" style="width: 15rem;">
        <div class="card-body bg-primary">
            <h5 class="card-title">${engineer.name}</h5>
            <p class="card-text"><i class="fa-solid fa-glasses"></i> Engineer</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: ${engineer.email}</li>
            <li class="list-group-item">Github Username: ${engineer.github}</li>
        </ul>
    </div>
</div>`
}
module.exports = engineerCard