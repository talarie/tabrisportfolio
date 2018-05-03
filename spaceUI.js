/*
  TabFolder, Tab and WebView
  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/api/TabFolder.html
*/

const {Button, Tab, TextInput, TabFolder, TextView, ImageView, ui, app} = require('tabris');

let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
  paging: true // enables swiping. To still be able to open the developer console in iOS, swipe from the bottom right.
}).appendTo(ui.contentView);


let tabHome = new Tab({
    title: 'Home', // converted to upper-case on Android
  }).appendTo(tabFolder);




app.registerFont('Futura', 'https://github.com/talarie/tabrisportfolio/blob/master/Futura.ttc?raw=true');
let font = '30px Futura';

createImageView('fill');
ui.statusBar.background = '#dbc73b'
ui.contentView.background = '#fff';

function createImageView(scaleMode) {
  new ImageView({
    width: 350, height: 500, centerX: 0, centerY: 0,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/plutoBadge02.png?raw=true',
    scaleMode: scaleMode
  }).appendTo(tabHome);
}


let tabWeb = new Tab({
    title: 'Details', // converted to upper-case on Android
  }).appendTo(tabFolder);

//tabWeb



let tabTaylar = new Tab({
    title: 'Reservation', // converted to upper-case on Android
  }).appendTo(tabFolder);

  let txt3 = new TextView({
    centerX: 0, top:0,
    text: 'Hey this is tab 3 Taylar '
  }).appendTo(tabTaylar);