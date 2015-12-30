/**
 * @fileOverview Translations object.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="lib/jquery.d.ts" />

const LANG_PL = "pl";
const LANG_EN = "en";

const TRANS_TARGET_ATTRIBUTE = "data-i18n";

/**
 * Translations.
 *
 * @namespace
 */
namespace translations {

    var selectedLanguage = LANG_EN;

    /**
     * Toggles the currently selected language between LANG_PL and LANG_EN.
     */
    export function toggleLanguage() {
        if (selectedLanguage == LANG_PL) {
            changeLanguage(LANG_EN);
        } else {
            changeLanguage(LANG_PL);
        }
    }

    /**
     * Change the currently selected language and update all elements in the
     * interface that have the TRANS_TARGET_ATTRIBUTE attribute.
     * @param {string} toLang change to this language
     */
    export function changeLanguage(toLang) {
        selectedLanguage = toLang;
        translateAll();
    }

    /**
     * Translate all elements in the interface that have the attribute
     * TRANS_TARGET_ATTRIBUTE.
     * @private
     */
    export function translateAll() {
        $("[" + TRANS_TARGET_ATTRIBUTE + "]")
            .each(function () {
                translations.translate($(this));
            });
    }

    /**
     * Translate the text inside the provided interface element using the
     * TRANS_TARGET_ATTRIBUTE attribute value as a key.
     * @param {jQuery} elem
     */
    export function translate(elem) {
        var translationKey = elem.attr(TRANS_TARGET_ATTRIBUTE);
        var newText = translations.getText(translationKey);
        if (elem.is("[target-i18n]")) { //elem.hasAttr("target-i18n")
            var target = elem.attr("target-i18n");
            elem.attr(target, newText);

        } else {
            elem.html(newText);
        }
    }

