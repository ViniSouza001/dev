const info = [ 
    {id: 1, nome: 'Marcos'}, // posição 0
    {id: 2, nome: 'André'}, // posição 1
    {id: 3, nome: 'Gustavo'}, // posição 2
    {id: 4, nome: 'Danilo'}, // posição 3
];

info.forEach((elemento, indice) => {
    console.log(`Elemento [${indice}]: ${JSON.stringify(elemento)}`);
});

// Elemento []