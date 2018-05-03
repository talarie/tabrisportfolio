/*
  TabFolder, Tab and WebView
  @version:2.4
  Snippet url:
  -  http://
  References:
  - https://tabrisjs.com/documentation/latest/api/TabFolder.html
*/

const {ScrollView, CheckBox, Picker, RadioButton, Slider, Switch, Composite, Button, Tab, TextInput, TabFolder, TextView, ImageView, ui, app} = require('tabris');

ui.statusBar.background = '#dbc73b';

app.registerFont('Futura', 'https://github.com/talarie/tabrisportfolio/blob/master/Futura.ttc?raw=true');
let font = '30px Futura';

let tabFolder = new TabFolder({
  left: 0, top: 0, right: 0, bottom: 0,
}).appendTo(ui.contentView);


let tabHome = new Tab({
    background: '#fff',
    title: 'Home', // converted to upper-case on Android
    image: {src: 'https://github.com/talarie/tabrisportfolio/blob/master/ic_home_black_24dp_1x.png?raw=true,'},
  }).appendTo(tabFolder);


new ImageView({
    width: 350, height: 500, centerX: 0, centerY: 0,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/plutoBadge02.png?raw=true',
    scaleMode: 'fill'
  }).appendTo(tabHome);


let tabTwo = new Tab({
    background: '#000',
    title: 'Details', // converted to upper-case on Android
    image: {src: 'https://github.com/talarie/tabrisportfolio/blob/master/ic_list_black_24dp_1x.png?raw=true,'},
  }).appendTo(tabFolder);

new ImageView({
    width: 400, height: 550, centerX: 0, centerY: 0,
    image: 'https://github.com/talarie/tabrisportfolio/blob/master/spaceUIFinal.png?raw=true',
    scaleMode: 'fill'
  }).appendTo(tabTwo);

let tabThree = new Tab({
    background: '#fff',
    title: 'Reservation', // converted to upper-case on Android
    image: {src: 'https://github.com/talarie/tabrisportfolio/blob/master/ic_check_circle_black_24dp_1x.png?raw=true,'},
  }).appendTo(tabFolder);
















let scrollView = new ScrollView({left: 0, top: 0, right: 0, bottom: 0}).appendTo(tabThree);

const PLANETS = ['Pluto'];
const PODOPTIONS = ['Dark Pod', 'Light Pod'];

new TextView({
  id: 'nameLabel',
  alignment: 'left',
  text: ' Full Name:'
}).appendTo(scrollView);

new TextInput({
  id: 'nameInput',
  message: 'Full Name'
}).appendTo(scrollView);

new TextView({
  id: 'passengerNumberLabel',
  text: 'Passenger Number:'
}).appendTo(scrollView);

new TextInput({
  id: 'passengerNumberInput',
  keyboard: 'number',
  message: 'Passenger Number'
}).appendTo(scrollView);

new TextView({
  id: 'passcodeLabel',
  text: 'LifePod Passcode'
}).appendTo(scrollView);

new TextInput({
  id: 'passcodeInput',
  type: 'password',
  message: 'Passcode'
}).appendTo(scrollView);

new TextView({
  id: 'planetLabel',
  text: 'Planet:'
}).appendTo(scrollView);

new Picker({
  id: 'planetPicker',
  itemCount: PLANETS.length,
  itemText: index => PLANETS[index]
}).appendTo(scrollView);

new TextView({
  id: 'podLabel',
  text: 'Pod:'
}).appendTo(scrollView);

new Picker({
  id: 'podPicker',
  itemCount: PODOPTIONS.length,
  itemText: index => PODOPTIONS[index]
}).appendTo(scrollView);

new TextView({
  id: 'goopLabel',
  text: 'Goop:'
}).appendTo(scrollView);

new RadioButton({
  id: 'blueGoop',
  text: 'Blue'
}).appendTo(scrollView);

new RadioButton({
  id: 'orangeGoop',
  text: 'Orange'
}).appendTo(scrollView);

new RadioButton({
  id: 'anyGoop',
  text: "Don't care",
  checked: true
}).appendTo(scrollView);

new Composite({
  id: 'luggagePanel'
}).append(
  new TextView({
    id: 'luggageLabel',
    text: 'Passenger Weight:'
  })
).append(
  new TextView({
    id: 'luggageWeight',
    text: '0 Kg'
  })
).append(
  new Slider({
    id: 'luggageSlider'
  }).on('selectionChanged', ({value}) => {
    scrollView.find('#luggageWeight').set('text', value + ' Kg');
  })
).appendTo(scrollView);








