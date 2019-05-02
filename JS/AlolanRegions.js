/* eslint-disable no-unused-vars */
/**
 * Takes a string and changes the first character of each word to be uppercase
 * Will load all the Pokemon from the Melemele reigon to the page
 */
const loadMelemele = () => {
  /**
  *  @type {!number}
  *  @default [0]
  */
  index = 0;
  /**
  *  @type {!Array}
  *  @default [[]]
  */
  List = [];
  $('#Center').text('The Melemele Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=melemele');
};

/**
 * Takes a string and changes the first character of each word to be uppercase
 * Will load all the Pokemon from the Akala reigon to the page
 */
const loadAkala = () => {
  /**
  *  @type {!number}
  *  @default [0]
  */
  index = 0;
  /**
  *  @type {!Array}
  *  @default [[]]
  */
  List = [];
  $('#Center').text('The Akala Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=akala');
};

/**
 * Takes a string and changes the first character of each word to be uppercase
 * Will load all the Pokemon from the Ulaula reigon to the page
 */
const loadUlaula = () => {
  /**
  *  @type {!number}
  *  @default [0]
  */
  index = 0;
  /**
  *  @type {!Array}
  *  @default [[]]
  */
  List = [];
  $('#Center').text('The Ulaula Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=ulaula');
};

/**
 * Takes a string and changes the first character of each word to be uppercase
 * Will load all the Pokemon from the Poni reigon to the page
 */
const loadPoni = () => {
  /**
  *  @type {!number}
  *  @default [0]
  */
  index = 0;
  /**
  *  @type {!Array}
  *  @default [[]]
  */
  List = [];
  $('#Center').text('The Poni Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  AJAX('content=poni');
};

/**
 * @param   {string} region A string that contains a query to be used when calling a database
 */
const AJAX = (region) => {
  /**
  * @function jQueryAjax
  * @param   {string} data A JSON encoded list of Pokemon
  */
  $.ajax('pkdata.php?' + region).then((data) => {
    try {
      /**
      *  @type {!Array}
      */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        /**
        *  @constant {!Array}
        */
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
    /**
    * @return {Array} An array of all the pokemon of that specified region
    */
    return $.getJSON(`../JSON/${region.split('=')[1]}.json`, function(data) {
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
};
