const games = [
  { id: '1', title: 'Zelda: Breath of the Wild', platform: ['Switch'] },
  { id: '2', title: 'Final Fantasy VII', platform: ['PS1', 'PC'] },
  { id: '3', title: 'Elden Ring', platform: ['PS5', 'Xbox', 'PC'] },
  { id: '4', title: 'Mario Kart', platform: ['Switch'] },
  { id: '5', title: 'Portal', platform: ['PC', 'PS3'] }
];

const authors = [
  { id: '1', name: 'John Doe', verified: true },
  { id: '2', name: 'Jane Smith', verified: false },
  { id: '3', name: 'Mike Johnson', verified: true }
];

const reviews = [
  { id: '1', rating: 9, content: 'Amazing game!', author_id: '1', game_id: '2' },
  { id: '2', rating: 8, content: 'Great experience', author_id: '2', game_id: '1' },
  { id: '3', rating: 7, content: 'Good but difficult', author_id: '3', game_id: '3' },
  { id: '4', rating: 10, content: 'Masterpiece', author_id: '1', game_id: '5' }
];

export default { games, authors, reviews }