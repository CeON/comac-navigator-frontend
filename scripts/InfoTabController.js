/**
 * @fileOverview InfoTabController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */
///<reference path="DataProvider.ts"/>
///<reference path="GraphController.ts"/>
///<reference path="NodeListsController.ts"/>
///<reference path="translations.ts"/>
var InfoTabController = (function () {
    function InfoTabController(dataProvider, graphController, nodeListsController) {
        this.dataProvider = dataProvider;
        this.graphController = graphController;
        this.nodeListsController = nodeListsController;
    }
    InfoTabController.prototype.showNodeInfo = function (node) {
        console.log("InfoTabController.showNodeInfo(" + node.id + ")");
        this.showName(node);
        this.showDetails(node.id);
    };
    InfoTabController.prototype.showName = function (node) {
        $('#infoTab')
            .empty()
            .append('<h4>' + node.name + '</h4>')
            .append("<div id='detailsLoadingMessage' class='loading_message'>" +
            "<p><img src='images/preloader.gif'/></p>" +
            "</div>");
        $('a[href="#infoTab"]')
            .tab('show');
    };
    InfoTabController.prototype.showDetails = function (nodeId) {
        this.dataProvider.getNodeDetails(nodeId, this.showDetailsCallback.bind(this));
    };
    InfoTabController.prototype.showAuthors = function (details) {
        var attribute = "Authors";
        if (attribute in details) {
            $('#infoTab')
                .append('<h5 data-i18n="header' + attribute + '"></h5>')
                .append('<div id="author-list" class="node-list"></div>');
            this.nodeListsController.refreshNodeList("#author-list", details[attribute]);
        }
    };
    InfoTabController.prototype.showDetailsCallback = function (error, details) {
        $('#detailsLoadingMessage').remove();
        if (error === null) {
            var possibleAttributes = [
                "Date",
                "Subject",
                /* "Title", */
                "ISSN",
                "DOI",
                "Abstract",
                "GivenName",
                "FamilyName",
                /* "name", */
                "Email",
                "Source",
                "References",
            ];
            function showOneDetail(attribute, details) {
                if (attribute in details) {
                    $('#infoTab')
                        .append('<h5 data-i18n="header' + attribute + '"></h5>')
                        .append('<p>' + details[attribute] + '</p>');
                }
            }
            possibleAttributes.forEach(function (attribute) { return showOneDetail(attribute, details); });
            this.showAuthors(details);
        }
        else {
            console.error("Failed to get node details. Got an error: " + error);
        }
        translations.translateAll();
    };
    return InfoTabController;
})();
//# sourceMappingURL=InfoTabController.js.map