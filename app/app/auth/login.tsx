import React from "react";
import { View, Text, Pressable } from "react-native";
import { useAuth } from "../../lib/auth";

export default function Login() {
  const { loginAsCustomer, loginAsPro } = useAuth();

  return (
    <View style={{ flex: 1, padding: 24, justifyContent: "center", backgroundColor: "#F6F7F9" }}>
      <Text style={{ fontSize: 28, fontWeight: "800", color: "#111827" }}>Handwerkerapp</Text>
      <Text style={{ marginTop: 8, color: "#6B7280" }}>
        Demo login — choose a role.
      </Text>

      <Pressable
        onPress={loginAsCustomer}
        style={{ marginTop: 24, backgroundColor: "#0D2A5B", padding: 14, borderRadius: 16, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Login as Customer</Text>
      </Pressable>

      <Pressable
        onPress={loginAsPro}
        style={{ marginTop: 12, backgroundColor: "#22C1A6", padding: 14, borderRadius: 16, alignItems: "center" }}
      >
        <Text style={{ color: "white", fontWeight: "700" }}>Login as Pro</Text>
      </Pressable>
    </View>
  );
}
