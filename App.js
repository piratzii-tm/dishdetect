import { configTheme } from "./src/constants";
import { ExpoFonts } from "./src/wrappers";
import { Navigation } from "./src/navigation";

configTheme();
export default function App() {
  return (
    <ExpoFonts>
      <Navigation />
    </ExpoFonts>
  );
}
