const samuraiQuotes = [
  {
    quote:
      'Honour may not win power, but it wins respect. And respect earns power.',
    samurai: 'Ishida Mitsunari',
  },
  {
    quote:
      'A warrior is worthless unless he rises above others and stands strong in the midst of a storm.',
    samurai: 'Yamamoto Tsunetomo',
  },
  {
    quote:
      'Engage in combat fully determined to die and you will be alive; wish to survive in the battle and you will surely meet death.',
    samurai: 'Uesugi Kenshin',
  },
];

const generateRandomNumber = (maximumValue) =>
  Math.floor(Math.random() * maximumValue);

const { quote } = samuraiQuotes[generateRandomNumber(samuraiQuotes.length - 1)];

// eslint-disable-next-line no-undef
document.getElementById('quote').textContent = quote;
