Config = {}
Config.lang = "en" -- "en" or "fr"
Config.locales = {
    ["en"] = {
        FORM_TITLE_ADD = "Add News",
        FORM_TITLE_UPDATE = "Update News",

        PLACEHOLDERS = {
            ADD = {
                TITLE = "Title of the news",
                DESCRIPTION = "Description of the news",
                MESSAGE = "Message of the news",
                IMAGE = "Image"
            },
            UPDATE = {
                TITLE = "Title of the news",
                DESCRIPTION = "Description of the news",
                MESSAGE = "Message of the news",
                IMAGE = "Image"
            }
        },

        BUTTONS = {
            ADD = "Add",
            UPDATE = "Update"
        },
        APP = {
            TITLE = "News" -- custom app title, exemple : 'SERVER NEWS' or 'LS NEWS'
        },
        THEME = {
            APP_BACKGROUND = "black",     -- white, darkgray, black
            HEADER_BACKGROUND = "purple", -- blue, cyan, red, purple, green, yellow, white, beige, pink, black, gray, lightgray, darkgray
            ADD_BACKGROUND = "purple",    -- green, lightgreen
            UPDATE_BACKGROUND = "cyan",   -- blue, cyan, darkblue
            FORMINP_BACKGROUND = "white", -- blue, cyan, darkblue

            APP_COLOR = "white",          -- white, black / according to your header color
            HEADER_COLOR = "white",       -- white, black / according to your header color
            ADD_COLOR = "white",          -- white, black / according to your button color
            UPDATE_COLOR = "black",       -- white, black / according to your button color
            FORMINP_COLOR = "black"       -- white, black / according to your button color
        },
        UPLOAD = {
            SUCCESS = "Image successfully uploaded"
        }
    },
    ["fr"] = {
        FORM_TITLE_ADD = "Ajout de News",
        FORM_TITLE_UPDATE = "Modification de News",

        PLACEHOLDERS = {
            ADD = {
                TITLE = "Titre de la news",
                DESCRIPTION = "Description de la news",
                MESSAGE = "Message de la news",
                IMAGE = "Image"
            },
            UPDATE = {
                TITLE = "Titre de la news",
                DESCRIPTION = "Description de la news",
                MESSAGE = "Message de la news",
                IMAGE = "Image"
            }
        },

        BUTTONS = {
            ADD = "Ajouter",
            UPDATE = "Enregistrer"
        },
        APP = {
            TITLE = "News" -- Titre d'application custom, exemple : 'SERVER NEWS' ou 'LS NEWS'
        },
        THEME = {
            APP_BACKGROUND = "black",     -- white, darkgray, black
            HEADER_BACKGROUND = "purple", -- blue, cyan, red, purple, green, yellow, white, beige, pink, black, gray, lightgray, darkgray
            ADD_BACKGROUND = "purple",    -- green, lightgreen
            UPDATE_BACKGROUND = "cyan",   -- blue, cyan, darkblue
            FORMINP_BACKGROUND = "white", -- blue, cyan, darkblue

            APP_COLOR = "white",          -- white, black / according to your header color
            HEADER_COLOR = "white",       -- white, black / according to your header color
            ADD_COLOR = "white",          -- white, black / according to your button color
            UPDATE_COLOR = "black",       -- white, black / according to your button color
            FORMINP_COLOR = "black"       -- white, black / according to your button color
        },
        UPLOAD = {
            SUCCESS = "Image correctement uploadée"
        }
    }
}
Config.APIKEYS = {
    Photos = "YOUR FIVEMANAGE APIKEY",
    --Videos = "", NOT USED NOW - I search a method to record 1 min length videos and upload and load with player actions
    --Audios = "", NOT USED NOW - I search a method to record 1 min length audios and upload and load with player actions
}
