const {ImageView, TextView, ui, app} = require('tabris');

app.registerFont('Futura', 'https://github.com/talarie/tabrisportfolio/blob/master/Futura.ttc?raw=true');
let font = '20px Futura';

createImageView('fit');
ui.statusBar.background = '#dbc73b'
ui.contentView.background = '#fff';

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 350, height: 500,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/plutoBadge02.png?raw=true',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);

  new TextView({
  left: 16, top: 'prev() 24', right: 16,
  text: font
    }).appendTo(ui.contentView);

    new TextView({
  left: 16, top: 'prev() 8', right: 16,
  text: 'Enter',
  font: font
    }).appendTo(ui.contentView);
}
