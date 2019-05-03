/* eslint-disable no-unused-vars */
/**
 * @file Loads the entire Unova Pokedex
 * @author Matthew Moore
 * @version 1.0.0
 * @since 1.0.0
 */

/**
  *  Index within the List to be used with other functions
  *  @type {!number}
  *  @default 0
  */
let index = 0;
/**
  *  Array to hold the Pokemon objects
  *  @constant
  *  @type {!Array}
  *  @default []
  */
const List = [];
/**
 * Array to hold types of Pokemon
 * @type {!Array}
 * @default []
 */
let splitVal = [];
/**
 * Array to hold types of Pokemon if splitVal has a length of two
 * @type {!Array}
 * @default []
 */
let types = [];

/**
 * Call a database, or a JSON file if database fails, and get Pokemon information
 * @function UnovaOnLoad
 */
window.onload = function() {
  $('#Center').text('The Unova Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  /**
  * Call the database to get Unova Pokemon information
  * @function UnovaAjax
  * @param   {string} data A JSON encoded list of Unova pokemon
  */
  $.ajax('pkdata.php?content=unova').then((data) => {
    try {
    /**
     *  A JSON decoded array of Pokemon infromation
     *  @type {!Array}
     */
      data = JSON.parse(data);
      for (let i = 0; i < data.length; i++) {
        splitVal = data[i][2].replace(/\n/gi, '').replace(/\r/gi, '').split(' ');
        if (splitVal.length === 1) {
          List.push(new Pokemon(data[i][0], data[i][1], splitVal));
        } else {
          types = [splitVal[0], splitVal[1]];
          List.push(new Pokemon(data[i][0], data[i][1], types));
        }
      }
    } catch (err) {
      throw err;
    }
  }).catch((xhr, status, error) => {
  /**
  * Gets the Unova json file if the database query fails
  * @function UnovaJSON
  *
  * @param {Array} data A list of objects with the Pokemon's name, type, and id
  *
  * @return {Array} An array of all the Unova Pokemon
  */
    return $.getJSON('../JSON/unova.json', function(data) {
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
