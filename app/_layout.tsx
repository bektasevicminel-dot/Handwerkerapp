import React, { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AuthProvider, useAuth } from "../lib/auth";

function RootNav() {
  const { isAuthenticated, role } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const root = segments[0];
    const inAuth = root === "auth";
    const inCustomer = root === "(customer)";
    const inPro = root === "(pro)";

    if (!isAuthenticated) {
      if (!inAuth) router.replace("/auth/login" as any);
      return;
    }

    if (role === "customer") {
      if (!inCustomer) router.replace("/(customer)/home" as any);
      return;
    }

    if (role === "pro") {
      if (!inPro) router.replace("/(pro)/leads" as any);
      return;
    }

    router.replace("/auth/login" as any);
  }, [isAuthenticated, role, segments, router]);

  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="auth/login" options={{ title: "Login" }} />
      <Stack.Screen name="(customer)/home" options={{ title: "Customer" }} />
      <Stack.Screen name="(pro)/leads" options={{ title: "Pro" }} />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AuthProvider>
          <RootNav />
          <StatusBar style="auto" />
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
