/**
 * @fileOverview TODO merge this file with SidebarController class.
 *
 * @author Aleksander Nowiński <a.nowinski@icm.edu.pl>
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

window.sidebar = {};

window.sidebar.init = function () {
    console.log("Loading button...");

    $("#search-button").click(function (event) {
        event.preventDefault();
        console.log("Button pressed");
        window.sidebar.doSearch();
    });
    //do the same for the search text field:
    $("#search-input").keyup(function (e) {
        if (e.keyCode === 13) {
            console.log("Enter pressed.");
            window.sidebar.doSearch();
        }
    });

};

window.sidebar.doSearch = function () {
    var query = d3.select("#search-input").property('value');
    //now clear results and append search div:

    d3.select("#search-results").selectAll("*").remove();
    //append searching text:
    $("#search-results").html("<div class='loading_message'>" +
        "<p data-i18n='searching'></p>" +
        "<p><img src='images/preloader.gif'/></p>" +
        "</div>");
    translations.translateAll();
    $("#search-follow").empty();
    //$("#search-help").empty();

    window.sidebar.dataProvider.search(query, function (error, data) {
        if (error) {
            $("#search-results").empty();
            $("#search-follow").html(
                "<div class='alert alert-danger'>" +
                "<span class='glyphicon glyphicon-remove'></span> &nbsp;" +
                "<span data-i18n='searchError'></span></div>");
            translations.translateAll();
            console.log(error);
        } else {
            window.sidebar.newSearchResults(data, query);
        }
    });
}


window.sidebar.newSearchResults = function (data, query) {
    window.sidebar.nodeListsController.refreshNodeList("#search-results", data.response.docs);
    window.sidebar.setHasMoreLabel(data.response.hasMoreResults);
}

window.sidebar.setHasMoreLabel = function (hasMore) {
    if (hasMore) {
        $("#search-follow").html(
            "<div class='alert alert-info'>" +
            "<span class='glyphicon glyphicon-info-sign'></span> &nbsp;" +
            "<span data-i18n='hasMoreResults'></span></div>");
    } else {
        $("#search-follow").html(
            "<div class='alert alert-success'>" +
            "<span class='glyphicon glyphicon-ok'></span> &nbsp;" +
            "<span data-i18n='noMoreResults'></span></div>");
    }
    translations.translateAll();
};


function drop(ev) {
    ev.preventDefault();
    console.log("Drop....");
//    var data = ev.dataTransfer.getData("text");
//    ev.target.appendChild(document.getElementById(data));
}
