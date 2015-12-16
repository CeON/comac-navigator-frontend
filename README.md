# COMAC Navigator Frontend

UI part of the COMAC Navigator.

The frontend runs in the browser and connects over HTTP to the [COMAC Navigator Backend](https://github.com/CeON/comac-navigator-backend) to fetch data. 

## How to run

1. Run [COMAC Navigator Backend](https://github.com/CeON/comac-navigator-backend).
2. If necessary edit the url pointing to the Backend. The dafault value is appropriate when the Backend is run on the `localhost` using the default port. 
 The config file is `scripts/config.js`.
3. Serve in any way you like (for example using an Apache HTTP Server) or simply open `index.html` locally in your browser (though ZeroClipboard will not work if the address in browser begins with `file://`).

## Documentation

Documentation of JavaScript files is in JSDoc 3 format.


### How to generate documentation

Generated files will be outputed to the `out` folder (which is added to the `.gitignore` file). 

```
jsdoc scripts
open out/index.html
```

## Supported browsers

This application was tested on:

* OS X 10.9.5 in latest versions of: Chrome, Firefox, Safari
* Linux in latest versions of: Chrome, Firefox

## Technologies used

* TypeScript for better JavaScript,
* D3.js 3.4.13 for graph presentation,
* RequireJS 2.1.15 for handling modules & libraries (JavaScript doesn't have built-in code module support),
* Bootstrap 3.1.1 for UI elements (Buttons, Icons, etc.), CSS and Bootstrap jQuery plugin (for Modals, Dropdowns & Tabs),
* jQuery 2.0.3 for manipulating DOM elements,
* ZeroClipboard 2.2.0 for copying text to clipboard (Share graph functionality).  