    /**
     * Get the translated string.
     * @param {string} key get string for this key
     * @returns {string} translated string
     */
    export function getText(key) {
        return texts[key][selectedLanguage];
    }

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
            en: `
                <h5>Node details</h5>
                <p>
                    <em>Single click on a node</em> to view additional
                    informations about a node in this tab.
                </p>
            `,
            pl: `
                <h5>Szczegóły węzła</h5>
                <p>
                    <em>Kliknij pojedynczo na węzeł</em>, aby wyświetlić w tej
                    zakładce więcej informacji o węźle.
                </p>
            `
        },
        helpTabContent: {
            en: `
                <h5>Browsing graph</h5>
                <p>
                    <em>Double click on a node</em> to expand it, i.e.
                    to add all of its neighobours.
                </p>
                <p>
                    <em>Single click on a node</em> to view additional
                    informations about a node.
                </p>
                <h5>Node types:</h5>
                <div class="node-list">
                    <div class="search-result journal">Journal</div>
                    <div class="search-result dataset">Dataset</div>
                    <div class="search-result project">Project</div>
                    <div class="search-result paper">Paper</div>
                    <div class="search-result organization">Organisation</div>
                    <div class="search-result author">Author</div>
                    <div class="search-result blog">Blog</div>
                </div>
            `,
            pl: `
                <h5>Przeglądanie grafu</h5>
                <p>
                    <em>Kliknij podwójnie na węzęł</em>, aby go rozwinąć, tzn.
                    dodać wszystkich jego sąsiadów do grafu.
                </p>
                <p>
                    <em>Kliknij pojedynczo na węzeł</em>, aby uzyskać więcej
                    informacji o węźle.
                </p>
                <h5>Typy węzłów:</h5>
                <div class="node-list">
                    <div class="search-result journal">Publikacja</div>
                    <div class="search-result dataset">Zbiór danych</div>
                    <div class="search-result project">Projekt</div>
                    <div class="search-result paper">Publikacja</div>
                    <div class="search-result organization">Organizacja</div>
                    <div class="search-result author">Autor</div>
                    <div class="search-result blog">Blog</div>
                </div>
            `
        },
        aboutModalContent: {
            en: `
                <h2 class="lead-lg">
                    COMAC&nbsp;Navigator provides a&nbsp;friendly interface for&nbsp;exploring
                    the&nbsp;academic&nbsp;world.
                </h2>
                <p class="lead">
                    We brought together and unified several
                    data sources describing people, publications, projects and
                    datasets in order to draw an interactive map of academia.
                    The map is a graph-like structure with nodes representing
                    entities (people, publications, journals) and links
                    representing relations between the entities.
                </p>

                <h4>Open Science</h4>
                <p>
                    We are strong supporters of open science, which is why
                    we provide open access both to the web application and to
                    the underlying dataset: the source code is
                    <a href="https://github.com/CeON/" target="_blank">
                        available on GitHub</a>, while the data is
                    <a href="http://static.ceon.pl/comac/" target="_blank">
                        available as a set of RDF triples</a>.
                </p>

                <h4>Authors</h4>
                <p>
                    This service was created by a team of
                    <a target="_blank" href="http://www.icm.edu.pl/">ICM
                        UW</a> employees, listed here in pseudorandom order
                    (lexicographically by MD5 hashes of names): Łukasz
                    Bolikowski, Piotr Dendek, Aleksander Nowiński, Jakub
                    Jurkiewicz, Michał Oniszczuk, Michał Politowski and
                    Artur
                    Czeczko. Most team members work in the
                    <a target="_blank" href="http://adalab.icm.edu.pl/">
                        Applied Data Analysis Lab (ADA Lab)</a>.
                </p>

                <h4>Funding</h4>
                <p>
                    COMAC Navigator is one of the deliverables of the OCEAN
                    project, funded by the Innovative Economy Operational
                    Programme 2007–2013, measure 2.3.
                </p>

                <div class="expand-button">
                    <a class="btn btn-default" role="button"
                       data-toggle="collapse" href="#moreInfoContent"
                       aria-expanded="false" aria-controls="moreInfoContent">
                        <span class="glyphicon glyphicon-chevron-down">
                        </span>
                        More… (including legal information)
                    </a>
                </div>
                <div class="collapse" id="moreInfoContent">

                    <h4>Technologies used</h4>
                    <h5>Backend:</h5>
                    <ul>
                        <li>
                            Hadoop Ecosystem (Hadoop MapReduce, Apache Pig,
                            Apache HBase, Apache Oozie just to mention a few)
                        </li>
                        <li>
                            Apache Spark (Spark SQL, MLlib)
                        </li>
                    </ul>
                    <h5>Frontend:</h5>
                    <ul>
                        <li>
                            D3.js
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            jQuery
                        </li>
                    </ul>

                    <h4>Projects used which were developed in ICM UW</h4>
                    <ul>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/comac-navigator-frontend">
                                COMAC Navigator Frontend
                            </a>
                            — UI part of the COMAC Navigator.
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/comac-navigator-backend">
                                COMAC Navigator Backend
                            </a>
                            — REST service providing data for the COMAC
                            Navigator Frontend.
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/CoAnSys">
                                CoAnSys
                            </a>
                            — Content Analysis System, a framework for mining
                            scientific publications using Apache Hadoop.
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/CERMINE">
                                CERMINE
                            </a>
                            — Content ExtRactor and MINEr, a Java library and
                            <a target="_blank"
                               href="http://cermine.ceon.pl">a web service</a>
                            for extracting metadata and content from PDF files
                            containing academic publications.
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/oozie-maven-plugin">
                                Oozie Maven Plugin
                            </a>
                            — tool created to simplify the creation of packages
                            (tar.gz files) containing
                            workflow definition of Apache Oozie as well as
                            all other files needed to run a workflow
                            (configuration files, libraries, etc.).
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/oozie-runner">
                                Oozie Runner
                            </a>
                        </li>
                    </ul>

                    <h4>Data sources</h4>
                    <table class="table table-striped" id="sourcesTable">
                        <thead>
                        <tr>
                            <th>Project</th>
                            <th>Data used</th>
                            <th>Data&nbsp;version&nbsp;/ Download&nbsp;date</th>
                            <th width="40%">Licence</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.ncbi.nlm.nih.gov/pubmed">
                                MEDLINE<sup>®</sup>
                            </a></th>
                            <td>documents</td>
                            <td>02-2014</td>
                            <td>
                                Medline Licence, data is shown only in
                                Navigator,
                                not available as triples
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.ncbi.nlm.nih.gov/pmc/">
                                PMC: Open Access subset
                            </a></th>
                            <td>documents</td>
                            <td><a target="_blank"
                                   href="http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/">
                                27-06-2015
                            </a></td>
                            <td><a target="_blank"
                                   href="http://creativecommons.org/about/license/">
                                Creative Commons
                            </a>
                                or similar licence
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.openaire.eu">
                                OpenAIRE
                            </a></th>
                            <td>documents, organisations,<br/>projects, persons
                            </td>
                            <td><a target="_blank"
                                   href="http://api.openaire.eu/oai_pmh">
                                19-10-2015
                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="https://www.datacite.org/">
                                DataCite
                            </a></th>
                            <td>datasets</td>
                            <td><a target="_blank"
                                   href="http://oai.datacite.org/oai">
                                21-09-2015
                            </a></td>
                            <td>CC BY 4.0</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://orcid.org/">
                                ORCID
                            </a></th>
                            <td>persons in documents</td>
                            <td><a target="_blank"
                                   href="https://orcid.org/content/orcid-public-data-file">
                                2014
                            </a></td>
                            <td>CC0 1.0 Public Domain Dedication</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.crossref.org/">
                                CrossRef
                            </a></th>
                            <td>Augmenting metadata<br/>from other collections
                            </td>
                            <td><a target="_blank"
                                   href="">

                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://arxiv.org/">
                                arXiv
                            </a></th>
                            <td>documents, citations<br/>from PDF files</td>
                            <td><a target="_blank"
                                   href="http://export.arxiv.org/oai2">
                                03-07-2015
                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="https://doaj.org/">
                                Directory Of Open Access Journals
                            </a></th>
                            <td>documents</td>
                            <td><a target="_blank"
                                   href="https://doaj.org/oai.article">
                                13-10-2015
                            </a></td>
                            <td>CC BY-SA</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="">
                                Blogs crawling
                            </a></th>
                            <td>blogs</td>
                            <td>11-2015</td>
                            <td>Data crawled from the Internet</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            `,
            pl: `
                <h2 class="lead-lg">
                    COMAC&nbsp;Navigator oferuje przyjazny interfejs służący
                    eksploracji świata&nbsp;akademickiego.
                </h2>
                <p class="lead">
                    Zebraliśmy i ujednoliciliśmy szereg źródeł danych
                    opisujących ludzi, publikacje, projekty i zbiory danych w
                    celu utworzenia interaktywnej mapy świata akademickiego.
                    Mapa jest strukturą grafową z węzłami reprezentującymi byty
                    (osoby, publikacje, czasopisma) oraz krawędziami
                    reprezentującymi związki pomiędzy bytami.
                </p>

                <h4>Otwarta nauka</h4>
                <p>
                    Jesteśmy gorącymi zwolennikami otwartej nauki, dlatego
                    zapewniamy otwarty dostęp zarówno do aplikacji internetowej
                    jak i znajdującego się pod nią zbioru danych: kod źródłowy
                    jest <a href="https://github.com/CeON/" target="_blank">
                    dostępny w serwisie GitHub</a>, a otwarty podzbiór danych
                    jest <a href="http://static.ceon.pl/comac/" target="_blank">
                    dostępny w postaci trójek RDF</a>.
                </p>

                <h4>Autorzy</h4>
                <p>
                    Serwis został stworzony przez zespół pracowników
                    <a target="_blank" href="http://www.icm.edu.pl/">ICM UW</a>,
                    wymienionych tutaj w pseudolosowej kolejności
                    (leksykograficznie po skrótach MD5 nazwisk): Łukasz
                    Bolikowski, Piotr Dendek, Aleksander Nowiński, Jakub
                    Jurkiewicz, Michał Oniszczuk, Michał Politowski oraz Artur
                    Czeczko. Więszość członków tego zespołu pracuje w sekcji
                    <a target="_blank" href="http://adalab.icm.edu.pl/">
                        Stosowanej Analizy Danych (Applied Data Analysis Lab,
                        ADA Lab)</a>.
                </p>

                <h4>Finansowanie</h4>
                <p>
                    COMAC Navigator jest jednym z wyników projektu OCEAN,
                    sfinansowanego z Programu Operacyjnego Innowacyjna
                    Gospodarka, działanie 2.3.
                </p>

                <div class="expand-button">
                    <a class="btn btn-default" role="button"
                       data-toggle="collapse" href="#moreInfoContent"
                       aria-expanded="false" aria-controls="moreInfoContent">
                        <span class="glyphicon glyphicon-chevron-down">
                        </span>
                        Więcej… (w tym informacje prawne)
                    </a>
                </div>
                <div class="collapse" id="moreInfoContent">

                    <h4>Wykorzystane technologie</h4>
                    <h5>Backend:</h5>
                    <ul>
                        <li>
                            Ekosystem Hadoop (m.in. Hadoop MapReduce, Apache
                            Pig, Apache HBase, Apache Oozie)
                        </li>
                        <li>
                            Apache Spark (Spark SQL, MLlib)
                        </li>
                    </ul>
                    <h5>Frontend:</h5>
                    <ul>
                        <li>
                            D3.js
                        </li>
                        <li>
                            TypeScript
                        </li>
                        <li>
                            Bootstrap
                        </li>
                        <li>
                            jQuery
                        </li>
                    </ul>

                    <h4>Wykorzystane projekty rozwinięte w ICM UW</h4>
                    <ul>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/comac-navigator-frontend">
                                COMAC Navigator Frontend
                            </a>
                            <!--— UI part of the COMAC Navigator.-->
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/comac-navigator-backend">
                                COMAC Navigator Backend
                            </a>
                            <!--— REST service providing data for the COMAC-->
                            <!--Navigator Frontend.-->
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/CoAnSys">
                                CoAnSys
                            </a>
                            <!--— Content Analysis System, a framework for mining-->
                            <!--scientific publications using Apache Hadoop.-->
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/CERMINE">
                                CERMINE
                            </a>
                            <!--— Content ExtRactor and MINEr, a Java library and-->
                            <!--<a target="_blank"-->
                            <!--href="http://cermine.ceon.pl">a web service</a>-->
                            <!--for extracting metadata and content from PDF files-->
                            <!--containing academic publications.-->
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/oozie-maven-plugin">
                                Oozie Maven Plugin
                            </a>
                            <!--— tool created to simplify the creation of packages-->
                            <!--(tar.gz files) containing-->
                            <!--workflow definition of Apache Oozie as well as-->
                            <!--all other files needed to run a workflow-->
                            <!--(configuration files, libraries, etc.).-->
                        </li>
                        <li>
                            <a target="_blank"
                               href="https://github.com/CeON/oozie-runner">
                                Oozie Runner
                            </a>
                        </li>
                    </ul>

                    <h4>Źródła danych</h4>
                    <table class="table table-striped" id="sourcesTable">
                        <thead>
                        <tr>
                            <th>Projekt</th>
                            <th>Wykorzystane dane</th>
                            <th>Wersja&nbsp;danych&nbsp;/ Data&nbsp;pobrania
                            </th>
                            <th width="40%">Licencja</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.ncbi.nlm.nih.gov/pubmed">
                                MEDLINE<sup>®</sup>
                            </a></th>
                            <td>dokumenty</td>
                            <td>02-2014</td>
                            <td>
                                Licencja Medline, dane wyświetlane jedynie w
                                aplikacji COMAC Navigator, zbiór niedostępny w
                                formie trójek.
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.ncbi.nlm.nih.gov/pmc/">
                                PMC: podzbiór Open Access
                            </a></th>
                            <td>dokumenty</td>
                            <td><a target="_blank"
                                   href="http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/">
                                27-06-2015
                            </a></td>
                            <td><a target="_blank"
                                   href="http://creativecommons.org/about/license/">
                                Creative Commons
                            </a>
                                lub podobna
                            </td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.openaire.eu">
                                OpenAIRE
                            </a></th>
                            <td>dokumenty, organizacje,<br/>projekty, osoby</td>
                            <td><a target="_blank"
                                   href="http://api.openaire.eu/oai_pmh">
                                19-10-2015
                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="https://www.datacite.org/">
                                DataCite
                            </a></th>
                            <td>datasets</td>
                            <td><a target="_blank"
                                   href="http://oai.datacite.org/oai">
                                21-09-2015
                            </a></td>
                            <td>CC BY 4.0</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://orcid.org/">
                                ORCID
                            </a></th>
                            <td>osoby w dokumentach</td>
                            <td><a target="_blank"
                                   href="https://orcid.org/content/orcid-public-data-file">
                                2014
                            </a></td>
                            <td>CC0 1.0 Public Domain Dedication</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://www.crossref.org/">
                                CrossRef
                            </a></th>
                            <td>Wzbogacanie metadanych<br/>dokumentów z innych
                                kolekcji
                            </td>
                            <td><a target="_blank"
                                   href="">

                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="http://arxiv.org/">
                                arXiv
                            </a></th>
                            <td>dokumenty, cytowania<br/>z plików PDF</td>
                            <td><a target="_blank"
                                   href="http://export.arxiv.org/oai2">
                                03-07-2015
                            </a></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="https://doaj.org/">
                                Directory Of Open Access Journals
                            </a></th>
                            <td>dokumenty</td>
                            <td><a target="_blank"
                                   href="https://doaj.org/oai.article">
                                13-10-2015
                            </a></td>
                            <td>CC BY-SA</td>
                        </tr>
                        <tr>
                            <th scope="row"><a
                                    target="_blank"
                                    href="">
                                Zebrane blogi
                            </a></th>
                            <td>blogi</td>
                            <td>11-2015</td>
                            <td>Blogi zebrane z Internetu</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            `
        }
    };
}


