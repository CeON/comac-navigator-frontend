/**
 * @fileOverview CopyToClipboardController class.
 *
 * @author Michał Oniszczuk <m.oniszczuk@icm.edu.pl>
 */

///<reference path="lib/require.d.ts"/>
///<reference path="lib/jquery.d.ts" />
///<reference path="lib/zeroclipboard.d.ts" />

ZeroClipboard = require("lib/ZeroClipboard")

class CopyToClipboardController {
    /**
     * Creates an instance of CopyToClipboardController.
     *
     * @constructor
     * @this {CopyToClipboardController}
     */
    constructor() {
        var zeroClipboard = new ZeroClipboard($("#copyToClipboardButton"));
        zeroClipboard.on('ready', function (event) {
            console.log('ZeroClipboard is loaded');

            zeroClipboard.on('copy', function (event) {
                event.clipboardData.setData('text/plain', $("#shareGraphInput").attr("value"));
            });

            zeroClipboard.on('aftercopy', function (event) {
                console.log('Copied text to clipboard: ' + event.data['text/plain']);
            });
        });

        zeroClipboard.on('error', function (event) {
            console.log('ZeroClipboard error of type "' + event.name + '": ' + event.message);
            ZeroClipboard.destroy();
        });
    }
}

