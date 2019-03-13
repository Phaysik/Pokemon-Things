/* eslint-disable no-unused-vars */
const pokemonList = [
  new Pokemon(494, 'Victini', ['Psychic', 'Fire']),
  new Pokemon(495, 'Snivy', ['Grass']),
  new Pokemon(496, 'Servine', ['Grass']),
  new Pokemon(497, 'Serperior', ['Grass']),
  new Pokemon(498, 'Tepig', ['Fire']),
  new Pokemon(499, 'Pignite', ['Fire', 'Fighting']),
  new Pokemon(500, 'Emboar', ['Fire', 'Fighting']),
  new Pokemon(501, 'Oshawott', ['Water']),
  new Pokemon(502, 'Dewott', ['Water']),
  new Pokemon(503, 'Samurott', ['Water']),
  new Pokemon(504, 'Patrat', ['Normal']),
  new Pokemon(505, 'Watchog', ['Normal']),
  new Pokemon(509, 'Purrloin', ['Dark']),
  new Pokemon(510, 'Liepard', ['Dark']),
  new Pokemon(519, 'Pidove', ['Normal', 'Flying']),
  new Pokemon(520, 'Tranquill', ['Normal', 'Flying']),
  new Pokemon(521, 'Unfezant', ['Normal', 'Flying']),
  new Pokemon(540, 'Sewaddle', ['Bug', 'Grass']),
  new Pokemon(541, 'Swadloon', ['Bug', 'Grass']),
  new Pokemon(542, 'Leavanny', ['Bug', 'Grass']),
  new Pokemon(191, 'Sunkern', ['Grass']),
  new Pokemon(192, 'Sunflora', ['Grass']),
  new Pokemon(506, 'Lillipup', ['Normal']),
  new Pokemon(507, 'Herdier', ['Normal']),
  new Pokemon(508, 'Stoutland', ['Normal']),
  new Pokemon(179, 'Mareep', ['Electric']),
  new Pokemon(180, 'Flaaffy', ['Electric']),
  new Pokemon(181, 'Ampharos', ['Electric']),
  new Pokemon(54, 'Psyduck', ['Water']),
  new Pokemon(55, 'Golduck', ['Water']),
  new Pokemon(298, 'Azurill', ['Normal', 'Fairy']),
  new Pokemon(183, 'Marill', ['Water', 'Fairy']),
  new Pokemon(184, 'Azumarill', ['Water', 'Fairy']),
  new Pokemon(447, 'Riolu', ['Fighting']),
  new Pokemon(448, 'Lucario', ['Fighting', 'Steel']),
  new Pokemon(206, 'Dunsparce', ['Normal']),
  new Pokemon(531, 'Audino', ['Normal']),
  new Pokemon(511, 'Pansage', ['Grass']),
  new Pokemon(512, 'Simisage', ['Grass']),
  new Pokemon(513, 'Pansear', ['Fire']),
  new Pokemon(514, 'Simisear', ['Fire']),
  new Pokemon(515, 'Panpour', ['Water']),
  new Pokemon(516, 'Simipour', ['Water']),
  new Pokemon(543, 'Venipede', ['Bug', 'Poison']),
  new Pokemon(544, 'Whirlipede', ['Bug', 'Poison']),
  new Pokemon(545, 'Scolipede', ['Bug', 'Poison']),
  new Pokemon(109, 'Koffing', ['Poison']),
  new Pokemon(110, 'Weezing', ['Poison']),
  new Pokemon(81, 'Magnemite', ['Electric', 'Steel']),
  new Pokemon(82, 'Magneton', ['Electric', 'Steel']),
  new Pokemon(462, 'Magnezone', ['Bug', 'Flying']),
  new Pokemon(58, 'Growlithe', ['Fire']),
  new Pokemon(59, 'Arcanine', ['Fire']),
  new Pokemon(240, 'Magby', ['Fire']),
  new Pokemon(126, 'Magmar', ['Fire']),
  new Pokemon(467, 'Magmortar', ['Fire']),
  new Pokemon(239, 'Elekid', ['Electric']),
  new Pokemon(125, 'Electabuzz', ['Electric']),
  new Pokemon(466, 'Electivire', ['Electric']),
  new Pokemon(19, 'Rattata', ['Normal']),
  new Pokemon(20, 'Raticate', ['Normal']),
  new Pokemon(41, 'Zubat', ['Poison', 'Flying']),
  new Pokemon(42, 'Golbat', ['Poison', 'Flying']),
  new Pokemon(169, 'Crobat', ['Poison', 'Flying']),
  new Pokemon(88, 'Grimer', ['Poison']),
  new Pokemon(89, 'Muk', ['Poison']),
  new Pokemon(527, 'Woobat', ['Psychic', 'Flying']),
  new Pokemon(528, 'Swoobat', ['Psychic', 'Flying']),
  new Pokemon(524, 'Roggenrola', ['Rock']),
  new Pokemon(525, 'Boldore', ['Rock']),
  new Pokemon(526, 'Gigalith', ['Rock']),
  new Pokemon(95, 'Onix', ['Rock', 'Ground']),
  new Pokemon(208, 'Steelix', ['Steel', 'Ground']),
  new Pokemon(532, 'Timburr', ['Fighting']),
  new Pokemon(533, 'Gurdurr', ['Fighting']),
  new Pokemon(534, 'Conkeldurr', ['Fighting']),
  new Pokemon(529, 'Drilbur', ['Ground']),
  new Pokemon(530, 'Excadrill', ['Ground', 'Steel']),
  new Pokemon(300, 'Skitty', ['Normal']),
  new Pokemon(301, 'Delcatty', ['Normal']),
  new Pokemon(427, 'Buneary', ['Normal']),
  new Pokemon(428, 'Lopunny', ['Normal']),
  new Pokemon(546, 'Cottonee', ['Grass']),
  new Pokemon(547, 'Whimsicott', ['Grass']),
  new Pokemon(548, 'Petilil', ['Grass']),
  new Pokemon(549, 'Lilligant', ['Grass']),
  new Pokemon(517, 'Munna', ['Psychic']),
  new Pokemon(518, 'Musharna', ['Psychic']),
  new Pokemon(173, 'Cleffa', ['Normal']),
  new Pokemon(35, 'Clefairy', ['Normal']),
  new Pokemon(36, 'Clefable', ['Normal']),
  new Pokemon(133, 'Eevee', ['Normal']),
  new Pokemon(134, 'Vaporeon', ['Water']),
  new Pokemon(135, 'Jolteon', ['Electric']),
  new Pokemon(136, 'Flareon', ['Fire']),
  new Pokemon(196, 'Espeon', ['Psychic']),
  new Pokemon(197, 'Umbreon', ['Dark']),
  new Pokemon(470, 'Leafeon', ['Grass']),
  new Pokemon(371, 'Glaceon', ['Ice']),
  new Pokemon(551, 'Sandile', ['Ground', 'Dark']),
  new Pokemon(552, 'Krokorok', ['Ground', 'Dark']),
  new Pokemon(553, 'Krookodile', ['Ground', 'Dark']),
  new Pokemon(554, 'Darumaka', ['Fire']),
  new Pokemon(555, 'Darmanitan', ['Fire']),
  new Pokemon(550, 'Basculin', ['Water']),
  new Pokemon(568, 'Trubbish', ['Poison']),
  new Pokemon(569, 'Garbodor', ['Poison']),
  new Pokemon(572, 'Minccino', ['Normal']),
  new Pokemon(573, 'Cinccino', ['Normal']),
  new Pokemon(627, 'Rufflet', ['Normal', 'Flying']),
  new Pokemon(628, 'Braviary', ['Normal', 'Flying']),
  new Pokemon(629, 'Vullaby', ['Dark', 'Flying']),
  new Pokemon(630, 'Mandibuzz', ['Dark', 'Flying']),
  new Pokemon(27, 'Sandshrew', ['Ground']),
  new Pokemon(28, 'Sandslash', ['Ground']),
  new Pokemon(557, 'Dwebble', ['Bug', 'Rock']),
  new Pokemon(558, 'Crustle', ['Bug', 'Rock']),
  new Pokemon(559, 'Scraggy', ['Dark', 'Fighting']),
  new Pokemon(560, 'Scrafty', ['Dark', 'Fighting']),
  new Pokemon(556, 'Maractus', ['Grass']),
  new Pokemon(561, 'Sigilyph', ['Psychic', 'Flying']),
  new Pokemon(328, 'Trapinch', ['Ground']),
  new Pokemon(329, 'Vibrava', ['Ground', 'Dragon']),
  new Pokemon(330, 'Flygon', ['Ground', 'Dragon']),
  new Pokemon(562, 'Yamask', ['Ghost']),
  new Pokemon(563, 'Cofagrigus', ['Ghost']),
  new Pokemon(564, 'Tirtouga', ['Water', 'Rock']),
  new Pokemon(565, 'Carracosta', ['Water', 'Rock']),
  new Pokemon(566, 'Archen', ['Rock', 'Flying']),
  new Pokemon(567, 'Archeops', ['Rock', 'Flying']),
  new Pokemon(599, 'Klink', ['Steel']),
  new Pokemon(600, 'Klang', ['Steel']),
  new Pokemon(601, 'Klinklang', ['Steel']),
  new Pokemon(406, 'Budew', ['Grass', 'Poison']),
  new Pokemon(315, 'Roselia', ['Grass', 'Poison']),
  new Pokemon(407, 'Roserade', ['Grass', 'Poison']),
  new Pokemon(574, 'Gothita', ['Psychic']),
  new Pokemon(575, 'Gothorita', ['Psychic']),
  new Pokemon(576, 'Gothitelle', ['Psychic']),
  new Pokemon(577, 'Solosis', ['Psychic']),
  new Pokemon(578, 'Duosion', ['Psychic']),
  new Pokemon(579, 'Reuniclus', ['Psychic']),
  new Pokemon(415, 'Combee', ['Bug', 'Flying']),
  new Pokemon(416, 'Vespiquen', ['Bug', 'Flying']),
  new Pokemon(587, 'Emolga', ['Electric', 'Flying']),
  new Pokemon(214, 'Heracross', ['Bug', 'Fighting']),
  new Pokemon(127, 'Pinsir', ['Bug']),
  new Pokemon(522, 'Blitzle', ['Electric']),
  new Pokemon(523, 'Zebstrika', ['Electric']),
  new Pokemon(418, 'Buizel', ['Water']),
  new Pokemon(419, 'Floatzel', ['Water']),
  new Pokemon(570, 'Zorua', ['Dark']),
  new Pokemon(571, 'Zoroark', ['Dark']),
  new Pokemon(580, 'Ducklett', ['Water', 'Flying']),
  new Pokemon(581, 'Swanna', ['Water', 'Flying']),
  new Pokemon(588, 'Karrablast', ['Bug']),
  new Pokemon(589, 'Escavalier', ['Bug', 'Steel']),
  new Pokemon(616, 'Shelmet', ['Bug']),
  new Pokemon(617, 'Accelgor', ['Bug']),
  new Pokemon(585, 'Deerling', ['Normal', 'Grass']),
  new Pokemon(586, 'Sawsbuck', ['Normal', 'Grass']),
  new Pokemon(590, 'Foongus', ['Grass', 'Poison']),
  new Pokemon(591, 'Amoonguss', ['Grass', 'Poison']),
  new Pokemon(351, 'Castform', ['Normal']),
  new Pokemon(299, 'Nosepass', ['Rock']),
  new Pokemon(476, 'Probopass', ['Rock', 'Steel']),
  new Pokemon(304, 'Aron', ['Steel', 'Rock']),
  new Pokemon(305, 'Lairon', ['Steel', 'Rock']),
  new Pokemon(306, 'Aggron', ['Steel', 'Rock']),
  new Pokemon(343, 'Baltoy', ['Ground', 'Psychic']),
  new Pokemon(344, 'Claydol', ['Ground', 'Psychic']),
  new Pokemon(636, 'Larvesta', ['Bug', 'Fire']),
  new Pokemon(637, 'Volcarona', ['Bug', 'Fire']),
  new Pokemon(595, 'Joltik', ['Bug', 'Electric']),
  new Pokemon(596, 'Galvantula', ['Bug', 'Electric']),
  new Pokemon(597, 'Ferroseed', ['Grass', 'Steel']),
  new Pokemon(598, 'Ferrothorn', ['Grass', 'Steel']),
  new Pokemon(602, 'Tynamo', ['Electric']),
  new Pokemon(603, 'Eelektrik', ['Electric']),
  new Pokemon(604, 'Eelektross', ['Electric']),
  new Pokemon(592, 'Frillish', ['Water', 'Ghost']),
  new Pokemon(593, 'Jellicent', ['Water', 'Ghost']),
  new Pokemon(594, 'Alomomola', ['Water']),
  new Pokemon(610, 'Axew', ['Dragon']),
  new Pokemon(611, 'Fraxure', ['Dragon']),
  new Pokemon(612, 'Haxorus', ['Dragon']),
  new Pokemon(335, 'Zangoose', ['Normal']),
  new Pokemon(336, 'Seviper', ['Poison']),
  new Pokemon(605, 'Elgyem', ['Psychic']),
  new Pokemon(606, 'Beheeyem', ['Psychic']),
  new Pokemon(607, 'Litwick', ['Ghost', 'Fire']),
  new Pokemon(608, 'Lampent', ['Ghost', 'Fire']),
  new Pokemon(609, 'Chandelure', ['Ghost', 'Fire']),
  new Pokemon(631, 'Heatmor', ['Fire']),
  new Pokemon(632, 'Durant', ['Bug', 'Steel']),
  new Pokemon(613, 'Cubchoo', ['Ice']),
  new Pokemon(614, 'Beartic', ['Ice']),
  new Pokemon(615, 'Cryogonal', ['Ice']),
  new Pokemon(641, 'Tornadus', ['Flying']),
  new Pokemon(642, 'Thundurus', ['Electric', 'Flying']),
  new Pokemon(645, 'Landorus', ['Ground', 'Flying']),
  new Pokemon(451, 'Skorupi', ['Poison', 'Bug']),
  new Pokemon(452, 'Drapion', ['Poison', 'Dark']),
  new Pokemon(227, 'Skarmory', ['Steel', 'Flying']),
  new Pokemon(322, 'Numel', ['Fire', 'Ground']),
  new Pokemon(323, 'Camerupt', ['Fire', 'Ground']),
  new Pokemon(325, 'Spoink', ['Psychic']),
  new Pokemon(326, 'Grumpig', ['Psychic']),
  new Pokemon(425, 'Drifloon', ['Ghost', 'Flying']),
  new Pokemon(426, 'Drifblim', ['Ghost', 'Flying']),
  new Pokemon(353, 'Shuppet', ['Ghost']),
  new Pokemon(354, 'Banette', ['Ghost']),
  new Pokemon(278, 'Wingull', ['Water', 'Flying']),
  new Pokemon(279, 'Pelipper', ['Water', 'Flying']),
  new Pokemon(337, 'Lunatone', ['Rock', 'Psychic']),
  new Pokemon(338, 'Solrock', ['Rock', 'Psychic']),
  new Pokemon(359, 'Absol', ['Dark']),
  new Pokemon(114, 'Tangela', ['Grass']),
  new Pokemon(465, 'Tangrowth', ['Grass']),
  new Pokemon(619, 'Mienfoo', ['Fighting']),
  new Pokemon(620, 'Mienshao', ['Fighting']),
  new Pokemon(207, 'Gligar', ['Ground', 'Flying']),
  new Pokemon(472, 'Gliscor', ['Ground', 'Flying']),
  new Pokemon(624, 'Pawniard', ['Dark', 'Steel']),
  new Pokemon(625, 'Bisharp', ['Dark', 'Steel']),
  new Pokemon(638, 'Cobalion', ['Steel', 'Fighting']),
  new Pokemon(639, 'Terrakion', ['Rock', 'Fighting']),
  new Pokemon(640, 'Virizon', ['Grass', 'Fighting']),
  new Pokemon(535, 'Tympole', ['Water']),
  new Pokemon(536, 'Palpitoad', ['Water', 'Ground']),
  new Pokemon(537, 'Seismitoad', ['Water', 'Ground']),
  new Pokemon(618, 'Stunfisk', ['Ground', 'Electric']),
  new Pokemon(213, 'Shuckle', ['Bug', 'Rock']),
  new Pokemon(458, 'Mantyke', ['Water', 'Flying']),
  new Pokemon(226, 'Mantine', ['Water', 'Flying']),
  new Pokemon(223, 'Remoraid', ['Water']),
  new Pokemon(224, 'Octillery', ['Water']),
  new Pokemon(222, 'Corsola', ['Water', 'Rock']),
  new Pokemon(120, 'Staryu', ['Water']),
  new Pokemon(121, 'Starmie', ['Water', 'Psychic']),
  new Pokemon(320, 'Wailmer', ['Water']),
  new Pokemon(321, 'Wailord', ['Water']),
  new Pokemon(131, 'Lapras', ['Water', 'Ice']),
  new Pokemon(363, 'Spheal', ['Ice', 'Water']),
  new Pokemon(364, 'Sealeo', ['Ice', 'Water']),
  new Pokemon(365, 'Walrein', ['Ice', 'Water']),
  new Pokemon(333, 'Swablu', ['Normal', 'Flying']),
  new Pokemon(334, 'Altaria', ['Dragon', 'Flying']),
  new Pokemon(37, 'Vulpix', ['Fire']),
  new Pokemon(38, 'Ninetales', ['Fire']),
  new Pokemon(436, 'Bronzor', ['Steel', 'Psychic']),
  new Pokemon(437, 'Bronzong', ['Steel', 'Psychic']),
  new Pokemon(215, 'Sneasel', ['Dark', 'Ice']),
  new Pokemon(461, 'Weavile', ['Dark', 'Ice']),
  new Pokemon(225, 'Delibird', ['Ice', 'Flying']),
  new Pokemon(582, 'Vanillite', ['Ice']),
  new Pokemon(583, 'Vanillish', ['Ice']),
  new Pokemon(584, 'Vanilluxe', ['Ice']),
  new Pokemon(220, 'Swinub', ['Ice', 'Ground']),
  new Pokemon(221, 'Piloswine', ['Ice', 'Ground']),
  new Pokemon(473, 'Mamoswine', ['Ice', 'Ground']),
  new Pokemon(132, 'Ditto', ['Normal']),
  new Pokemon(374, 'Beldum', ['Steel', 'Psychic']),
  new Pokemon(375, 'Metang', ['Steel', 'Psychic']),
  new Pokemon(376, 'Metagross', ['Steel', 'Psychic']),
  new Pokemon(86, 'Seel', ['Water']),
  new Pokemon(87, 'Dewgong', ['Water', 'Ice']),
  new Pokemon(538, 'Throh', ['Fighting']),
  new Pokemon(539, 'Sawk', ['Fighting']),
  new Pokemon(626, 'Bouffalant', ['Normal']),
  new Pokemon(621, 'Druddigon', ['Dragon']),
  new Pokemon(622, 'Golett', ['Ground', 'Ghost']),
  new Pokemon(623, 'Golurk', ['Ground', 'Ghost']),
  new Pokemon(633, 'Deino', ['Dark', 'Dragon']),
  new Pokemon(634, 'Zweilous', ['Dark', 'Dragon']),
  new Pokemon(635, 'Hydreigon', ['Dark', 'Dragon']),
  new Pokemon(287, 'Slakoth', ['Normal']),
  new Pokemon(288, 'Vigoroth', ['Normal']),
  new Pokemon(289, 'Slaking', ['Normal']),
  new Pokemon(341, 'Corphish', ['Water']),
  new Pokemon(342, 'Crawdaunt', ['Water', 'Dark']),
  new Pokemon(174, 'Igglybuff', ['Normal', 'Fairy']),
  new Pokemon(39, 'Jigglypuff', ['Normal', 'Fairy']),
  new Pokemon(40, 'Wigglytuff', ['Normal', 'Fairy']),
  new Pokemon(108, 'Lickitung', ['Normal']),
  new Pokemon(463, 'Lickilicky', ['Normal']),
  new Pokemon(193, 'Yanma', ['Bug', 'Flying']),
  new Pokemon(469, 'Yanmega', ['Bug', 'Flying']),
  new Pokemon(357, 'Tropius', ['Grass', 'Flying']),
  new Pokemon(455, 'Carnivine', ['Grass']),
  new Pokemon(453, 'Croagunk', ['Poison', 'Fighting']),
  new Pokemon(454, 'Toxicroak', ['Poison', 'Fighting']),
  new Pokemon(246, 'Larvitar', ['Rock', 'Ground']),
  new Pokemon(247, 'Pupitar', ['Rock', 'Ground']),
  new Pokemon(248, 'Tyranitar', ['Rock', 'Dark']),
  new Pokemon(643, 'Reshiram', ['Dragon', 'Fire']),
  new Pokemon(644, 'Zekrom', ['Dragon', 'Electric']),
  new Pokemon(646, 'Kyurem', ['Dragon', 'Ice']),
  new Pokemon(647, 'Keldeo', ['Water', 'Fighting']),
  new Pokemon(648, 'Meloetta', ['Normal', 'Psychic']),
  new Pokemon(649, 'Genesect', ['Bug', 'Steel']),
];

function loadUnova() {
  $('#Center').text('The Unova Pokémon List by Pokédex Number');
  $('#myInput').val('');
  $('#pokemon-container').empty();
  for (const display of pokemonList) {
    display.loadToPage();
    display.showTypes();
  }
}
