/**
 * @fileOverview Helper functions for formatting nodes in search results, lists
 * of authors & other lists of nodes.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="lib/d3.d.ts"/>
///<reference path="GraphController.ts"/>

class NodeListsController {
    constructor(private graphController:GraphController) {
    }

    refreshNodeList(containerId:string, nodes):void {
        d3.select(containerId).selectAll("*").remove();
        console.log("Appending list of nodes to " + containerId);
        this.appendSearchResultEntries(containerId, nodes);
    }

    private appendSearchResultEntries(containerId:string, documents) {
        var oldData = d3.select(containerId).selectAll("div")
            .data();
        var newData = oldData.concat(documents);
        var diventer = d3.select(containerId).selectAll("div")
            .data(newData)
            .enter().append("div");
        diventer.attr("class", function (d) {
            return "search-result " + d.type
        });
        diventer
            .on("click", (function (d) {
                console.log("Clicked an entry to add: " + d.id);
                this.graphController.addFavouriteNodes([d.id]);
            }).bind(this));
        diventer
            .append("div")
            .html(function (d) {
                    return "<div class='title'>" +
                        "<span class='glyphicon glyphicon-arrow-right pull-right'></span>" +
                        d.name +
                        "</div>";
                }
            );

    };

}
