const {ImageView, ui} = require('tabris');

createImageView('fit');
ui.statusBar.background = '#dbc73b'
ui.contentView.background = '#000';

function createImageView(scaleMode) {
  new ImageView({
    left: 10, top: 'prev() 10', width: 350, height: 500,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/spaceUI.png?raw=true',
    scaleMode: scaleMode
  }).appendTo(ui.contentView);
}
