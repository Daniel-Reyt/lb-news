document.getElementById('button-back').addEventListener('click', () => {
    document.getElementById('form').style.display = 'none'
    document.getElementById('body').style.display = 'block'
})
document.getElementById('button-add').addEventListener('click', () => {
    document.getElementById('body').style.display = 'none'
    document.getElementById('form').style.display = 'block'
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