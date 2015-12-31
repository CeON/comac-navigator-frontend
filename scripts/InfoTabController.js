/**
 * @fileOverview InfoTabController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */
///<reference path="DataProvider.ts"/>
///<reference path="GraphController.ts"/>
///<reference path="translations.ts"/>
var InfoTabController = (function () {
    function InfoTabController(dataProvider, graphController) {
        this.dataProvider = dataProvider;
        this.graphController = graphController;
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
        this.dataProvider.getNodeDetails(nodeId, this.showDetailsCallback);
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
                /* "Name", */
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
        }
        else {
            console.error("Failed to get node details. Got an error: " + error);
        }
        translations.translateAll();
    };
    return InfoTabController;
})();
//# sourceMappingURL=InfoTabController.js.map