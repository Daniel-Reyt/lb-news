ESX = exports['es_extended']:getSharedObject()
ESX.RegisterServerCallback('addnews', function(source, cb, news)
    if news.image_url == nil then
        news.image_url = "null"
    end
    local add = MySQL.query.await('INSERT INTO `ulife_news` (`title`, `description`, `message`, `image_url`) VALUES ("' ..
        news.title .. '", "' .. news.description .. '", "' .. news.message .. '", "' .. news.image_url .. '")')
    cb(add)
end)
ESX.RegisterServerCallback('getnews', function(source, cb, news)
    local news = MySQL.query.await('SELECT * FROM `ulife_news` ORDER BY `id` DESC')
    cb(news)
end)
ESX.RegisterServerCallback('deleteNews', function(source, cb, newsid)
    local news = MySQL.query.await('DELETE FROM `ulife_news` WHERE `id`=' .. newsid)
    cb(news)
end)
ESX.RegisterServerCallback('updateNews', function(source, cb, news)
    local news = MySQL.query.await('UPDATE `ulife_news` SET `title`="' ..
        news.title ..
        '", `description`="' .. news.description .. '", `message`="' .. news.message .. '" WHERE `id`=' .. news.id)
    cb(news)
end)