new CheckBox({
  id: 'petChoice',
  text: 'Pet Included'
}).appendTo(scrollView);

new Composite({
  id: 'insurancePanel'
}).append(
  new TextView({
    id: 'insuranceLabel',
    text: 'Human Life Insurance'
  })
).append(
  new Switch({
    id: 'insuranceSwitch'
  })
).appendTo(scrollView);

new Button({
  id: 'reservationButton',
  text: 'Place Reservation',
  background: '#dbc73b',
  textColor: 'white'
}).on('select', () => {
  updateMessage();
}).appendTo(scrollView);

let message = new TextView({
  left: 10, right: 10, top: '#reservationButton 10'
}).appendTo(scrollView);

scrollView.apply({
  '#nameLabel': {left: 10, top: 18, width: 120},
  '#nameInput': {left: '#nameLabel 10', right: 10, baseline: '#nameLabel'},
  '#passengerNumberLabel': {left: 10, top: '#nameLabel 18', width: 120},
  '#passengerNumberInput': {left: '#passengerNumberLabel 10', right: 10, baseline: '#passengerNumberLabel'},
  '#passcodeLabel': {left: 10, top: '#passengerNumberLabel 18', width: 120},
  '#passcodeInput': {left: '#passcodeLabel 10', right: 10, baseline: '#passcodeLabel'},
  '#planetLabel': {left: 10, top: '#passcodeLabel 18', width: 120},
  '#planetPicker': {left: '#planetLabel 10', right: 10, baseline: '#planetLabel'},
  '#goopLabel': {left: 10, top: '#podLabel 18', width: 120},
  '#blueGoop': {left: '#goopLabel 10', right: 10, baseline: '#goopLabel'},
  '#orangeGoop': {left: '#goopLabel 10', right: 10, top: '#goopLabel 10'},
  '#podLabel': {left: 10, top: '#planetLabel 18', width: 120},
  '#podPicker': {left: '#podLabel 10', right: 10, baseline: '#podLabel'},
  '#anyGoop': {left: '#goopLabel 10', right: 10, top: '#orangeGoop 10'},
  '#luggagePanel': {left: 10, top: '#anyGoop 18', right: 10},
  '#luggageLabel': {left: 0, centerY: 0, width: 120},
  '#luggageWeight': {right: 10, centerY: 0, width: 50},
  '#luggageSlider': {left: '#luggageLabel 10', right: '#luggageWeight 10', centerY: 0},
  '#petChoice': {left: '#goopLabel 10', right: 10, top: '#luggagePanel 10'},
  '#insurancePanel': {left: 10, top: '#petChoice 10', right: 10},
  '#insuranceLabel': {left: 0, centerY: 0, width: 120},
  '#insuranceSwitch': {left: '#insuranceLabel 10', centerY: 0},
  '#reservationButton': {left: 10, right: 10, top: '#insurancePanel 18'}
});

function updateMessage() {
  message.text = [
    'Flight booked for: ' + scrollView.children('#nameInput').first().text,
    'No: ' + scrollView.children('#passengerNumberInput').first().text,
    'Planet: ' + PLANETS[scrollView.children('#planetPicker').first().selectionIndex],
    'LifePod: ' + createPodSelection(),
    'Passcode: ' + scrollView.children('#passcodeInput').first().text,
    'Goop: ' + PODOPTIONS[scrollView.children('#podPicker').first().selectionIndex],
    'Passenger Weight: ' + createWeight(),
    'Pet: ' + createPet(),
    'Human Life Insurance: ' + createLifeInsurance()
  ].join('\n') + '\n';
}

function createPodSelection() {
  let seating = 'Anywhere';
  scrollView.children('RadioButton').forEach((button) => {
    if (button.checked) {
      seating = button.text;
    }
  });
  return seating;
}

function createWeight() {
  let panel = scrollView.children('#luggagePanel');
  return panel.children('#luggageSlider').first().selection + ' lbs';
}

function createPet() {
  return scrollView.children('#petChoice').first().checked ? 'Included' : 'Not Included';
}

function createLifeInsurance() {
  let panel = scrollView.children('#insurancePanel');
  let info = panel.children('#insuranceSwitch').first().checked ? 'Yes' : 'No';
  return info;
}
