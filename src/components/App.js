import React from 'react';
import Header from "./Header";
import Main from "./Main";
import accessoriseImages from "../utils/accessoriseImages";
import plantsImages from "../utils/plantsImages";

function App() {

  // const[accessoriseImages, setCards] = React.useState([]);

  return (
    <>
    <Header />
    <Main cards8={accessoriseImages} cardsPlants={plantsImages}/>
    </>
  );
}

export default App;
