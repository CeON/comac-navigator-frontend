/**
 * @fileOverview ClearGraphController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */
///<reference path="lib/jquery.d.ts" />
/**
 * Creates an instance of ClearGraphController.
 *
 * @param {GraphController} graphController
 * @constructor
 * @this {ClearGraphController}
 */
var ClearGraphController = (function () {
    function ClearGraphController(graphController) {
        $("#clearGraphConfirm").click(function () {
            graphController.clearGraph();
            console.log("Clear graph clicked.");
        });
    }
    return ClearGraphController;
})();
//# sourceMappingURL=ClearGraphController.js.map