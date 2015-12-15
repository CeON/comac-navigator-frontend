/**
 * @fileOverview Utility functions object.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

/**
 * Utility functions.
 *
 * @namespace
 */
namespace util {
    /**
     * Gets query string value for a given key.
     *
     * @param {string} key use this key to fetch a query string value
     * @returns {string} query string value for a given key
     */
    export function getQueryStringValue(key) {
        var value = null;
        var url = window.location.search.substr(1);
        var keyValues = url.split(/[\?&]+/);
        for (var i = 0; i < keyValues.length; i++) {
            var keyValue = keyValues[i].split("=");
            if (keyValue[0] == key) {
                value = keyValue[1];
            }
        }
        console.log("value is " + value)
        return value;
    }
}

