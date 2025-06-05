import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          color: "#333",
        }}
      >
        Welcome to the Expo Router!
      </Text>
      <Link
        href="/about"
        style={{ marginTop: 20, fontSize: 20, color: "#007AFF" }}
      >
        Go to About Page
      </Link>
    </View>
  );
}
