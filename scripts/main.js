/**
 * @fileOverview Application's main function.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

requirejs.config({
    paths: {
        "jquery": "lib/jquery",
        "jquery.bootstrap": "lib/bootstrap.min"
    },
    shim: {
        "jquery.bootstrap": {
            deps: ["jquery"]
        }
    }
});

require(
    [
        "LanguageSelectorController",
        "ClearGraphController",
        "config",
        "lib/d3",
        "jquery",
        "jquery.bootstrap",
        "util",
        "translations",
        "DataProvider",
        "GraphController",
        "GraphModel",
        "SidebarController",
        "InfoTabController",
        "sidebar"
    ],
    function () {
        //$('#aboutModal').modal('toggle')
        translations.translateAll();

        var dataProvider = new DataProvider(
            config.URLBase + "graph.json",
            config.URLBase + "search",
            config.URLBase + "graphById",
            config.URLBase + "details");
        var graphController = new GraphController(dataProvider, ["comac:pbn_9999"]);
        var sidebarController = new SidebarController(dataProvider, graphController);

        new LanguageSelectorController();
        new ClearGraphController(graphController);
        var infoTabController = new InfoTabController(dataProvider, graphController);

        window.sidebar.dataProvider = dataProvider;
        window.sidebar.graphController = graphController;
        window.sidebar.init();

        graphController.infoTabController = infoTabController;
    });

