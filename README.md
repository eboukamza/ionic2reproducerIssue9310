# ionic2reproducerIssue9310
Reproducer issue https://github.com/driftyco/ionic/issues/9310

Step for reproduce

1. Run the project with `ionic serve`. Ensure Page showns with scroll (resolution heigth < 600 px).
2. In rc.3 when the input recives focus the screen is centered on it (automatic scroll).
3 if you click in the button (login) the app crash: 


      TypeError: Cannot read property 'style' of null
      at Content.addScrollPadding (/reproducerIssue9310/node_modules/ionic-angular/components/content/content.js:179:28)
      at eval (/Users/elias/reproducerIssue9310/node_modules/ionic-angular/components/content/content.js:189:23)
      at eval (/Users/elias/reproducerIssue9310/node_modules/ionic-angular/util/keyboard.js:39:21)
      at t.invokeTask (http://localhost:8100/build/polyfills.js:3:14051)
      at e.runTask (http://localhost:8100/build/polyfills.js:3:11411)
      at invoke (http://localhost:8100/build/polyfills.js:3:15164)
