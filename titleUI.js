const {ImageView, TextView, Button, ui, app} = require('tabris');

app.registerFont('Futura', 'https://github.com/talarie/tabrisportfolio/blob/master/Futura.ttc?raw=true');
let font = '30px Futura';

createImageView('fill');
ui.statusBar.background = '#dbc73b'
ui.contentView.background = '#fff';

function createImageView(scaleMode) {
  new ImageView({
    top: 'prev() 10', width: 350, height: 500, centerX: 0,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/plutoBadge02.png?raw=true',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);

    let btnEnter = new Button({
      class: 'main',
      centerX: 0,
      top: 'prev() 10',
      text: 'Book Flight',
      font: font,
    })
  .appendTo(ui.contentView);

  ui.find('.main').set('textColor', 'black');
}
