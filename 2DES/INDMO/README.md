# Interfaces para dispositivos móveis
| Objetivo: |
|-|
|Proporcionar a aquisição de capacidades técnicas relativas ao desenvolvimento de interfaces para dispositivos móveis com integração aos recursos de hardware, bem como o desenvolvimento de capacidades socioemocionais adequadas a diferentes situações profissionais.|

## Dependências e suas características
1. Instalará globalmente o Expo CLI no seu sistema, permitindo que você crie e gerencie projetos Expo
```shell
npm install -g expo-cli
```
2. Irá criar um novo projeto Expo 
```shell
npx create-expo-app nome_projeto || npm install -g create-expo-app nome_projeto
```
3. Usada para navegação em aplicativos React Native. Fornece um conjunto de componentes e utilitários para facilitar a criação de sistemas de navegação em seu aplicativo
    - Pode ser combinado com outras dependências do React Navigation, como @react-navigation/stack, @react-navigation/bottom-tabs e @react-navigation/drawer
```shell
yarn add @react-navigation/native
```
4. Fornece interface para lidar com áreas seguras em dispositivos móveis
```shell
yarn add react-native-safe-area-context
```
5. Biblioteca que visa melhorar o desempenho e a experiência do usuário ao lidar com telas e navegações em um aplicativo
```shell
yarn add react-native-screens@~3.20.0
```
6. Permite renderizar componentes SVG (Scalable Vector Graphics). É um formato de imagem vetorial baseado em XML que descreve gráficos bidimensionais
    - Você pode criar elementos gráficos escaláveis e interativos com o aplicativo React-Native
```shell
yarn add react-native-svg
```
7. Oferece uma abordagem em navegação em pilha (stack) para aplicativos
```shell
yarn add @react-navigation/native-stack
```
8. Fornece uma forma fácil de criar máscaras em campos de entrada de texto (números de telefone, CPF, datas, CEP) facilitando a validação e formatação dos dados inseridos pelo usuário
```shell
yarn add react-native-mask-input
```

9. Biblioteca para utilizada para criar animações fluidas de alto desempenho
    - Oferece uma API simples e poderosa para criar animações complexas e interativas, permitindo que os elementos da interface do usuário se mova, rotacionem, redimensionem e mudem de forma suave
```shell
yarn add react-native-reanimated@~2.14.4 
```

10. Permite que você compartilhe o código entre aplicativos React Native e aplicativos web, permitindo a compilação e execução do React Native em um navegador
```shell
yarn add react-native-web@~0.18.10
```
11. Usado para renderizar componentes React em ambientes baseados em DOM, como navegadores. Utilizado em ambiente web, ele é útil ao usar o react-native-web para renderizar seu código React Native em um navegador
```shell
yarn add react-dom@18.2.0
```
12. Contém configurações de webpack predefinidas usadas pelo Expo para criar e executar projetos
    - O webpack é uma ferramenta de empacotamento e construção usada para preparar o código JavaScript para implantação em um ambiente de produção
    - O Expo usa o webpack para processar e empacotar o código do seu projeto, facilitando o desenvolvimento e a compilação de aplicativos React Native.
```shell
yarn add @expo/webpack-config@^18.0.1
```
