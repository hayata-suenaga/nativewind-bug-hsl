import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="h-10 bg-hexcolor">
        <Text>Works</Text>
      </View>
      <View className="h-10 bg-hexcolor/20">
        <Text>Works</Text>
      </View>
      <View className="h-10 bg-hslcolor">
        <Text>Works</Text>
      </View>
      <View className="h-10 bg-hslcolor/20">
        <Text>Don't work</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
