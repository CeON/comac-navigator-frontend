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
var LanguageSelectorController = (function () {
    function LanguageSelectorController() {
        $("#languageSelector").click(function () {
            translations.toggleLanguage();
        });
    }
    return LanguageSelectorController;
})();
//# sourceMappingURL=LanguageSelectorController.js.map