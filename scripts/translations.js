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
            pl: "Autor/Publikacja/Dane ..."
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
        headerSubject: {
            en: "Subject:",
            pl: "Temat:"
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
        headerSource: {
            en: "Source:",
            pl: "Źródło:"
        },
        headerReferences: {
            en: "References:",
            pl: "Referencje:"
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
            pl: "\n                <h5>Przegl\u0105danie grafu</h5>\n                <p>\n                    <em>Kliknij podw\u00F3jnie na w\u0119z\u0119\u0142</em>, aby go rozwin\u0105\u0107, tzn.\n                    doda\u0107 wszystkich jego s\u0105siad\u00F3w do grafu.\n                </p>\n                <p>\n                    <em>Kliknij pojedynczo na w\u0119ze\u0142</em>, aby uzyska\u0107 wi\u0119cej\n                    informacji o w\u0119\u017Ale.\n                </p>\n                <h5>Typy w\u0119z\u0142\u00F3w:</h5>\n                <div class=\"node-list\">\n                    <div class=\"search-result journal\">Czasopismo</div>\n                    <div class=\"search-result dataset\">Zbi\u00F3r danych</div>\n                    <div class=\"search-result project\">Projekt</div>\n                    <div class=\"search-result paper\">Publikacja</div>\n                    <div class=\"search-result organization\">Organizacja</div>\n                    <div class=\"search-result author\">Autor</div>\n                    <div class=\"search-result blog\">Blog</div>\n                </div>\n            "
        },
        aboutModalContent: {
            en: "\n                <h2 class=\"lead-lg\">\n                    COMAC&nbsp;Navigator provides a&nbsp;friendly interface for&nbsp;exploring\n                    the&nbsp;academic&nbsp;world.\n                </h2>\n                <p class=\"lead\">\n                    We brought together and unified several\n                    data sources describing people, publications, projects and\n                    datasets in order to draw an interactive map of academia.\n                    The map is a graph-like structure with nodes representing\n                    entities (people, publications, journals) and links\n                    representing relations between the entities.\n                </p>\n\n                <h4>Open Science</h4>\n                <p>\n                    We are strong supporters of open science, which is why\n                    we provide open access both to the web application and to\n                    the underlying dataset: the source code is\n                    <a href=\"https://github.com/CeON/\" target=\"_blank\">\n                        available on GitHub</a>, while the data is\n                    <a href=\"http://static.ceon.pl/comac/\" target=\"_blank\">\n                        available as a set of RDF triples</a>.\n                </p>\n\n                <h4>Authors</h4>\n                <p>\n                    This service was created by a team of\n                    <a target=\"_blank\" href=\"http://www.icm.edu.pl/\">ICM\n                        UW</a> employees, listed here in pseudorandom order\n                    (lexicographically by MD5 hashes of names): \u0141ukasz\n                    Bolikowski, Piotr Dendek, Aleksander Nowi\u0144ski, Jakub\n                    Jurkiewicz, Micha\u0142 Oniszczuk, Micha\u0142 Politowski and\n                    Artur\n                    Czeczko. Most team members work in the\n                    <a target=\"_blank\" href=\"http://adalab.icm.edu.pl/\">\n                        Applied Data Analysis Lab (ADA Lab)</a>.\n                </p>\n\n                <h4>Funding</h4>\n                <p>\n                    COMAC Navigator is one of the deliverables of the OCEAN\n                    project, funded by the Innovative Economy Operational\n                    Programme 2007\u20132013, measure 2.3.\n                </p>\n\n                <div class=\"expand-button\">\n                    <a class=\"btn btn-default\" role=\"button\"\n                       data-toggle=\"collapse\" href=\"#moreInfoContent\"\n                       aria-expanded=\"false\" aria-controls=\"moreInfoContent\">\n                        <span class=\"glyphicon glyphicon-chevron-down\">\n                        </span>\n                        More\u2026 (including legal information)\n                    </a>\n                </div>\n                <div class=\"collapse\" id=\"moreInfoContent\">\n\n                    <h4>Technologies used</h4>\n                    <h5>Backend:</h5>\n                    <ul>\n                        <li>\n                            Hadoop Ecosystem (Hadoop MapReduce, Apache Pig,\n                            Apache HBase, Apache Oozie just to mention a few)\n                        </li>\n                        <li>\n                            Apache Spark (Spark SQL, MLlib)\n                        </li>\n                    </ul>\n                    <h5>Frontend:</h5>\n                    <ul>\n                        <li>\n                            D3.js\n                        </li>\n                        <li>\n                            TypeScript\n                        </li>\n                        <li>\n                            Bootstrap\n                        </li>\n                        <li>\n                            jQuery\n                        </li>\n                    </ul>\n\n                    <h4>Projects used which were developed in ICM UW</h4>\n                    <ul>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/comac-navigator-frontend\">\n                                COMAC Navigator Frontend\n                            </a>\n                            \u2014 UI part of the COMAC Navigator.\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/comac-navigator-backend\">\n                                COMAC Navigator Backend\n                            </a>\n                            \u2014 REST service providing data for the COMAC\n                            Navigator Frontend.\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/CoAnSys\">\n                                CoAnSys\n                            </a>\n                            \u2014 Content Analysis System, a framework for mining\n                            scientific publications using Apache Hadoop.\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/CERMINE\">\n                                CERMINE\n                            </a>\n                            \u2014 Content ExtRactor and MINEr, a Java library and\n                            <a target=\"_blank\"\n                               href=\"http://cermine.ceon.pl\">a web service</a>\n                            for extracting metadata and content from PDF files\n                            containing academic publications.\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/oozie-maven-plugin\">\n                                Oozie Maven Plugin\n                            </a>\n                            \u2014 tool created to simplify the creation of packages\n                            (tar.gz files) containing\n                            workflow definition of Apache Oozie as well as\n                            all other files needed to run a workflow\n                            (configuration files, libraries, etc.).\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/oozie-runner\">\n                                Oozie Runner\n                            </a>\n                        </li>\n                    </ul>\n\n                    <h4>Data sources</h4>\n                    <table class=\"table table-striped\" id=\"sourcesTable\">\n                        <thead>\n                        <tr>\n                            <th>Project</th>\n                            <th>Data used</th>\n                            <th>Data&nbsp;version&nbsp;/ Download&nbsp;date</th>\n                            <th width=\"40%\">Licence</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.ncbi.nlm.nih.gov/pubmed\">\n                                MEDLINE<sup>\u00AE</sup>\n                            </a></th>\n                            <td>documents</td>\n                            <td>02-2014</td>\n                            <td>\n                                Medline Licence, data is shown only in\n                                Navigator,\n                                not available as triples\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.ncbi.nlm.nih.gov/pmc/\">\n                                PMC: Open Access subset\n                            </a></th>\n                            <td>documents</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/\">\n                                27-06-2015\n                            </a></td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://creativecommons.org/about/license/\">\n                                Creative Commons\n                            </a>\n                                or similar licence\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.openaire.eu\">\n                                OpenAIRE\n                            </a></th>\n                            <td>documents, organisations,<br/>projects, persons\n                            </td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://api.openaire.eu/oai_pmh\">\n                                19-10-2015\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"https://www.datacite.org/\">\n                                DataCite\n                            </a></th>\n                            <td>datasets</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://oai.datacite.org/oai\">\n                                21-09-2015\n                            </a></td>\n                            <td>CC BY 4.0</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://orcid.org/\">\n                                ORCID\n                            </a></th>\n                            <td>persons in documents</td>\n                            <td><a target=\"_blank\"\n                                   href=\"https://orcid.org/content/orcid-public-data-file\">\n                                2014\n                            </a></td>\n                            <td>CC0 1.0 Public Domain Dedication</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.crossref.org/\">\n                                CrossRef\n                            </a></th>\n                            <td>Augmenting metadata<br/>from other collections\n                            </td>\n                            <td><a target=\"_blank\"\n                                   href=\"\">\n\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://arxiv.org/\">\n                                arXiv\n                            </a></th>\n                            <td>documents, citations<br/>from PDF files</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://export.arxiv.org/oai2\">\n                                03-07-2015\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"https://doaj.org/\">\n                                Directory Of Open Access Journals\n                            </a></th>\n                            <td>documents</td>\n                            <td><a target=\"_blank\"\n                                   href=\"https://doaj.org/oai.article\">\n                                13-10-2015\n                            </a></td>\n                            <td>CC BY-SA</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"\">\n                                Blogs crawling\n                            </a></th>\n                            <td>blogs</td>\n                            <td>11-2015</td>\n                            <td>Data crawled from the Internet</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            ",
            pl: "\n                <h2 class=\"lead-lg\">\n                    COMAC&nbsp;Navigator oferuje przyjazny interfejs s\u0142u\u017C\u0105cy\n                    eksploracji \u015Bwiata&nbsp;akademickiego.\n                </h2>\n                <p class=\"lead\">\n                    Zebrali\u015Bmy i ujednolicili\u015Bmy szereg \u017Ar\u00F3de\u0142 danych\n                    opisuj\u0105cych ludzi, publikacje, projekty i zbiory danych w\n                    celu utworzenia interaktywnej mapy \u015Bwiata akademickiego.\n                    Mapa jest struktur\u0105 grafow\u0105 z w\u0119z\u0142ami reprezentuj\u0105cymi byty\n                    (osoby, publikacje, czasopisma) oraz kraw\u0119dziami\n                    reprezentuj\u0105cymi zwi\u0105zki pomi\u0119dzy bytami.\n                </p>\n\n                <h4>Otwarta nauka</h4>\n                <p>\n                    Jeste\u015Bmy gor\u0105cymi zwolennikami otwartej nauki, dlatego\n                    zapewniamy otwarty dost\u0119p zar\u00F3wno do aplikacji internetowej\n                    jak i znajduj\u0105cego si\u0119 pod ni\u0105 zbioru danych: kod \u017Ar\u00F3d\u0142owy\n                    jest <a href=\"https://github.com/CeON/\" target=\"_blank\">\n                    dost\u0119pny w serwisie GitHub</a>, a otwarty podzbi\u00F3r danych\n                    jest <a href=\"http://static.ceon.pl/comac/\" target=\"_blank\">\n                    dost\u0119pny w postaci tr\u00F3jek RDF</a>.\n                </p>\n\n                <h4>Autorzy</h4>\n                <p>\n                    Serwis zosta\u0142 stworzony przez zesp\u00F3\u0142 pracownik\u00F3w\n                    <a target=\"_blank\" href=\"http://www.icm.edu.pl/\">ICM UW</a>,\n                    wymienionych tutaj w pseudolosowej kolejno\u015Bci\n                    (leksykograficznie po skr\u00F3tach MD5 nazwisk): \u0141ukasz\n                    Bolikowski, Piotr Dendek, Aleksander Nowi\u0144ski, Jakub\n                    Jurkiewicz, Micha\u0142 Oniszczuk, Micha\u0142 Politowski oraz Artur\n                    Czeczko. Wi\u0119szo\u015B\u0107 cz\u0142onk\u00F3w tego zespo\u0142u pracuje w sekcji\n                    <a target=\"_blank\" href=\"http://adalab.icm.edu.pl/\">\n                        Stosowanej Analizy Danych (Applied Data Analysis Lab,\n                        ADA Lab)</a>.\n                </p>\n\n                <h4>Finansowanie</h4>\n                <p>\n                    COMAC Navigator jest jednym z wynik\u00F3w projektu OCEAN,\n                    sfinansowanego z Programu Operacyjnego Innowacyjna\n                    Gospodarka, dzia\u0142anie 2.3.\n                </p>\n\n                <div class=\"expand-button\">\n                    <a class=\"btn btn-default\" role=\"button\"\n                       data-toggle=\"collapse\" href=\"#moreInfoContent\"\n                       aria-expanded=\"false\" aria-controls=\"moreInfoContent\">\n                        <span class=\"glyphicon glyphicon-chevron-down\">\n                        </span>\n                        Wi\u0119cej\u2026 (w tym informacje prawne)\n                    </a>\n                </div>\n                <div class=\"collapse\" id=\"moreInfoContent\">\n\n                    <h4>Wykorzystane technologie</h4>\n                    <h5>Backend:</h5>\n                    <ul>\n                        <li>\n                            Ekosystem Hadoop (m.in. Hadoop MapReduce, Apache\n                            Pig, Apache HBase, Apache Oozie)\n                        </li>\n                        <li>\n                            Apache Spark (Spark SQL, MLlib)\n                        </li>\n                    </ul>\n                    <h5>Frontend:</h5>\n                    <ul>\n                        <li>\n                            D3.js\n                        </li>\n                        <li>\n                            TypeScript\n                        </li>\n                        <li>\n                            Bootstrap\n                        </li>\n                        <li>\n                            jQuery\n                        </li>\n                    </ul>\n\n                    <h4>Wykorzystane projekty rozwini\u0119te w ICM UW</h4>\n                    <ul>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/comac-navigator-frontend\">\n                                COMAC Navigator Frontend\n                            </a>\n                            <!--\u2014 UI part of the COMAC Navigator.-->\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/comac-navigator-backend\">\n                                COMAC Navigator Backend\n                            </a>\n                            <!--\u2014 REST service providing data for the COMAC-->\n                            <!--Navigator Frontend.-->\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/CoAnSys\">\n                                CoAnSys\n                            </a>\n                            <!--\u2014 Content Analysis System, a framework for mining-->\n                            <!--scientific publications using Apache Hadoop.-->\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/CERMINE\">\n                                CERMINE\n                            </a>\n                            <!--\u2014 Content ExtRactor and MINEr, a Java library and-->\n                            <!--<a target=\"_blank\"-->\n                            <!--href=\"http://cermine.ceon.pl\">a web service</a>-->\n                            <!--for extracting metadata and content from PDF files-->\n                            <!--containing academic publications.-->\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/oozie-maven-plugin\">\n                                Oozie Maven Plugin\n                            </a>\n                            <!--\u2014 tool created to simplify the creation of packages-->\n                            <!--(tar.gz files) containing-->\n                            <!--workflow definition of Apache Oozie as well as-->\n                            <!--all other files needed to run a workflow-->\n                            <!--(configuration files, libraries, etc.).-->\n                        </li>\n                        <li>\n                            <a target=\"_blank\"\n                               href=\"https://github.com/CeON/oozie-runner\">\n                                Oozie Runner\n                            </a>\n                        </li>\n                    </ul>\n\n                    <h4>\u0179r\u00F3d\u0142a danych</h4>\n                    <table class=\"table table-striped\" id=\"sourcesTable\">\n                        <thead>\n                        <tr>\n                            <th>Projekt</th>\n                            <th>Wykorzystane dane</th>\n                            <th>Wersja&nbsp;danych&nbsp;/ Data&nbsp;pobrania\n                            </th>\n                            <th width=\"40%\">Licencja</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.ncbi.nlm.nih.gov/pubmed\">\n                                MEDLINE<sup>\u00AE</sup>\n                            </a></th>\n                            <td>dokumenty</td>\n                            <td>02-2014</td>\n                            <td>\n                                Licencja Medline, dane wy\u015Bwietlane jedynie w\n                                aplikacji COMAC Navigator, zbi\u00F3r niedost\u0119pny w\n                                formie tr\u00F3jek.\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.ncbi.nlm.nih.gov/pmc/\">\n                                PMC: podzbi\u00F3r Open Access\n                            </a></th>\n                            <td>dokumenty</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/\">\n                                27-06-2015\n                            </a></td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://creativecommons.org/about/license/\">\n                                Creative Commons\n                            </a>\n                                lub podobna\n                            </td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.openaire.eu\">\n                                OpenAIRE\n                            </a></th>\n                            <td>dokumenty, organizacje,<br/>projekty, osoby</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://api.openaire.eu/oai_pmh\">\n                                19-10-2015\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"https://www.datacite.org/\">\n                                DataCite\n                            </a></th>\n                            <td>datasets</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://oai.datacite.org/oai\">\n                                21-09-2015\n                            </a></td>\n                            <td>CC BY 4.0</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://orcid.org/\">\n                                ORCID\n                            </a></th>\n                            <td>osoby w dokumentach</td>\n                            <td><a target=\"_blank\"\n                                   href=\"https://orcid.org/content/orcid-public-data-file\">\n                                2014\n                            </a></td>\n                            <td>CC0 1.0 Public Domain Dedication</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://www.crossref.org/\">\n                                CrossRef\n                            </a></th>\n                            <td>Wzbogacanie metadanych<br/>dokument\u00F3w z innych\n                                kolekcji\n                            </td>\n                            <td><a target=\"_blank\"\n                                   href=\"\">\n\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"http://arxiv.org/\">\n                                arXiv\n                            </a></th>\n                            <td>dokumenty, cytowania<br/>z plik\u00F3w PDF</td>\n                            <td><a target=\"_blank\"\n                                   href=\"http://export.arxiv.org/oai2\">\n                                03-07-2015\n                            </a></td>\n                            <td></td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"https://doaj.org/\">\n                                Directory Of Open Access Journals\n                            </a></th>\n                            <td>dokumenty</td>\n                            <td><a target=\"_blank\"\n                                   href=\"https://doaj.org/oai.article\">\n                                13-10-2015\n                            </a></td>\n                            <td>CC BY-SA</td>\n                        </tr>\n                        <tr>\n                            <th scope=\"row\"><a\n                                    target=\"_blank\"\n                                    href=\"\">\n                                Zebrane blogi\n                            </a></th>\n                            <td>blogi</td>\n                            <td>11-2015</td>\n                            <td>Blogi zebrane z Internetu</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            "
        }
    };
})(translations || (translations = {}));
//# sourceMappingURL=translations.js.map