/**
 * @fileOverview InfoTabController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="DataProvider.ts"/>
///<reference path="GraphController.ts"/>
///<reference path="NodeListsController.ts"/>
///<reference path="translations.ts"/>


class InfoTabController {
    constructor(private dataProvider:DataProvider,
                private graphController:GraphController,
                private nodeListsController:NodeListsController) {
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
        this.dataProvider.getNodeDetails(nodeId, this.showDetailsCallback.bind(this));
    }

    private showAuthors(details):void {
        var authorsAttribute = "Authors";
        if (authorsAttribute in details) {
            var authorList = details[authorsAttribute];
            if (authorList.length > 0) {
                $('#infoTab')
                    .append('<h5 data-i18n="header' + authorsAttribute + '"></h5>')
                    .append('<div id="author-list" class="node-list"></div>')
                ;
                this.nodeListsController.refreshNodeList("#author-list", authorList);
            }
        }
    }

    private showSource(details):void {
        function prepareSourceList(source:any):any {
            var titleAttribute = "Title"
            if (titleAttribute in source) {
                source.name = source[titleAttribute];
                return [source];
            } else {
                return [];
            }
        }

        var sourceAttribute = "Source";
        if (sourceAttribute in details) {
            var sourceList = prepareSourceList(details[sourceAttribute]);
            if (sourceList.length > 0) {
                $('#infoTab')
                    .append('<h5 data-i18n="header' + sourceAttribute + '"></h5>')
                    .append('<div id="source-list" class="node-list"></div>')
                ;
                this.nodeListsController.refreshNodeList("#source-list", sourceList);
            }
        }
    }

    private showDetailsCallback(error, details) {
        $('#detailsLoadingMessage').remove();
        if (error === null) {

            var possibleAttributes:string[] =
                [
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
                    /* "Source", */
                    "References",
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
            this.showSource(details);
            this.showAuthors(details);
        } else {
            console.error(
                "Failed to get node details. Got an error: " + error);
        }
        translations.translateAll();
    }

}
