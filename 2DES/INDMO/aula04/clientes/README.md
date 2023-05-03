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
1. Fonte de informações
```javascript
const clientes = [
    {
        nome: 'Will',
        sobrenome: 'Smith',
        idade: 54,
        email: 'willsmith@gmail.com'
    },
    {
        nome: 'Terry',
        sobrenome: 'Crews',
        idade: 54,
        email: 'terrycrews@gmail.com'
    }
]
```

2. Construção do código para formatar as informações
```jsx
<FlatList
    data={Clientes}
    renderItem={({item}) => 
        <Text>Nome: {item.nome} {item.sobrenome}</Text>
        <Text>Idade: {item.idade}</Text>
        <Text>Email: {item.email}</Text>
    } 
/>
```

3. Retorno
```
Nome: Will Smith
Idade: 54
Email: willsmith@gmail.com

Nome: Terry Crews
Idade: 54
Email: terrycrews@gmail.com
```
