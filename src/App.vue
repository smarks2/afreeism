<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
body {background-color:#d2d4cb;}
p {text-align:left; color:black;}
a {
  text-decoration:none
  }
a:link {
  color:blue
  }
a:visited {
  color:blue;
}
a:hover {
  color:rgb(53, 1, 1);
}
a:active {
  color:yellow;
}
.TopMenu > div {
  font-size: 16px;
  color: black;
  padding:10px;
  margin:10px;
  border: 1px solid black;
  width:20%;
  background-color:chocolate;
}
.Contents {
  display:flex;
  justify-content: space-around;
  margin:10px;
}
.Contents > div {
  width: 100%;
  font-size: 16px;
  color: black;
  padding:10px;
  margin:10px;
  border: 1px solid black;
  width:20%;
  background-color:lawngreen;
  flex-grow: 1;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: #d2d4cb;
  width: 100%;
}
.HomePage {
  display:grid;
  grid-template-columns: 200px auto 200px;
  grid-template-rows: 30px auto auto auto 30px;
  grid-template-areas:
    'Top Top Top'
    'Logo Quote RSidebar'
    'TopMen TopMen RSidebar'
    'Main Main RSidebar'
    'Bottom Bottom Bottom'
}
.Top {
  grid-area: Top;
  background-color:#074477;
  display:flex;
  justify-content:flex-end;
  color:white;
}
.Logo {
  grid-area: Logo;
  background-color:white;
  font: 36px "Times New Roman";
  border-style:solid;
  border-color:#caebf2;
  padding:20px;
}
.Quote {
  grid-area: Quote;
  background-color:white ; 
  font: 24px "Times New Roman";
  text-align: center;
  line-height: 100px;
  border-style:solid;
  border-color:#caebf2;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
}
.TopMen {
  display:flex;
  justify-content:flex-start;
  grid-area: TopMen;
  background-color:#F5DAA4;
  text-align:left;
}
.Main {
  grid-area: Main;
  background-color:#F5DAA4;
  padding: 10px;

}
.RSidebar {
  grid-area: RSidebar;
  background-color:#074477;
}
.Bottom {
  grid-area: Bottom;
  background-color:#074477;
}
.Tolstoy {
  display:flex;
  align-items:flex-end;
  padding:0px;
}
.PageTitle {
  font-size:36px;
}
.TopicCategories {
background-color:#F5DAA4;
display:grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
}
.CatActive {
padding:5px;
background-color:white;
height:30px;
border-top-style:solid;
border-left-style:solid;
border-right-style:solid;
border-top-left-radius:25px;
border-top-right-radius:25px;
}
.CatInactive {
background-color:#ed8c85;
padding:5px;
border-top-style:solid;
border-bottom-style:solid;
border-left-style:solid;
border-right-style:solid;
border-top-left-radius:25px;
border-top-right-radius:25px;
}
.TopicGrid {
  display:grid;
  grid-template-columns: auto auto auto auto auto;
  grid-template-rows: auto auto auto auto;
  border-left-style:solid;
  border-right-style:solid;
  background-color:white;
}
.Topic {
  background-color:beige;
  border-radius:25px;
  padding:20px;
  margin:10px;
}
.TopicAnswers {
  border-left-style:solid;
  border-right-style:solid;
  border-bottom-style:solid;
  padding:20px;
  background-color:white;
}
</style>
