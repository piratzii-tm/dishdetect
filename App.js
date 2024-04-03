import { configTheme } from "./src/constants";
import { ExpoFonts } from "./src/wrappers";
import { Navigation } from "./src/navigation";
import { useState } from "react";
import { TheContext } from "./src/constants/contexts/TheContext";

configTheme();
export default function App() {
  const [shopList, setShopList] = useState([]);

  return (
    <TheContext.Provider value={{ shopList, setShopList }}>
      <ExpoFonts>
        <Navigation />
      </ExpoFonts>
    </TheContext.Provider>
  );
}
