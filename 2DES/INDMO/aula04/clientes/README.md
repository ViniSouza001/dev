# Aula de FLATLIST
## Função
- O FlatList funciona bem para longas listas de dados, onde o número de itens pode mudar ao longo do tempo;
- Só renderiza os elemenos que são exibidos atualmente na tela, não todos os elementos de uma vez;
- O componente FlatList requer 2 props: data e renderItem;

## Props
### data
- data é a fonte de informação para a lista

### renderItem
- renderItem pega um item da fonte de informação e retorna um componente formatado para ser renderizado

### Exemplo
```
<FlatList
    data={Clientes}
    renderItem={({item}) => 
        <Text>Nome: {item.nome}</Text>
        <Text>Nome: {item.idade}</Text>
        <Text>Nome: {item.email}</Text>
    } 
/>
```