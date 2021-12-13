// import logo from './logo.svg';
import "./App.css";
import CardMain from "./cards/CardMain";
import faker from "faker";

function App() {
  return (
    <div className="App">
      <CardMain
        image={faker.image.image()}
        heading="first card"
        captions="First cpation"
        linktext="third and fourth links"
      />
      <br />
      <CardMain
        image={faker.image.image()}
        heading="second card"
        captions="second cpation"
        linktext="third and fourth links"
      />
      <br />
      <CardMain
        image={faker.image.image()}
        heading="third card"
        captions="Third cpation"
        linktext="third and fourth links"
      />
    </div>
  );
}

export default App;
