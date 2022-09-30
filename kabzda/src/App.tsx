import React from 'react';
import './App.css';
import {Rating} from "./components/Rating/Rating";
import {Accordion} from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <PageTitle title={"This is my APP"}/>
      <PageTitle title={"My friends"}/>
      <Accordion titleValue={"Menu"} collapsed={true}/>
      <Accordion titleValue={"Users"} collapsed={false}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>
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
