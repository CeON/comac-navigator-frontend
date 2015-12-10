/**
 * @fileOverview Translations object.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */
///<reference path="lib/jquery.d.ts" />
var LANG_PL = "pl";
var LANG_EN = "en";
var TRANS_TARGET_ATTRIBUTE = "data-i18n";
/**
 * Translations.
 *
 * @namespace
 */
var translations;
(function (translations) {
    var selectedLanguage = LANG_EN;
    /**
     * Toggles the currently selected language between LANG_PL and LANG_EN.
     */
    function toggleLanguage() {
        if (selectedLanguage == LANG_PL) {
            changeLanguage(LANG_EN);
        }
        else {
            changeLanguage(LANG_PL);
        }
    }
    translations.toggleLanguage = toggleLanguage;
    /**
     * Change the currently selected language and update all elements in the
     * interface that have the TRANS_TARGET_ATTRIBUTE attribute.
     * @param {string} toLang change to this language
     */
    function changeLanguage(toLang) {
        selectedLanguage = toLang;
        translateAll();
    }
    translations.changeLanguage = changeLanguage;
    /**
     * Translate all elements in the interface that have the attribute
     * TRANS_TARGET_ATTRIBUTE.
     * @private
     */
    function translateAll() {
        $("[" + TRANS_TARGET_ATTRIBUTE + "]")
            .each(function () {
            translations.translate($(this));
        });
    }
    translations.translateAll = translateAll;
    /**
     * Translate the text inside the provided interface element using the
     * TRANS_TARGET_ATTRIBUTE attribute value as a key.
     * @param {jQuery} elem
     */
    function translate(elem) {
        var translationKey = elem.attr(TRANS_TARGET_ATTRIBUTE);
        var newText = translations.getText(translationKey);
        if (elem.is("[target-i18n]")) {
            var target = elem.attr("target-i18n");
            elem.attr(target, newText);
        }
        else {
            elem.html(newText);
        }
    }
    translations.translate = translate;
    /**
     * Get the translated string.
     * @param {string} key get string for this key
     * @returns {string} translated string
     */
    function getText(key) {
        return texts[key][selectedLanguage];
    }
    translations.getText = getText;
    var texts = {
        languageSelector: {
            en: "Po polsku",
            pl: "In english"
        },
        shareGraph: {
            en: "Share graph",
            pl: "Udostępnij graf"
        },
        copyToClipboard: {
            en: "Copy to clipboard",
            pl: "Skopiuj do schowka"
        },
        about: {
            en: "About",
            pl: "O nas"
        },
        clearGraph: {
            en: "Clear graph",
            pl: "Wyczyść graf"
        },
        cancel: {
            en: "Cancel",
            pl: "Anuluj"
        },
        searchPlaceholder: {
            en: "Author/Paper/Dataset ...",
            pl: "Autor/Praca/Dane ..."
        },
        searchTab: {
            en: "Search",
            pl: "Szukaj"
        },
        infoTab: {
            en: "Info",
            pl: "Info"
        },
        helpTab: {
            en: "Help",
            pl: "Pomoc"
        },
        moreTab: {
            en: "More",
            pl: "Więcej"
        },
        searchButton: {
            en: "Search",
            pl: "Szukaj"
        },
        searching: {
            en: "Searching...",
            pl: "Szukam..."
        },
        searchError: {
            en: "Unable to load data, server error.",
            pl: "Błąd serwera, nie można było załadować danych."
        },
        hasMoreResults: {
            en: "There are more results. Try to narrow query.",
            pl: "Jest więcej wyników. Spróbuj zawęzić zapytanie."
        },
        noMoreResults: {
            en: "No more results.",
            pl: "Nie ma więcej wyników."
        },
        sidebarHelp: {
            en: "To add the desired result to the graph, please drag and drop it on a canvas on the right.",
            pl: "Aby dodać żądany wynik do grafu, przeciągnij go na obszar pracy po prawej."
        },
        publishedIn: {
            en: "Published in:",
            pl: "Opublikowano w:"
        },
        abstract: {
            en: "Abstract:",
            pl: "Abstrakt:"
        },
        authors: {
            en: "Authors:",
            pl: "Autorzy:"
        },
        helpTabContent: {
            en: "\n                <h5>Browsing graph</h5>\n                <p>\n                    <em>Double click on a node</em> to expand it, i.e.\n                    to add all of its neighobours.\n                </p>\n                <p>\n                    <em>Single click on a node</em> to view additional\n                    informations about a node.\n                </p>\n                <h5>Node types:</h5>\n                <div class=\"node-list\">\n                    <div class=\"search-result journal\">Journal</div>\n                    <div class=\"search-result dataset\">Dataset</div>\n                    <div class=\"search-result project\">Project</div>\n                    <div class=\"search-result paper\">Paper</div>\n                    <div class=\"search-result institution\">Institution</div>\n                    <div class=\"search-result author\">Author</div>\n                    <div class=\"search-result blog\">Blog</div>\n                </div>\n            ",
            pl: "\n                <h5>Przegl\u0105danie grafu</h5>\n                <p>\n                    <em>Kliknij podw\u00F3jnie na w\u0119z\u0119\u0142</em>, aby go rozwin\u0105\u0107, tzn.\n                    doda\u0107 wszystkich jego s\u0105siad\u00F3w do grafu.\n                </p>\n                <p>\n                    <em>Kliknij pojedynczo na w\u0119ze\u0142</em>, aby uzyska\u0107 wi\u0119cej\n                    informacji o w\u0119\u017Ale.\n                </p>\n                <h5>Typy w\u0119z\u0142\u00F3w:</h5>\n                <div class=\"node-list\">\n                    <div class=\"search-result journal\">Publikacja</div>\n                    <div class=\"search-result dataset\">Zbi\u00F3r danych</div>\n                    <div class=\"search-result project\">Projekt</div>\n                    <div class=\"search-result paper\">Publikacja</div>\n                    <div class=\"search-result institution\">Organizacja</div>\n                    <div class=\"search-result author\">Autor</div>\n                    <div class=\"search-result blog\">Blog</div>\n                </div>\n            "
        }
    };
})(translations || (translations = {}));
//# sourceMappingURL=translations.js.map