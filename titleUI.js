const {ImageView, TextView, Button, ui, app} = require('tabris');

app.registerFont('Futura', 'https://github.com/talarie/tabrisportfolio/blob/master/Futura.ttc?raw=true');
let font = '30px Futura';

createImageView('fit');
ui.statusBar.background = '#dbc73b'
ui.contentView.background = '#fff';

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 350, height: 500,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/plutoBadge02.png?raw=true',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);

    let btnEnter = new Button({
      centerX: 0,
      top: 'prev() 10',
      text: 'Enter',
      font: font
    })
  .appendTo(ui.contentView);
}
