document.getElementById('button-back').addEventListener('click', () => {
    document.getElementById('form').style.display = 'none'
    document.getElementById('body').style.display = 'block'
    document.getElementById('form-update').style.display = 'none'
})
document.getElementById('button-add').addEventListener('click', () => {
    document.getElementById('body').style.display = 'none'
    document.getElementById('form').style.display = 'block'
    document.getElementById('form-update').style.display = 'none'
})

window.addEventListener('load', function (e) {
    document.getElementById('body').innerHTML = ``
    $.post('https://lb-news/getDatas', JSON.stringify({}), function (data) {
        if (data.canEdit == false) {
            document.getElementById('button-add').style.display = 'none'
            document.getElementById('button-back').style.display = 'none'
        }
        if (data.news.length == 0) {
            document.getElementById('body').innerHTML += `
            <div class="card">
                <p class="card-title">Pas de news en vue</p>
                <p class="card-description">Revenez quand les reporter en posteront</p>
                <p class="card-message"></p>
            </div>
            `
        } else {
            for (let i = 0; i < data.news.length; i++) {
                document.getElementById('body').innerHTML += `
                <div class="card">
                    <p class="card-title">${data.news[i].title}</p>
                    <p class="card-description">${data.news[i].description}</p>
                    <p class="card-message">${data.news[i].message}</p>
                    <button class="button-delete" id="button-delete" onclick="Deletenews(${data.news[i].id})"><img src="assets/delete.png" class="icon"></button>
                    <button class="button-edit" id="button-edit" onclick="Editnews(${i}, ${data.news[i].id})"><img src="assets/edit.png" class="icon"></button>
                </div>
                `
            }
        }
    })
})
document.getElementById('button-addnews').addEventListener('click', () => {
    let title = document.getElementById('title-news-add').value
    let description = document.getElementById('description-news-add').value
    let message = document.getElementById('message-news-add').value

    $.post('https://lb-news/addNews', JSON.stringify({ title: title, description: description, message: message }), function (added) {
        if (added) {
            $.post('https://lb-news/refresh', JSON.stringify({}), function (data) {
                document.getElementById('body').innerHTML = ""
                if (data.canEdit == false) {
                    document.getElementById('button-add').style.display = 'none'
                    document.getElementById('button-back').style.display = 'none'
                }
                if (data.news.length == 0) {
                    document.getElementById('body').innerHTML += `
                        <div class="card">
                            <p class="card-title">Pas de news en vue</p>
                            <p class="card-description">Revenez quand les reporter en posteront</p>
                            <p class="card-message"></p>
                        </div>
                    `
                } else {
                    for (let i = 0; i < data.news.length; i++) {
                        document.getElementById('body').innerHTML += `
                        <div class="card">
                            <p class="card-title">${data.news[i].title}</p>
                            <p class="card-description">${data.news[i].description}</p>
                            <p class="card-message">${data.news[i].message}</p>
                            <button class="button-delete" id="button-delete" onclick="Deletenews(${data.news[i].id})"><img src="assets/delete.png" class="icon"></button>
                            <button class="button-edit" id="button-edit" onclick="Editnews(${i}, ${data.news[i].id})"><img src="assets/edit.png" class="icon"></button>
                        </div>
                        `
                    }
                }
                document.getElementById('form').style.display = 'none'
                document.getElementById('body').style.display = 'block'
            })
        }
    })
})

function Deletenews(id_news) {
    $.post('https://lb-news/deleteNews', JSON.stringify({ id: id_news }), function (data) {
        if (data) {
            $.post('https://lb-news/getDatas', JSON.stringify({}), function (data) {
                document.getElementById('body').innerHTML = ``
                if (data.canEdit == false) {
                    document.getElementById('button-add').style.display = 'none'
                    document.getElementById('button-back').style.display = 'none'
                }
                if (data.news.length == 0) {
                    document.getElementById('body').innerHTML += `
                    <div class="card">
                        <p class="card-title">Pas de news en vue</p>
                        <p class="card-description">Revenez quand les reporter en posteront</p>
                        <p class="card-message"></p>
                    </div>
                    `
                } else {
                    for (let i = 0; i < data.news.length; i++) {
                        document.getElementById('body').innerHTML += `
                        <div class="card">
                            <p class="card-title">${data.news[i].title}</p>
                            <p class="card-description">${data.news[i].description}</p>
                            <p class="card-message">${data.news[i].message}</p>
                            <button class="button-delete" id="button-delete" onclick="Deletenews(${data.news[i].id})"><img src="assets/delete.png" class="icon"></button>
                            <button class="button-edit" id="button-edit" onclick="Editnews(${i}, ${data.news[i].id})"><img src="assets/edit.png" class="icon"></button>
                        </div>
                        `
                    }
                }
            })
        }
    })
}
let id_to_update = null
function Editnews(index, id_news) {
    $.post('https://lb-news/getDatas', JSON.stringify({}), function (data) {
        id_to_update = id_news
        document.getElementById('body').style.display = 'none'
        document.getElementById('form').style.display = 'none'
        document.getElementById('form-update').style.display = 'block'

        document.getElementById('title-news-update').value = data.news[index].title
        document.getElementById('description-news-update').value = data.news[index].description
        document.getElementById('message-news-update').value = data.news[index].message
    })
}
document.getElementById('button-updatenews').addEventListener('click', () => {
    let title = document.getElementById('title-news-update').value
    let description = document.getElementById('description-news-update').value
    let message = document.getElementById('message-news-update').value

    $.post('https://lb-news/updateNews', JSON.stringify({ title: title, description: description, message: message, id: id_to_update }), function (updated) {
        if (updated) {
            $.post('https://lb-news/refresh', JSON.stringify({}), function (data) {
                document.getElementById('body').innerHTML = ""
                if (data.canEdit == false) {
                    document.getElementById('button-add').style.display = 'none'
                    document.getElementById('button-back').style.display = 'none'
                    document.getElementById('button-delete').style.display = 'none'
                    document.getElementById('button-edit').style.display = 'none'
                }
                if (data.news.length == 0) {
                    document.getElementById('body').innerHTML += `
                        <div class="card">
                            <p class="card-title">Pas de news en vue</p>
                            <p class="card-description">Revenez quand les reporter en posteront</p>
                            <p class="card-message"></p>
                        </div>
                    `
                } else {
                    for (let i = 0; i < data.news.length; i++) {
                        document.getElementById('body').innerHTML += `
                        <div class="card">
                            <p class="card-title">${data.news[i].title}</p>
                            <p class="card-description">${data.news[i].description}</p>
                            <p class="card-message">${data.news[i].message}</p>
                            <button class="button-delete" id="button-delete" onclick="Deletenews(${data.news[i].id})"><img src="assets/delete.png" class="icon"></button>
                            <button class="button-edit" id="button-edit" onclick="Editnews(${i}, ${data.news[i].id})"><img src="assets/edit.png" class="icon"></button>
                        </div>
                        `
                    }
                }
                document.getElementById('form').style.display = 'none'
                document.getElementById('form-update').style.display = 'none'
                document.getElementById('body').style.display = 'block'
            })
        }
    })
})
