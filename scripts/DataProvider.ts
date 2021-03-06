/**
 * @fileOverview DataProvider class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="lib/d3.d.ts" />

const EMPTY_GRAPH_RESULT = {"graphId": null, "nodes": [], "links": []};

/**
 * Creates an instance of DataProvider.
 *
 * @constructor
 * @this {DataProvider}
 * @param {string} graphUri
 * @param {string} searchUri
 * @param {string} graphByIdUri
 */
class DataProvider {
    private graph:string;
    private searchAddress:string;
    private graphById:string;
    private details:string;

    constructor(graphUri, searchUri, graphByIdUri, detailsUri) {
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
    getGraphByFavouriteIds(favouriteIds:string[], callback) {
        if (favouriteIds.length > 0) {
            var query:string = favouriteIds.sort().join("|");
            DataProvider.queryJSON(this.graph, query, callback);
        } else {
            callback(null, EMPTY_GRAPH_RESULT);
        }

    }

    /**
     * Gets a graph by its id.
     * @param {string} graphId
     * @param {DataProvider~graphCallback} callback
     */
    getGraphById(graphId:string, callback) {
        if (graphId) {
            DataProvider.queryJSON(this.graphById, graphId, callback);
        }
        else {
            callback(null, EMPTY_GRAPH_RESULT);
        }
    }

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
    search(textQuery:string, callback) {
        console.log("Search invoked, query=" + textQuery);
        DataProvider.queryJSON(this.searchAddress, textQuery, callback);
    }

    /**
     * Gets node details (publish date, abstract, etc.).
     * @param {string} nodeId
     * @param callback
     */
    getNodeDetails(nodeId:string, callback) {
        DataProvider.queryJSON(this.details, nodeId, callback);
    }

    static queryJSON(fileName:string, query:string, callback) {
        d3.json(fileName + "?query=" + encodeURIComponent(query), function (error, data) {
            if (error !== null) {
                // propagate error
                callback(error, null);
            } else {
                var result = data;

                if (result === undefined) {
                    // response undefined
                    callback("Response for such list of node ids is undefined.", null);
                } else {
                    // no error
                    callback(error, result);
                }
            }
        });
    }
}

