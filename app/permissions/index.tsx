import { ThemedText } from "@/presentation/components/shared/ThemedText";
import { View } from "react-native";

const PermissionsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThemedText>Estado actual: </ThemedText>
    </View>
  );
};
export default PermissionsScreen;
