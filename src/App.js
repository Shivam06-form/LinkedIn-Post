import { Fragment } from "react";
// import Counter from "./components/Counter";
import Header from "./components/Header";
import RenderItems from "./components/RenderItems";
import Form from "./components/Form";
import Slider from "./components/Slider";

function App() {

  return (
    <Fragment>
      <Header />
      <RenderItems />
      <Form />
      <Slider/>
    </Fragment>
  );
}

export default App;
