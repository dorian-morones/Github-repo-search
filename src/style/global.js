import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Bebas+Neue|Roboto&display=swap');
  body{
    font-family: 'Roboto', sans-serif;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  h2{
      font-family: 'Bebas Neue', cursive;
  }
  select{
    margin-right: 20px;
    float: left;
  }
  button{
      margin-right: 20px;
  }

  a {
    color: #6e5494;
  }
  a:hover{
      color: #00b381;
    text-decoration: none;
    font-weight: 600;
  }
    
  // Filters
  .Filters__Wrapper{
      margin-bottom: 30px;
      z-index: 20;
      background: #fafafa;
      top: 0;
      padding: 20px;
      border-bottom: solid 2px #7300c1;
      box-shadow: 0 0.5rem 1rem rgba(0,0,0,.05), inset 0 -1px 0 rgba(0,0,0,.3);
  }

  .Filter input{
      margin-right: 20px;
  }
  .Filter input, button{
      float: right;
  }


  // Results
  .Results__Wrapper{
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      max-width: 100%;
      min-height: 40vh;
      margin-top: 30px;
  }

  .CharacterCard__Img_Wrapper{
      position: relative;
      width: 300px;
      height: 500px;
  }
  .card-image {
      width: 100%;
      height: 300px;
  }

  .CharacterCard__Title{
      width: 100%;
      background: #f5f5f5 none repeat scroll 0% 0%;
      position: absolute;
      bottom: 0px;
      padding: 0.625rem;
      min-height: 200px;
  }

  .CharacterCard__Info_Wrapper{
      padding: 1.25rem;
      height: 100%;
      color:rgb(255, 152, 0);
      background:rgb(51, 51, 51) none repeat scroll 0% 0%;
  }
  .CharacterCard__Text_Wrapper{
      font-family: 'Roboto', sans-serif;
      display: flex;
      -moz-box-pack: justify;
      justify-content: space-between;
      -moz-box-align: center;
      align-items: center;
      flex-wrap: nowrap;
      padding: 0.75rem 0px 0.375rem;
      border-bottom: 1px solid rgb(68, 68, 68);
  }
  .CharacterCard__Text_Wrapper span{
      font-size: 0.7rem;
      font-weight: 400;
      color:rgb(158, 158, 158);
  }
  .CharacterCard__Text_Wrapper p{
      width: 100%;
      padding: 0px;
      margin: 0px;
      font-size: 0.9rem;
      font-weight: 200;
      text-align: right;
  }
  .CharacterCard_Store{
      cursor: pointer;
      margin-top: 15px;
  }
  .CharacterCard_Store:hover{
    color: #00b381;
    text-decoration: none;
    font-weight: 600;
}


`;
