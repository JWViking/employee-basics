function internCard(intern) {
    return `<div class="col-4 my-3">
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <p class="card-text"><i class="fa-solid fa-user-graduate"></i>Intern</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: ${intern.email}</li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`
}
module.exports = internCard