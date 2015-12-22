/**
 * @fileOverview InfoTabController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="DataProvider.ts"/>
///<reference path="GraphController.ts"/>
///<reference path="translations.ts"/>


class InfoTabController {
    constructor(private dataProvider:DataProvider,
                private graphController:GraphController) {
    }

    showNodeInfo(node):void {
        console.log("InfoTabController.showNodeInfo(" + node.id + ")");
        this.showName(node);
        this.showDetails(node.id);
    }

    private showName(node):void {
        $('#infoTab')
            .empty()
            .append('<h4>' + node.name + '</h4>')
            .append("<div id='detailsLoadingMessage' class='loading_message'>" +
                "<p><img src='images/preloader.gif'/></p>" +
                "</div>")
        ;
        $('a[href="#infoTab"]')
            .tab('show');
    }

    private showDetails(nodeId:string):void {
        this.dataProvider.getNodeDetails(nodeId, this.showDetailsCallback);
    }

    private showDetailsCallback(error, details) {
        $('#detailsLoadingMessage').remove();
        if (error === null) {
            var possibleAttributes:string[] =
                [
                    "Date",
                    /* "Title", */
                    "ISSN",
                    "DOI",
                    "Abstract",
                    "GivenName",
                    "FamilyName",
                    /* "Name", */
                    "Email",
                ];

            function showOneDetail(attribute:string, details):void {
                if (attribute in details) {
                    $('#infoTab')
                        .append('<h5 data-i18n="header' + attribute + '"></h5>')
                        .append('<p>' + details[attribute] + '</p>')
                    ;
                }
            }

            possibleAttributes.forEach(
                attribute => showOneDetail(attribute, details)
            );
        } else {
            console.error(
                "Failed to get node details. Got an error: " + error);
        }
        translations.translateAll();
    }

}
