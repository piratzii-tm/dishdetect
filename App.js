import { configTheme } from "./src/constants";
import { ExpoFonts } from "./src/wrappers";
import { Navigation } from "./src/navigation";
import { ShoppingProviderWrapper } from "./src/wrappers/ShoppingProviderWrapper";

configTheme();

export default function App() {
  return (
    <ShoppingProviderWrapper>
      <ExpoFonts>
        <Navigation />
      </ExpoFonts>
    </ShoppingProviderWrapper>
  );
}
