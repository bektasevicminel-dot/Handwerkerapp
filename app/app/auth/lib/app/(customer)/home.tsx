import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../../lib/auth";

export default function CustomerHome() {
  const { logout } = useAuth();

  return (
    <View style={{ flex: 1, padding: 24, backgroundColor: "#F6F7F9" }}>
      <Text style={{ fontSize: 22, fontWeight: "800", color: "#111827" }}>Customer Area</Text>
      <Text style={{ marginTop: 8, color: "#6B7280" }}>Customer UI only.</Text>

      <Pressable
        onPress={logout}
        style={{ marginTop: 24, backgroundColor: "#111827", padding: 14, borderRadius: 16, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Logout</Text>
      </Pressable>
    </View>
  );
}
