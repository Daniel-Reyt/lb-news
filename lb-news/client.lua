ESX = exports['es_extended']:getSharedObject()
local identifier = "lb-news-app"
CreateThread(function()
    while GetResourceState("lb-phone") ~= "started" do
        Wait(500)
    end

    local function AddApp()
        local added, errorMessage = exports["lb-phone"]:AddCustomApp({
            identifier = identifier,
            name = "News",
            description = "News of the city",
            developer = "Lightning46",
            defaultApp = true,
            size = 59812,
            ui = GetCurrentResourceName() .. "/web/index.html",
            icon = "https://cfx-nui-" .. GetCurrentResourceName() .. "/web/assets/news.png"
        })

        if not added then
            print("Could not add app:", errorMessage)
        end
    end

    AddApp()

    AddEventHandler("onResourceStart", function(resource)
        if resource == "lb-phone" then
            AddApp()
        end
    end)
end)
RegisterNUICallback('getDatas', function(data, cb)
    local xPlayer = ESX.GetPlayerData()
    ESX.TriggerServerCallback('getnews', function(news)
        cb({ canEdit = (xPlayer.job.name == 'news'), news = news })
    end)
end)
RegisterNUICallback('refresh', function(data, cb)
    local xPlayer = ESX.GetPlayerData()
    ESX.TriggerServerCallback('getnews', function(news)
        cb({ canEdit = (xPlayer.job.name == 'news'), news = news })
    end)
end)
RegisterNUICallback('addNews', function(data, cb)
    ESX.TriggerServerCallback('addnews', function(added)
        if added.affectedRows > 0 then
            cb(true)
        else
            cb(false)
        end
    end, data)
end)
RegisterNUICallback('deleteNews', function(data, cb)
    ESX.TriggerServerCallback('deleteNews', function(deleted)
        if deleted.affectedRows > 0 then
            cb(true)
        else
            cb(false)
        end
    end, data["id"])
end)
RegisterNUICallback('updateNews', function(data, cb)
    ESX.TriggerServerCallback('updateNews', function(updated)
        if updated.affectedRows > 0 then
            cb(true)
        else
            cb(false)
        end
    end, data)
end)
