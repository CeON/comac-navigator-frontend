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
        headerDate: {
            en: "Date published:",
            pl: "Data publikacji:"
        },
        headerISSN: {
            en: "ISSN:",
            pl: "ISSN:"
        },
        headerDOI: {
            en: "DOI:",
            pl: "DOI:"
        },
        headerAbstract: {
            en: "Abstract:",
            pl: "Abstrakt:"
        },
        headerGivenName: {
            en: "Given names:",
            pl: "Imiona:"
        },
        headerFamilyName: {
            en: "Family name:",
            pl: "Nazwisko:"
        },
        headerEmail: {
            en: "Email:",
            pl: "Email:"
        },
        headerPublishedIn: {
            en: "Published in:",
            pl: "Opublikowano w:"
        },
        headerAuthors: {
            en: "Authors:",
            pl: "Autorzy:"
        },
        infoTabContent: {
            en: "\n                <h5>Node details</h5>\n                <p>\n                    <em>Single click on a node</em> to view additional\n                    informations about a node in this tab.\n                </p>\n            ",
            pl: "\n                <h5>Szczeg\u00F3\u0142y w\u0119z\u0142a</h5>\n                <p>\n                    <em>Kliknij pojedynczo na w\u0119ze\u0142</em>, aby wy\u015Bwietli\u0107 w tej\n                    zak\u0142adce wi\u0119cej informacji o w\u0119\u017Ale.\n                </p>\n            "
        },
        helpTabContent: {
            en: "\n                <h5>Browsing graph</h5>\n                <p>\n                    <em>Double click on a node</em> to expand it, i.e.\n                    to add all of its neighobours.\n                </p>\n                <p>\n                    <em>Single click on a node</em> to view additional\n                    informations about a node.\n                </p>\n                <h5>Node types:</h5>\n                <div class=\"node-list\">\n                    <div class=\"search-result journal\">Journal</div>\n                    <div class=\"search-result dataset\">Dataset</div>\n                    <div class=\"search-result project\">Project</div>\n                    <div class=\"search-result paper\">Paper</div>\n                    <div class=\"search-result organization\">Organisation</div>\n                    <div class=\"search-result author\">Author</div>\n                    <div class=\"search-result blog\">Blog</div>\n                </div>\n            ",
            pl: "\n                <h5>Przegl\u0105danie grafu</h5>\n                <p>\n                    <em>Kliknij podw\u00F3jnie na w\u0119z\u0119\u0142</em>, aby go rozwin\u0105\u0107, tzn.\n                    doda\u0107 wszystkich jego s\u0105siad\u00F3w do grafu.\n                </p>\n                <p>\n                    <em>Kliknij pojedynczo na w\u0119ze\u0142</em>, aby uzyska\u0107 wi\u0119cej\n                    informacji o w\u0119\u017Ale.\n                </p>\n                <h5>Typy w\u0119z\u0142\u00F3w:</h5>\n                <div class=\"node-list\">\n                    <div class=\"search-result journal\">Publikacja</div>\n                    <div class=\"search-result dataset\">Zbi\u00F3r danych</div>\n                    <div class=\"search-result project\">Projekt</div>\n                    <div class=\"search-result paper\">Publikacja</div>\n                    <div class=\"search-result organization\">Organizacja</div>\n                    <div class=\"search-result author\">Autor</div>\n                    <div class=\"search-result blog\">Blog</div>\n                </div>\n            "
        },
        aboutModalContent: {
            en: "\n            <p>\n            COMAC Navigator provides a friendly interface for exploring the academic world.  We brought together and unified several data sources describing people, publications, projects and data sets in order to draw an interactive map of academia.  The map is a graph-like structure with nodes representing entities (people, publications, journals) and links representing relations between the entities.\n            </p>\n\n            <p>\nWe are strong supporters of open science, which is why we provide open access both to the web application and to the underlying data set: the source code is available on GitHub, while data are available here as a set of RDF triples.\n            </p>\n\n            <p>\nThis service was created by a team of ICM UW employees, listed here in pseudorandom order (lexicographically by MD5 hashes of names): \u0141ukasz Bolikowski, Piotr Dendek, Aleksander Nowi\u0144ski, Jakub Jurkiewicz, Micha\u0142 Oniszczuk, Micha\u0142 Politowski and Artur Czeczko.\n            </p>\n\n            <p>\nCOMAC Navigator is one of the deliverables of the OCEAN project, funded by the Innovative Economy Operational Programme 2007\u20132013, measure 2.3.\n            </p>\n\n            <p>\n            </p>\n\n\n\n\n                <p><a href=\"http://adalab.icm.edu.pl/\">ADA Lab</a></p>\n\n                <p><a href=\"http://icm.edu.pl/\">ICM</a></p>\n                <h4>Licenses & more</h4>\n                <div class=\"well\">\n                <div id=\"aboutLegal\"><p>\n                    No.\n                    \u0179r\u00F3d\u0142o danych\n                    Wymagania\n                    Jak mo\u017Cna zrealizowa\u0107?\n                    Jak zrealizowano?\n                    Data realizacji\n                    Czy zrealizowane?\n                    1.1\n                    MEDLINE\n                    clear description of how the product/service was\n                    derived,\n                    indicating the currency and the source database.\n\n                    Trademark symbols must properly be used when referring to the NLM databases, system and products.\n                    A product/service using downloaded data must be named in a fashion that clearly distinguishes it from NLM-produced databases accessible at NLM.\n\n                    Opis tego czym jest COMAC\n\n\n\n                    NIE\n                    1.2\n                    MEDLINE\n                    At least annually,\n                    the MEDLINE-derived data should be updated when a new edition of the product is released.\n                    users should be informed that the MEDLINE-derived data may change.\n\n                    B\u0119dziemy pisali, jaki by\u0142 termin ostatniej aktualizacji poszczeg\u00F3lnych \u017Ar\u00F3de\u0142 danych (na stronie comac.ceon.pl, b\u0105d\u017A dedykowanej stronie ADA LAB\n\n\n\n\n                    NIE\n                    1.3\n                    MEDLINE\n                    Because NLM goes to considerable effort to assign MeSH terms, it prefers that these be retained as assigned by the indexers.\n                    Wymaganie nie musi by\u0107 uwzgl\u0119dnione\n\n\n\n\n                    NIE\n                    1.4\n                    MEDLINE\n                    The NLM record (or portion thereof) in the product/service must be labeled so as to identify NLM as the source, except for data derived from LocatorPlus\n                    Wymagania nie da si\u0119 uwzgl\u0119dni\u0107 w wygodny spos\u00F3b\n\n\n\n\n                    NIE\n                    2.1\n                    PMC\n                    nie widze ochrony: http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/\n\n\n\n\n\n\n                    NIE\n                    3.1\n                    OpenAIRE\n                    @Bolo @Mkobos wiedz\u0105\n                    https://guidelines.readthedocs.org/en/latest/\n\n\n\n\n                    NIE\n                    4.1\n                    DataCite\n                    All the content is licensed under a Creative Commons Attribution 4.0 International License.\n\n\n\n\n\n\n                    NIE\n                    5.1\n                    ORCID\n                    Spread the Word: Please give attribution to ORCID as the source of the Public Data File and link back to this page (https://orcid.org/content/orcid-public-data-file) where technologically feasible, to facilitate access for others.\n\n\n\n\n\n\n\n\n                    NIE\n                    6.1\n                    CrossRef\n                    Nic nie chc\u0105 http://www.crossref.org/03libraries/33library_agreement.html. Na ko\u0144cu licencji  udzielaj\u0105 pozwolenia na u\u017Cycie ich znaku towarowego w podzi\u0119kowaniach ( podaniu \u017Ar\u00F3d\u0142a)\n\n\n\n\n\n\n                    TAK\n                    7.1\n                    arXiv\n\n\n\n\n\n\n\n\n                    NIE\n                    8.1\n                    DOAJ\n                    This work is licensed under CC BY-SA\n\n\n\n\n\n\n                    NIE\n                    9.1\n                    blogi\n                    Nie wiadomo : Jak wpisa\u0107 crawl sieci?\n\n\n\n\n\n\n                    NIE\n                </p></div>\n                <div>\n            ",
            pl: "\n                <p><a href=\"http://adalab.icm.edu.pl/\">ADA Lab</a></p>\n\n                <p><a href=\"http://icm.edu.pl/\">ICM</a></p>\n                <h4>Ograniczenia</h4>\n\n                <p>\u2026</p>\n            "
        }
    };
})(translations || (translations = {}));
//# sourceMappingURL=translations.js.map