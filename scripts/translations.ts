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
            <p>
            COMAC Navigator provides a friendly interface for exploring the academic world.  We brought together and unified several data sources describing people, publications, projects and data sets in order to draw an interactive map of academia.  The map is a graph-like structure with nodes representing entities (people, publications, journals) and links representing relations between the entities.
            </p>

            <p>
We are strong supporters of open science, which is why we provide open access both to the web application and to the underlying data set: the source code is available on GitHub, while data are available here as a set of RDF triples.
            </p>

            <p>
This service was created by a team of ICM UW employees, listed here in pseudorandom order (lexicographically by MD5 hashes of names): Łukasz Bolikowski, Piotr Dendek, Aleksander Nowiński, Jakub Jurkiewicz, Michał Oniszczuk, Michał Politowski and Artur Czeczko.
            </p>

            <p>
COMAC Navigator is one of the deliverables of the OCEAN project, funded by the Innovative Economy Operational Programme 2007–2013, measure 2.3.
            </p>

            <p>
            </p>




                <p><a href="http://adalab.icm.edu.pl/">ADA Lab</a></p>

                <p><a href="http://icm.edu.pl/">ICM</a></p>
                <h4>Licenses & more</h4>
                <div class="well">
                <div id="aboutLegal"><p>
                    No.
                    Źródło danych
                    Wymagania
                    Jak można zrealizować?
                    Jak zrealizowano?
                    Data realizacji
                    Czy zrealizowane?
                    1.1
                    MEDLINE
                    clear description of how the product/service was
                    derived,
                    indicating the currency and the source database.

                    Trademark symbols must properly be used when referring to the NLM databases, system and products.
                    A product/service using downloaded data must be named in a fashion that clearly distinguishes it from NLM-produced databases accessible at NLM.

                    Opis tego czym jest COMAC



                    NIE
                    1.2
                    MEDLINE
                    At least annually,
                    the MEDLINE-derived data should be updated when a new edition of the product is released.
                    users should be informed that the MEDLINE-derived data may change.

                    Będziemy pisali, jaki był termin ostatniej aktualizacji poszczególnych źródeł danych (na stronie comac.ceon.pl, bądź dedykowanej stronie ADA LAB




                    NIE
                    1.3
                    MEDLINE
                    Because NLM goes to considerable effort to assign MeSH terms, it prefers that these be retained as assigned by the indexers.
                    Wymaganie nie musi być uwzględnione




                    NIE
                    1.4
                    MEDLINE
                    The NLM record (or portion thereof) in the product/service must be labeled so as to identify NLM as the source, except for data derived from LocatorPlus
                    Wymagania nie da się uwzględnić w wygodny sposób




                    NIE
                    2.1
                    PMC
                    nie widze ochrony: http://www.ncbi.nlm.nih.gov/pmc/tools/openftlist/






                    NIE
                    3.1
                    OpenAIRE
                    @Bolo @Mkobos wiedzą
                    https://guidelines.readthedocs.org/en/latest/




                    NIE
                    4.1
                    DataCite
                    All the content is licensed under a Creative Commons Attribution 4.0 International License.






                    NIE
                    5.1
                    ORCID
                    Spread the Word: Please give attribution to ORCID as the source of the Public Data File and link back to this page (https://orcid.org/content/orcid-public-data-file) where technologically feasible, to facilitate access for others.








                    NIE
                    6.1
                    CrossRef
                    Nic nie chcą http://www.crossref.org/03libraries/33library_agreement.html. Na końcu licencji  udzielają pozwolenia na użycie ich znaku towarowego w podziękowaniach ( podaniu źródła)






                    TAK
                    7.1
                    arXiv








                    NIE
                    8.1
                    DOAJ
                    This work is licensed under CC BY-SA






                    NIE
                    9.1
                    blogi
                    Nie wiadomo : Jak wpisać crawl sieci?






                    NIE
                </p></div>
                <div>
            `,
            pl: `
                <p><a href="http://adalab.icm.edu.pl/">ADA Lab</a></p>

                <p><a href="http://icm.edu.pl/">ICM</a></p>
                <h4>Ograniczenia</h4>

                <p>…</p>
            `
        }
    };
}


