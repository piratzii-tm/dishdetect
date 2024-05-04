import { configTheme } from "./src/constants";
import {
  ExpoFonts,
  ShoppingProviderWrapper,
  UserProviderWrapper,
  AuthWrapper,
} from "./src/wrappers";
import { Navigation } from "./src/navigation";

configTheme();

export default function App() {
  return (
    <AuthWrapper>
      <UserProviderWrapper>
        <ShoppingProviderWrapper>
          <ExpoFonts>
            <Navigation />
          </ExpoFonts>
        </ShoppingProviderWrapper>
      </UserProviderWrapper>
    </AuthWrapper>
  );
}
