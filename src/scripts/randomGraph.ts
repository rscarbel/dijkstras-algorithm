import Graph from '../dataStructures/graph';
import addRandomConnections from './addRandomConnections';

const MINIMUM_NODES = 10;

const cities = [
  'Aberdeen',
  'Albany',
  'Albuquerque',
  'Alexandria',
  'Anchorage',
  'Appleton',
  'Arlington',
  'Asheville',
  'Athens',
  'Atlanta',
  'Austin',
  'Baltimore',
  'Beaumont',
  'Bel Air',
  'Berkeley',
  'Birmingham',
  'Boston',
  'Boulder',
  'Buffalo',
  'Burlington',
  'Cambridge',
  'Cary',
  'Charleston',
  'Charlotte',
  'Chattanooga',
  'Chicago',
  'Cincinnati',
  'Cleveland',
  'Columbia',
  'Concord',
  'Dallas',
  'Davenport',
  'Dayton',
  'Denver',
  'Detroit',
  'Durham',
  'El Paso',
  'Flint',
  'Gainesville',
  'Gastonia',
  'Greensboro',
  'Greenville',
  'Hampton',
  'Harrisburg',
  'Henderson',
  'Hickory',
  'High Point',
  'Hollywood',
  'Honolulu',
  'Houston',
  'Indianapolis',
  'Irving',
  'Jacksonville',
  'Jersey City',
  'Kailua',
  'Kansas City',
  'Knoxville',
  'Lancaster',
  'Las Vegas',
  'Lexington',
  'Lincoln',
  'Long Beach',
  'Los Angeles',
  'Louisville',
  'Melbourne',
  'Memphis',
  'Miami',
  'Milwaukee',
  'Minneapolis',
  'Monroe',
  'Myrtle Beach',
  'Nashville',
  'New Orleans',
  'New York',
  'Newark',
  'Norfolk',
  'Oakland',
  'Oklahoma City',
  'Omaha',
  'Ontario',
  'Orlando',
  'Pasadena',
  'Philadelphia',
  'Phoenix',
  'Pittsburgh',
  'Portland',
  'Raleigh',
  'Richmond',
  'Roanoke',
  'Rochester',
  'Sacramento',
  'San Antonio',
  'San Diego',
  'San Francisco',
  'San Jose',
  'Savannah',
  'Scranton',
  'Seattle',
  'Spartanburg',
  'Springfield',
  'St. Louis',
  'Syracuse',
  'Tacoma',
  'Tallahassee',
  'Tampa',
  'Topeka',
  'Trenton',
  'Tucson',
  'Tulsa',
  'Vancouver',
  'Waco',
  'Washington',
  'Wichita',
  'Wilmington',
  'Winston',
  'Yonkers',
];

const letters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const starWarsPlanets = [
  'Tatooine',
  'Coruscant',
  'Hoth',
  'Endor',
  'Naboo',
  'Alderaan',
  'Mustafar',
  'Kamino',
  'Bespin',
  'Kashyyyk',
  'Dagobah',
  'Jakku',
  'Geonosis',
  'Yavin',
  'Corellia',
  'Mandalore',
  'Polis Massa',
  'Felucia',
  'Mygeeto',
  'Utapau',
  'Death Star',
  'Rebel Fleet',
  'Asteroid Belt',
];

const middleEarthCities = [
  'Misty Mountains',
  'Mount Doom',
  'Gondor',
  'Minas Tirith',
  "Helm's Deep",
  'Isengard',
  'Lothlórien',
  'Mirkwood',
  'Rivendell',
  'Shire',
  'Rohan',
  ' White Mountains',
  'Moria',
  'Dead Marshes',
  'Black Gate',
  'Prancing Pony',
  'Weathertop',
  'Bree',
  'Fangorn',
  'Cirith Ungol',
  'Erebor',
  'Gladden Fields',
  'Grey Havens',
];

const runescapeCities = [
  'Lumbridge',
  'Varrock',
  'Falador',
  'Camelot',
  'Ardougne',
  'Watchtower',
  'Trollheim',
  'Ape Atoll',
  'Kourend Castle',
  'Edgville',
  'Draynor Village',
  'Duel Arena',
  'Al Kharid',
  'Canifis',
  "Mort'ton",
  'Morytania Swamp',
  'Port Sarim',
  'Karamja',
  'Brimhaven',
  'Taverley',
  'Burthorpe',
  'Ice Mountain',
  'Seers Village',
  'Rellekka',
  'Fremennik Isles',
  'Wilderness',
  'Lunar Isle',
  'Gnome Village',
  'Prifddinas',
  'Feldip Hills',
  'Castle Wars',
  'Pollnivneach',
  'Rimmington',
  'Hosidius',
];

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const generateCeilingNumber: (max: number, min: number) => number = (
  max,
  min
) => Math.ceil(Math.random() * (max - min + 1) + min);

const generateFloorNumber = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomGraph = () => {
  const chooseNodeNames = () => {
    let nodeNames: string[] = [];
    let choice = generateCeilingNumber(4, 0);
    if (choice === 1) {
      nodeNames = cities;
    } else if (choice === 2) {
      nodeNames = letters;
    } else if (choice === 3) {
      nodeNames = middleEarthCities;
    } else if (choice === 4) {
      nodeNames = starWarsPlanets;
    } else if (choice === 5) {
      nodeNames = runescapeCities;
    }
    return nodeNames;
  };

  const graphLetters = chooseNodeNames();
  shuffleArray(graphLetters);
  const numLettersToRemove = generateFloorNumber(
    graphLetters.length - MINIMUM_NODES,
    0
  );
  graphLetters.splice(0, numLettersToRemove);

  const graph = new Graph(graphLetters[0]);

  for (let i = 1; i < graphLetters.length; i++) {
    graph.addNode(graphLetters[i]);
  }

  addRandomConnections(graph, graphLetters);
  return graph;
};

export default randomGraph;
