/* eslint-disable no-unused-vars */
/**
 * Takes a string and changes the first character of each word to be uppercase
 * @example
 * var a = 'hello world';
 *
 * var titleCased = toTitleCase(a); // titleCased is set to 'Hello World'
 *
 * @param   {string} phrase The string
 *
 * @return {string} A string with each word having an uppercase letter
 */
const toTitleCase = (phrase) => {
  return phrase.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

/**
 * Searches through a list of pokemon and then display their information to the page
 */
const PokemonSearch = () => {
  $(document).ready(function() {
  /**
  * @type {!string}
  */
    let value = $('#myInput').val().toLowerCase();
    $('#pokemon-container').empty();

    value = (value.includes(':')) ? value.replace(/:/, '꞉') : value;

    if (value !== '') {
      for (let g = 0; g < List.length; g++) {
        if (List[g].name.toLowerCase().includes(value) || (List[g].types.length === 1 && List[g].types[0].toLowerCase().indexOf(value) >= 0) ||
          (List[g].types.length === 2 && (List[g].types[0].toLowerCase().indexOf(value) >= 0 || List[g].types[1].toLowerCase().indexOf(value) >= 0))) {
          List[g].loadToPage();
          List[g].showTypes();
        }
      }
    } else {
      loadSeen();
    }
  });
};

/**
 * Searches through a list of items and then display their information to the page
 */
const ItemSearch = () => {
  $(document).ready(function() {
  /**
  * @constant {!string}
  */
    const value = $('#myInput').val().toLowerCase();
    $('#items-container').empty();

    if (value !== '') {
      for (let g = 0; g < List.length; g++) {
        if (List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].id.toLowerCase().indexOf(value) >= 0 || List[g].category.toLowerCase().indexOf(value) >= 0
            || List[g].description.toLowerCase().indexOf(value) >= 0) {
          List[g].loadItemsToPage();
        }
      }
    } else {
      loadSeen();
    }
  });
};

/**
 * Searches through a list of moves and then display their information to the page
 */
const MoveSearch = () => {
  $(document).ready(function() {
  /**
  * @constant {!string}
  */
    const value = $('#myInput').val().toLowerCase();
    $('#moves-container').empty().append(`
      <div class="container mt-4"><div class="row"><div class="col-5"><h4 class="MovesText">Name</h4></div><div class="col-3">
      <h4 class="MovesText" class="pr-3">TM</h4></div><div class="col-3"><h4 class="MovesText" class="pr-3">
      Type</h4></div></div><div style="width=100%" id="moves"></div></div>
    `);

    if (value !== '') {
      for (let g = 0; g < moves[generation - 1]; g++) {
        if (typeof List[g].name === 'object') {
          if (List[g].imgName.toLowerCase().indexOf(value) >= 0 || List[g].name[0].toLowerCase().indexOf(value) >= 0 ||
          List[g].name[1].toLowerCase().indexOf(value) >= 0 || List[g].type[0].toLowerCase().indexOf(value) >= 0 || List[g].type[1].toLowerCase().indexOf(value) >= 0) {
            List[g].loadMovesToPage('#moves');
          }
        } else if (List[g].imgName.toLowerCase().indexOf(value) >= 0 || List[g].name.toLowerCase().indexOf(value) >= 0 || List[g].type.toLowerCase().indexOf(value) >= 0) {
          List[g].loadMovesToPage('#moves');
        }
      }
    } else {
      loadSeen();
    }
  });
};
