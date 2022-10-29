import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {

  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);

  return (
    <div className="App">
      <OnOff/>
      <UncontrolledAccordion titleValue={"Menu"}/>
      <Rating value={ratingValue} onClick={setRatingValue}/>
      <UncontrolledRating/>
      {/*<PageTitle title={"This is my APP"}/>*/}
      {/*<PageTitle title={"My friends"}/>*/}
      {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
      {/*<Accordion titleValue={"Users"} collapsed={false}/>*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string
}

function PageTitle(props: PageTitlePropsType) {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default App;
