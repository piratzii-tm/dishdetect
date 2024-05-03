import { configTheme } from "./src/constants";
import { ExpoFonts } from "./src/wrappers";
import { Navigation } from "./src/navigation";
import { ShoppingProviderWrapper } from "./src/wrappers/ShoppingProviderWrapper";
import { UserProviderWrapper } from "./src/wrappers/UserProviderWrapper";

configTheme();

export default function App() {
  return (
    <UserProviderWrapper>
      <ShoppingProviderWrapper>
        <ExpoFonts>
          <Navigation />
        </ExpoFonts>
      </ShoppingProviderWrapper>
    </UserProviderWrapper>
  );
}
