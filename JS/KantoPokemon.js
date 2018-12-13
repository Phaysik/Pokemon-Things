var pokemonList = []

function KantoLoad() {
  pokemonList = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']),
    new Pokemon(2, 'Ivysaur', ['Grass', 'Poison']),
    new Pokemon(3, 'Venusaur', ['Grass', 'Poison']),
    new Pokemon(4, 'Charmander', ['Fire']),
    new Pokemon(5, 'Charmeleon', ['Fire']),
    new Pokemon(6, 'Charizard', ['Fire', 'Flying']),
    new Pokemon(7, 'Squirtle', ['Water']),
    new Pokemon(8, 'Wartortle', ['Water']),
    new Pokemon(9, 'Blastoise', ['Water']),
    new Pokemon(10, 'Caterpie', ['Bug']),
    new Pokemon(11, 'Metapod', ['Bug']),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying']),
    new Pokemon(13, 'Weedle', ['Bug', 'Poison']),
    new Pokemon(14, 'Kakuna', ['Bug', 'Poison']),
    new Pokemon(15, 'Beedrill', ['Bug', 'Poison']),
    new Pokemon(16, 'Pidgey', ['Normal', 'Flying']),
    new Pokemon(17, 'Pidgeotto', ['Normal', 'Flying']),
    new Pokemon(18, 'Pidgeot', ['Normal', 'Flying']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
    new Pokemon(23, 'Ekans', ['Poison']),
    new Pokemon(24, 'Arbok', ['Poison']),
    new Pokemon(25, 'Pikachu', ['Electric']),
    new Pokemon(26, 'Raichu', ['Electric']),
    new Pokemon(27, 'Sandshrew', ['Ground']),
    new Pokemon(28, 'Sandslash', ['Ground']),
    new Pokemon(29, 'Nidoran♀', ['Poison']),
    new Pokemon(30, 'Nidorina', ['Poison']),
    new Pokemon(31, 'Nidoqueen', ['Poison', 'Ground']),
    new Pokemon(32, 'Nidoran♂', ['Poison']),
    new Pokemon(33, 'Nidorino', ['Poison']),
    new Pokemon(34, 'Nidoking', ['Poison', 'Ground']),
    new Pokemon(35, 'Clefairy', ['Fairy']),
    new Pokemon(36, 'Clefable', ['Fairy']),
    new Pokemon(37, 'Vulpix', ['Fire']),
    new Pokemon(38, 'Ninetales', ['Fire']),
    new Pokemon(39, 'Jigglypuff', ['Normal', 'Fairy']),
    new Pokemon(40, 'Wigglytuff', ['Normal', 'Fairy']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(43, 'Oddish', ['Grass', 'Poison']),
    new Pokemon(44, 'Gloom', ['Grass', 'Poison']),
    new Pokemon(45, 'Vileplume', ['Grass', 'Poison']),
    new Pokemon(46, 'Paras', ['Bug', 'Grass']),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass']),
    new Pokemon(48, 'Venonat', ['Bug', 'Poison']),
    new Pokemon(49, 'Venomoth', ['Bug', 'Poison']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(52, 'Meowth', ['Normal']),
    new Pokemon(53, 'Persian', ['Normal']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(56, 'Mankey', ['Fighting']),
    new Pokemon(57, 'Primeape', ['Fighting']),
    new Pokemon(58, 'Growlithe', ['Fire']),
    new Pokemon(59, 'Arcanine', ['Fire']),
    new Pokemon(60, 'Poliwag', ['Water']),
    new Pokemon(61, 'Poliwhirl', ['Water']),
    new Pokemon(62, 'Poliwrath', ['Water', 'Fighting']),
    new Pokemon(63, 'Abra', ['Psychic']),
    new Pokemon(64, 'Kadabra', ['Psychic']),
    new Pokemon(65, 'Alakazam', ['Psychic']),
    new Pokemon(66, 'Machop', ['Fighting']),
    new Pokemon(67, 'Machoke', ['Fighting']),
    new Pokemon(68, 'Machamp', ['Fighting']),
    new Pokemon(69, 'Bellsprout', ['Grass', 'Poison']),
    new Pokemon(70, 'Weepinbell', ['Grass', 'Poison']),
    new Pokemon(71, 'Victreebel', ['Grass', 'Poison']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(74, 'Geodude', ['Rock', 'Ground']),
    new Pokemon(75, 'Graveler', ['Rock', 'Ground']),
    new Pokemon(76, 'Golem', ['Rock', 'Ground']),
    new Pokemon(77, 'Ponyta', ['Fire']),
    new Pokemon(78, 'Rapidash', ['Fire']),
    new Pokemon(79, 'Slowpoke', ['Water', 'Psychic']),
    new Pokemon(80, 'Slowbro', ['Water', 'Psychic']),
    new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
    new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
    new Pokemon(83, "Farfetch" + "\'" + "d", ['Normal', 'Flying']),
    new Pokemon(84, 'Doduo', ['Normal', 'Flying']),
    new Pokemon(85, 'Dodrio', ['Normal', 'Flying']),
    new Pokemon(86, 'Seel', ['Water']),
    new Pokemon(87, 'Dewgong', ['Water', 'Ice']),
    new Pokemon(88, 'Grimer', ['Poison']),
    new Pokemon(89, 'Muk', ['Poison']),
    new Pokemon(90, 'Shellder', ['Water']),
    new Pokemon(91, 'Cloyster', ['Water', 'Ice']),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(95, 'Onix', ['Rock', 'Ground']),
    new Pokemon(96, 'Drowzee', ['Psychic']),
    new Pokemon(97, 'Hypno', ['Psychic']),
    new Pokemon(98, 'Krabby', ['Water']),
    new Pokemon(99, 'Kingler', ['Water']),
    new Pokemon(100, 'Voltorb', ['Electric']),
    new Pokemon(101, 'Electrode', ['Electric']),
    new Pokemon(102, 'Exeggcute', ['Grass', 'Psychic']),
    new Pokemon(103, 'Exeggutor', ['Grass', 'Psychic']),
    new Pokemon(104, 'Cubone', ['Ground']),
    new Pokemon(105, 'Marowak', ['Ground']),
    new Pokemon(106, 'Hitmonlee', ['Fighting']),
    new Pokemon(107, 'Hitmonchan', ['Fighting']),
    new Pokemon(108, 'Lickitung', ['Normal']),
    new Pokemon(109, 'Koffing', ['Poison']),
    new Pokemon(110, 'Weezing', ['Poison']),
    new Pokemon(111, 'Rhyhorn', ['Ground', 'Rock']),
    new Pokemon(112, 'Rhydon', ['Ground', 'Rock']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(114, 'Tangela', ['Grass']),
    new Pokemon(115, 'Kangaskhan', ['Normal']),
    new Pokemon(116, 'Horsea', ['Water']),
    new Pokemon(117, 'Seadra', ['Water']),
    new Pokemon(118, 'Goldeen', ['Water']),
    new Pokemon(119, 'Seaking', ['Water']),
    new Pokemon(120, 'Staryu', ['Water']),
    new Pokemon(121, 'Starmie', ['Water', 'Psychic']),
    new Pokemon(122, 'Mr. Mime', ['Psychic', 'Fairy']),
    new Pokemon(123, 'Scyther', ['Bug', 'Flying']),
    new Pokemon(124, 'Jynx', ['Ice', 'Psychic']),
    new Pokemon(125, 'Electabuzz', ['Electric']),
    new Pokemon(126, 'Magmar', ['Fire']),
    new Pokemon(127, 'Pinsir', ['Bug']),
    new Pokemon(128, 'Tauros', ['Normal']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(131, 'Lapras', ['Water']),
    new Pokemon(132, 'Ditto', ['Normal']),
    new Pokemon(133, 'Eevee', ['Normal']),
    new Pokemon(134, 'Vaporeon', ['Water']),
    new Pokemon(135, 'Jolteon', ['Electric']),
    new Pokemon(136, 'Flareon', ['Fire']),
    new Pokemon(137, 'Porygon', ['Normal']),
    new Pokemon(138, 'Omanyte', ['Rock', 'Water']),
    new Pokemon(139, 'Omastar', ['Rock', 'Water']),
    new Pokemon(140, 'Kabuto', ['Rock', 'Water']),
    new Pokemon(141, 'Kabutops', ['Rock', 'Flying']),
    new Pokemon(142, 'Aerodactyl', ['Rock', 'Flying']),
    new Pokemon(143, 'Snorlax', ['Normal']),
    new Pokemon(144, 'Articuno', ['Ice', 'Flying']),
    new Pokemon(145, 'Zapdos', ['Electric', 'Flying']),
    new Pokemon(146, 'Moltres', ['Fire', 'Flying']),
    new Pokemon(147, 'Dratini', ['Dragon']),
    new Pokemon(148, 'Dragonair', ['Dragon']),
    new Pokemon(149, 'Dragonite', ['Dragon', 'Flying']),
    new Pokemon(150, 'Mewtwo', ['Psychic']),
    new Pokemon(151, 'Mew', ['Psychic']),
  ]
  $('#Center').text("The Kanto Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for (let p of pokemonList) {
    p.loadToPage();
    p.ShowTypes();
  }
}

function loadLetsGo() {
  pokemonList = [
    new Pokemon(1, 'Bulbasaur', ['Grass', 'Poison']),
    new Pokemon(2, 'Ivysaur', ['Grass', 'Poison']),
    new Pokemon(3, 'Venusaur', ['Grass', 'Poison']),
    new Pokemon(4, 'Charmander', ['Fire']),
    new Pokemon(5, 'Charmeleon', ['Fire']),
    new Pokemon(6, 'Charizard', ['Fire', 'Flying']),
    new Pokemon(7, 'Squirtle', ['Water']),
    new Pokemon(8, 'Wartortle', ['Water']),
    new Pokemon(9, 'Blastoise', ['Water']),
    new Pokemon(10, 'Caterpie', ['Bug']),
    new Pokemon(11, 'Metapod', ['Bug']),
    new Pokemon(12, 'Butterfree', ['Bug', 'Flying']),
    new Pokemon(13, 'Weedle', ['Bug', 'Poison']),
    new Pokemon(14, 'Kakuna', ['Bug', 'Poison']),
    new Pokemon(15, 'Beedrill', ['Bug', 'Poison']),
    new Pokemon(16, 'Pidgey', ['Normal', 'Flying']),
    new Pokemon(17, 'Pidgeotto', ['Normal', 'Flying']),
    new Pokemon(18, 'Pidgeot', ['Normal', 'Flying']),
    new Pokemon(19, 'Rattata', ['Normal']),
    new Pokemon(20, 'Raticate', ['Normal']),
    new Pokemon(21, 'Spearow', ['Normal', 'Flying']),
    new Pokemon(22, 'Fearow', ['Normal', 'Flying']),
    new Pokemon(23, 'Ekans', ['Poison']),
    new Pokemon(24, 'Arbok', ['Poison']),
    new Pokemon(25, 'Pikachu', ['Electric']),
    new Pokemon(26, 'Raichu', ['Electric']),
    new Pokemon(27, 'Sandshrew', ['Ground']),
    new Pokemon(28, 'Sandslash', ['Ground']),
    new Pokemon(29, 'Nidoran♀', ['Poison']),
    new Pokemon(30, 'Nidorina', ['Poison']),
    new Pokemon(31, 'Nidoqueen', ['Poison', 'Ground']),
    new Pokemon(32, 'Nidoran♂', ['Poison']),
    new Pokemon(33, 'Nidorino', ['Poison']),
    new Pokemon(34, 'Nidoking', ['Poison', 'Ground']),
    new Pokemon(35, 'Clefairy', ['Fairy']),
    new Pokemon(36, 'Clefable', ['Fairy']),
    new Pokemon(37, 'Vulpix', ['Fire']),
    new Pokemon(38, 'Ninetales', ['Fire']),
    new Pokemon(39, 'Jigglypuff', ['Normal', 'Fairy']),
    new Pokemon(40, 'Wigglytuff', ['Normal', 'Fairy']),
    new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
    new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
    new Pokemon(43, 'Oddish', ['Grass', 'Poison']),
    new Pokemon(44, 'Gloom', ['Grass', 'Poison']),
    new Pokemon(45, 'Vileplume', ['Grass', 'Poison']),
    new Pokemon(46, 'Paras', ['Bug', 'Grass']),
    new Pokemon(47, 'Parasect', ['Bug', 'Grass']),
    new Pokemon(48, 'Venonat', ['Bug', 'Poison']),
    new Pokemon(49, 'Venomoth', ['Bug', 'Poison']),
    new Pokemon(50, 'Diglett', ['Ground']),
    new Pokemon(51, 'Dugtrio', ['Ground']),
    new Pokemon(52, 'Meowth', ['Normal']),
    new Pokemon(53, 'Persian', ['Normal']),
    new Pokemon(54, 'Psyduck', ['Water']),
    new Pokemon(55, 'Golduck', ['Water']),
    new Pokemon(56, 'Mankey', ['Fighting']),
    new Pokemon(57, 'Primeape', ['Fighting']),
    new Pokemon(58, 'Growlithe', ['Fire']),
    new Pokemon(59, 'Arcanine', ['Fire']),
    new Pokemon(60, 'Poliwag', ['Water']),
    new Pokemon(61, 'Poliwhirl', ['Water']),
    new Pokemon(62, 'Poliwrath', ['Water', 'Fighting']),
    new Pokemon(63, 'Abra', ['Psychic']),
    new Pokemon(64, 'Kadabra', ['Psychic']),
    new Pokemon(65, 'Alakazam', ['Psychic']),
    new Pokemon(66, 'Machop', ['Fighting']),
    new Pokemon(67, 'Machoke', ['Fighting']),
    new Pokemon(68, 'Machamp', ['Fighting']),
    new Pokemon(69, 'Bellsprout', ['Grass', 'Poison']),
    new Pokemon(70, 'Weepinbell', ['Grass', 'Poison']),
    new Pokemon(71, 'Victreebel', ['Grass', 'Poison']),
    new Pokemon(72, 'Tentacool', ['Water', 'Poison']),
    new Pokemon(73, 'Tentacruel', ['Water', 'Poison']),
    new Pokemon(74, 'Geodude', ['Rock', 'Ground']),
    new Pokemon(75, 'Graveler', ['Rock', 'Ground']),
    new Pokemon(76, 'Golem', ['Rock', 'Ground']),
    new Pokemon(77, 'Ponyta', ['Fire']),
    new Pokemon(78, 'Rapidash', ['Fire']),
    new Pokemon(79, 'Slowpoke', ['Water', 'Psychic']),
    new Pokemon(80, 'Slowbro', ['Water', 'Psychic']),
    new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
    new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
    new Pokemon(83, "Farfetch" + "\'" + "d", ['Normal', 'Flying']),
    new Pokemon(84, 'Doduo', ['Normal', 'Flying']),
    new Pokemon(85, 'Dodrio', ['Normal', 'Flying']),
    new Pokemon(86, 'Seel', ['Water']),
    new Pokemon(87, 'Dewgong', ['Water', 'Ice']),
    new Pokemon(88, 'Grimer', ['Poison']),
    new Pokemon(89, 'Muk', ['Poison']),
    new Pokemon(90, 'Shellder', ['Water']),
    new Pokemon(91, 'Cloyster', ['Water', 'Ice']),
    new Pokemon(92, 'Gastly', ['Ghost', 'Poison']),
    new Pokemon(93, 'Haunter', ['Ghost', 'Poison']),
    new Pokemon(94, 'Gengar', ['Ghost', 'Poison']),
    new Pokemon(95, 'Onix', ['Rock', 'Ground']),
    new Pokemon(96, 'Drowzee', ['Psychic']),
    new Pokemon(97, 'Hypno', ['Psychic']),
    new Pokemon(98, 'Krabby', ['Water']),
    new Pokemon(99, 'Kingler', ['Water']),
    new Pokemon(100, 'Voltorb', ['Electric']),
    new Pokemon(101, 'Electrode', ['Electric']),
    new Pokemon(102, 'Exeggcute', ['Grass', 'Psychic']),
    new Pokemon(103, 'Exeggutor', ['Grass', 'Psychic']),
    new Pokemon(104, 'Cubone', ['Ground']),
    new Pokemon(105, 'Marowak', ['Ground']),
    new Pokemon(106, 'Hitmonlee', ['Fighting']),
    new Pokemon(107, 'Hitmonchan', ['Fighting']),
    new Pokemon(108, 'Lickitung', ['Normal']),
    new Pokemon(109, 'Koffing', ['Poison']),
    new Pokemon(110, 'Weezing', ['Poison']),
    new Pokemon(111, 'Rhyhorn', ['Ground', 'Rock']),
    new Pokemon(112, 'Rhydon', ['Ground', 'Rock']),
    new Pokemon(113, 'Chansey', ['Normal']),
    new Pokemon(114, 'Tangela', ['Grass']),
    new Pokemon(115, 'Kangaskhan', ['Normal']),
    new Pokemon(116, 'Horsea', ['Water']),
    new Pokemon(117, 'Seadra', ['Water']),
    new Pokemon(118, 'Goldeen', ['Water']),
    new Pokemon(119, 'Seaking', ['Water']),
    new Pokemon(120, 'Staryu', ['Water']),
    new Pokemon(121, 'Starmie', ['Water', 'Psychic']),
    new Pokemon(122, 'Mr. Mime', ['Psychic', 'Fairy']),
    new Pokemon(123, 'Scyther', ['Bug', 'Flying']),
    new Pokemon(124, 'Jynx', ['Ice', 'Psychic']),
    new Pokemon(125, 'Electabuzz', ['Electric']),
    new Pokemon(126, 'Magmar', ['Fire']),
    new Pokemon(127, 'Pinsir', ['Bug']),
    new Pokemon(128, 'Tauros', ['Normal']),
    new Pokemon(129, 'Magikarp', ['Water']),
    new Pokemon(130, 'Gyarados', ['Water', 'Flying']),
    new Pokemon(131, 'Lapras', ['Water']),
    new Pokemon(132, 'Ditto', ['Normal']),
    new Pokemon(133, 'Eevee', ['Normal']),
    new Pokemon(134, 'Vaporeon', ['Water']),
    new Pokemon(135, 'Jolteon', ['Electric']),
    new Pokemon(136, 'Flareon', ['Fire']),
    new Pokemon(137, 'Porygon', ['Normal']),
    new Pokemon(138, 'Omanyte', ['Rock', 'Water']),
    new Pokemon(139, 'Omastar', ['Rock', 'Water']),
    new Pokemon(140, 'Kabuto', ['Rock', 'Water']),
    new Pokemon(141, 'Kabutops', ['Rock', 'Flying']),
    new Pokemon(142, 'Aerodactyl', ['Rock', 'Flying']),
    new Pokemon(143, 'Snorlax', ['Normal']),
    new Pokemon(144, 'Articuno', ['Ice', 'Flying']),
    new Pokemon(145, 'Zapdos', ['Electric', 'Flying']),
    new Pokemon(146, 'Moltres', ['Fire', 'Flying']),
    new Pokemon(147, 'Dratini', ['Dragon']),
    new Pokemon(148, 'Dragonair', ['Dragon']),
    new Pokemon(149, 'Dragonite', ['Dragon', 'Flying']),
    new Pokemon(150, 'Mewtwo', ['Psychic']),
    new Pokemon(151, 'Mew', ['Psychic']),
    new Pokemon(808, 'Meltan', ['Steel']),
    new Pokemon(809, 'Melmetal', ['Steel'])
  ]
  $('#Center').text("The Expansion Pokémon List by Pokédex Number");
  $('#pokemon-container').empty();
  for (let p of pokemonList) {
    p.loadToPage();
    p.ShowTypes();
  }
}
