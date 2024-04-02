import { View } from "react-native-ui-lib";
import { KContainer, KRecipeNameCard, KSpacer } from "../../../components";

export const RecipesNameScreen = () => {
  return (
    <KContainer>
      <View center>
        {/*TODO: Create card from a list*/}
        <KRecipeNameCard title="Stuffed Bell Peppers" />
        <KSpacer height={50} />
        <KRecipeNameCard title="Caprese Salad" />
        <KSpacer height={50} />
        <KRecipeNameCard title="Mushroom Risotto" />
      </View>
    </KContainer>
  );
};
