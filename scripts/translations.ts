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
                <p><a href="http://adalab.icm.edu.pl/">ADA Lab</a></p>

                <p><a href="http://icm.edu.pl/">ICM</a></p>
                <h4>Disclaimers</h4>

                <p>…</p>
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


