let produtos = ['Arroz', 'Feijão', 'Macarrão', 'Leite', 'Café', 'Açúcar'];
console.log('Existe café?:', produtos.includes('Café'));
console.log('Posição do Café:', produtos.indexOf('Café'));

let copia = produtos.slice(0, 3);
produtos.splice(produtos.indexOf('Leite'), 1);
console.log('Texto final:', produtos.join(' - '));
