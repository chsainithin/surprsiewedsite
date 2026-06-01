import { useState } from "react";
import WishScreen from "./WishScreen";
import Gallery from "./Gallery";

function App() {

  const [screen, setScreen] = useState("wish");

  const openNextFolder = () => {
    setScreen("gallery");
  };

  return (

    <>
      {screen === "wish" && (
        <WishScreen onOpenNextFolder={openNextFolder} />
      )}

      {screen === "gallery" && (
        <Gallery />
      )}
    </>

  );
}

export default App;