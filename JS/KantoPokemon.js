/* eslint-disable no-unused-vars */
let index = 0;
let List = [];

window.onload = function() {
  loadKanto();
};

function loadKanto() {
  index = 0;
  display = false;
  List = [];
  $('#Center').text('The Kanto Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=kanto');
}

function loadLetsGo() {
  index = 0;
  display = false;
  List = [];
  $('#Center').text('The Expansion Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=LG');
}

function AJAX(game) {
  $.ajax('pkdata.php?' + game).then((data) => {
    try {
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        const splitVal = data[i][2].replace(/\n/gi, '').split(' ');
        if (splitVal.length === 1) {
          List.push(new Pokemon(data[i][0], data[i][1], splitVal));
        } else {
          const types = [splitVal[0], splitVal[1]];
          List.push(new Pokemon(data[i][0], data[i][1], types));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
    return $.getJSON('../JSON/kanto.json', function(data) {
      for (let i = 0; i < data['pokemon'].length; i++) {
        List.push(new Pokemon(data['pokemon'][i].id, data['pokemon'][i].name, data['pokemon'][i].types));
      }
    });
  }).always(() => {
    for (index; index < List.length; index++) {
      if ($(window).scrollTop() === $(document).height() - $(window).height()) {
        List[index].loadToPage();
        List[index].showTypes();
      } else {
        break;
      }
    }
  });
}
