fx_version "cerulean"
game "gta5"

title "LB Phone - App News"
description "A new apps for the LB Phone."
author "Lightning46"

client_script "client.lua"
server_scripts {
    '@oxmysql/lib/MySQL.lua',
    "server.lua"
}
files {
    "web/**/*"
}

ui_page "web/index.html"
