Levels.insert({
  order: 3,
  name: 'tutorial-3',
  size: 12,
  turns: 20,
  title: 'Tutorial Level 3',
  walls: [
    {x: 6, y: 5}
  ],
  fruits: [
    {x: 8, y: 5}
  ],
  snake: [
    {x: 1, y: 5},
    {x: 2, y: 5},
    {x: 3, y: 5},
    {x: 4, y: 5}
  ],
  intro: [
    '# Tutorial Level 3',
    '',
    'Throughout the game you\'ll face many obstacles which will hopefully make you think more like a software programmer to overcome. Let\'s try a simple wall for now',
  ].join('\n')
});