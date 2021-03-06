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
        documents.forEach(d =>
            d.isFav = this.graphController.containsFavouriteNode(d.id)
        );

        // DATA JOIN
        var entry = d3.select(containerId).selectAll("div")
            .data(documents);

        // ENTER
        entry.enter().append("div")
            .on("click", (function (d) {
                if (!d.isFav) {
                    console.log("Clicked an entry to add: " + d.id);
                    this.graphController.addFavouriteNode(d.id);
                } else {
                    console.log("Clicked an entry to remove: " + d.id);
                    this.graphController.removeFavouriteNode(d.id);
                }
                this.appendSearchResultEntries(containerId, documents);
            }).bind(this));

        // ENTER + UPDATE
        entry
            .attr("class", function (d) {
                if (d.isFav) {
                    return "search-result " + d.type + " favourite";
                } else {
                    return "search-result " + d.type + " not-favourite";
                }
            })
            .html((function (d) {
                    if (d.isFav) {
                        return "<span class='title'>" +
                            "<span class='glyphicon glyphicon-remove pull-right'></span>" +
                            d.name +
                            "</span>";
                    } else {
                        return "<span class='title'>" +
                            "<span class='glyphicon glyphicon-arrow-right pull-right'></span>" +
                            d.name +
                            "</span>";
                    }
                }).bind(this)
            );

        // EXIT
        // Remove old elements as needed.
        entry.exit().remove();
    }

}
