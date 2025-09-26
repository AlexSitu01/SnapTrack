import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return ( 
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-3xl">Welcome!</Text>
      <Link href="/login">test</Link>
    </View>
  );
}
