import { createGlobalStyle } from 'styled-components'



const Global = createGlobalStyle `

*{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif
}

body {
    width: 100vw;
    heigth: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f8f3f3;
}
`;


export default Global