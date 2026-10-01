let playlist = [
    'Música 1',
    'Música 2',
    'Música 3',
    'Música 4',
    'Música 5',
    'Música 6',
    'Música 7',
    'Música 8',
];

console.log(playlist.includes('Música 3'));
console.log(playlist.indexOf('Música 5'));

let selecao = playlist.slice(1, 4);
playlist.splice(playlist.indexOf('Música 2'), 1);
playlist.sort();
playlist.reverse();

console.log('Playlist final:', playlist.join(' | '));
