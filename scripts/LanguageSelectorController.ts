/**
 * @fileOverview LanguageSelectorController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="lib/jquery.d.ts" />
///<reference path="translations.ts"/>

/**
 * Creates an instance of LanguageSelectorController.
 *
 * @constructor
 * @this {LanguageSelectorController}
 */
class LanguageSelectorController {
    constructor() {
        $("#languageSelector").click(function () {
            translations.toggleLanguage();
        });
    }
}

