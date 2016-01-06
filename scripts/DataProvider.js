/**
 * @fileOverview DataProvider class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */
///<reference path="lib/d3.d.ts" />
var EMPTY_GRAPH_RESULT = { "graphId": null, "nodes": [], "links": [] };
/**
 * Creates an instance of DataProvider.
 *
 * @constructor
 * @this {DataProvider}
 * @param {string} graphUri
 * @param {string} searchUri
 * @param {string} graphByIdUri
 */
var DataProvider = (function () {
    function DataProvider(graphUri, searchUri, graphByIdUri, detailsUri) {
        this.graph = graphUri;
        this.searchAddress = searchUri;
        this.graphById = graphByIdUri;
        this.details = detailsUri;
    }
    /**
     * Provided graph consists of:
     * <ul>
     *     <li> favourite nodes,
     *     <li> neighbours of favourite nodes,
     *     <li> links starting / ending on favourite nodes.
     * </ul>
     * @callback DataProvider~graphCallback
     * @param {string} error may be null if there was no error
     * @param graphJSON
     */
    /**
     * Gets a graph which is constructed starting from a given list of
     * favourite nodes ids.
     * @param {string[]} favouriteIds nodes to start the query from
     * @param {DataProvider~graphCallback} callback continuation
     */
    DataProvider.prototype.getGraphByFavouriteIds = function (favouriteIds, callback) {
        if (favouriteIds.length > 0) {
            var query = favouriteIds.sort().join("|");
            DataProvider.queryJSON(this.graph, query, callback);
        }
        else {
            callback(null, EMPTY_GRAPH_RESULT);
        }
    };
    /**
     * Gets a graph by its id.
     * @param {string} graphId
     * @param {DataProvider~graphCallback} callback
     */
    DataProvider.prototype.getGraphById = function (graphId, callback) {
        if (graphId) {
            DataProvider.queryJSON(this.graphById, graphId, callback);
        }
        else {
            callback(null, EMPTY_GRAPH_RESULT);
        }
    };
    /**
     * @callback DataProvider~searchCallback
     * @param {string} error may be null if there was no error
     * @param searchResultsJSON
     */
    /**
     * Gets search results.
     * @param {string} textQuery
     * @param {DataProvider~searchCallback} callback
     */
    DataProvider.prototype.search = function (textQuery, callback) {
        console.log("Search invoked, query=" + textQuery);
        DataProvider.queryJSON(this.searchAddress, textQuery, callback);
    };
    /**
     * Gets node details (publish date, abstract, etc.).
     * @param {string} nodeId
     * @param callback
     */
    DataProvider.prototype.getNodeDetails = function (nodeId, callback) {
        DataProvider.queryJSON(this.details, nodeId, callback);
    };
    DataProvider.queryJSON = function (fileName, query, callback) {
        d3.json(fileName + "?query=" + encodeURIComponent(query), function (error, data) {
            if (error !== null) {
                // propagate error
                callback(error, null);
            }
            else {
                var result = data;
                if (result === undefined) {
                    // response undefined
                    callback("Response for such list of node ids is undefined.", null);
                }
                else {
                    // no error
                    callback(error, result);
                }
            }
        });
    };
    return DataProvider;
})();
//# sourceMappingURL=DataProvider.js.map