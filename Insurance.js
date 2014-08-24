/*
 * JS for Insurance generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '848f1cde-2c6d-4e96-a5c1-9c7f4cbd0ad0';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

// Deprecated


function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Insurance",
    "location": "Insurance.html"
}];

Insurance_js = function(runBeforeShow) {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilelist_2': 'Insurance_mobilelist_2',
        'mobilelistitem_3': 'Insurance_mobilelistitem_3',
        'mobilelistitembutton_4': 'Insurance_mobilelistitembutton_4'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    if (navigator.userAgent.indexOf("IEMobile") != -1) {
        //Fix for jQuery Mobile's footer in Cordova webview on WP8 devices
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
        document.createTextNode("@media screen and (orientation: portrait){@-ms-viewport {width: 320px; height: 534px;user-zoom: fixed;zoom: 1;}}" + "@media screen and (orientation:landscape){@-ms-viewport{width:480px;user-zoom:fixed;zoom:1;}}"));
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }

    Apperyio.CurrentScreen = 'Insurance';

    /*
     * Nonvisual components
     */
    var datasources = [];

    restservice1 = new Apperyio.DataSource(Insurance_db_Policy_list_service, {
        'onBeforeSend': function(jqXHR) {

        },
        'onComplete': function(jqXHR, textStatus) {

            Apperyio.refreshScreenFormElements("Insurance");
        },
        'onSuccess': function(data) {},
        'onError': function(jqXHR, textStatus, errorThrown) {},
        'responseMapping': [{
            'PATH': ['$'],
            'ID': 'mobilelistitem_3',
            'SET': [{
                'PATH': ['Name'],
                'ID': 'mobilelistitem_3',
                'ATTR': '@',
                'SUBSELECTOR': 'h3'
            }]
        }],
        'requestMapping': [{
            'PATH': ['X-Appery-Database-Id'],
            'TYPE': 'STRING',
            'HEADER': true,
            'ATTR': '{database_id}'
        }]
    });

    datasources.push(restservice1);

    /*
     * Events and handlers
     */

    // Before Show
    var Insurance_beforeshow = function() {
            Apperyio.CurrentScreen = "Insurance";
            for (var idx = 0; idx < datasources.length; idx++) {
                datasources[idx].__setupDisplay();
            }
        };

    // On Load
    var Insurance_onLoad = function() {
            Insurance_elementsExtraJS();

            // TODO fire device events only if necessary (with JS logic)
            Insurance_deviceEvents();
            Insurance_windowEvents();
            Insurance_elementsEvents();
        };

    // screen window events
    var Insurance_windowEvents = function() {

            $('#Insurance').bind('pageshow orientationchange', function() {
                var _page = this;
                adjustContentHeightWithPadding(_page);
            });
            $('#Insurance').on({
                pageshow: function() {
                    try {
                        restservice1.execute({})
                    } catch (ex) {
                        console.log(ex.name + '  ' + ex.message);
                        hideSpinner();
                    };
                },
            });

        };

    // device events
    var Insurance_deviceEvents = function() {
            document.addEventListener("deviceready", function() {

            });
        };

    // screen elements extra js
    var Insurance_elementsExtraJS = function() {
            // screen (Insurance) extra code

            /* mobilelist_2 */

            listView = $("#Insurance_mobilelist_2");
            theme = listView.attr("data-theme");
            if (typeof theme !== 'undefined') {
                var themeClass = "ui-btn-up-" + theme;
                listItem = $("#Insurance_mobilelist_2 .ui-li-static");
                $.each(listItem, function(index, value) {
                    $(this).addClass(themeClass);
                });
            }

            /* mobilelistitem_3 */

        };

    // screen elements handler
    var Insurance_elementsEvents = function() {
            $(document).on("click", "a :input,a a,a fieldset label", function(event) {
                event.stopPropagation();
            });

        };

    $(document).off("pagebeforeshow", "#Insurance").on("pagebeforeshow", "#Insurance", function(event, ui) {
        Insurance_beforeshow();
    });

    if (runBeforeShow) {
        Insurance_beforeshow();
    } else {
        Insurance_onLoad();
    }
};

$(document).off("pagecreate", "#Insurance").on("pagecreate", "#Insurance", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Insurance_js();
});