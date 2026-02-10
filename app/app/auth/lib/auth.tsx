import React, { createContext, useContext, useMemo, useState } from "react";

type Role = "customer" | "pro";

type AuthState = {
  isAuthenticated: boolean;
  role: Role;
  loginAsCustomer: () => void;
  loginAsPro: () => void;
  logout: () => void;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<Role>("customer");

  const value = useMemo<AuthState>(() => {
    return {
      isAuthenticated,
      role,
      loginAsCustomer: () => {
        setIsAuthenticated(true);
        setRole("customer");
      },
      loginAsPro: () => {
        setIsAuthenticated(true);
        setRole("pro");
      },
      logout: () => {
        setIsAuthenticated(false);
        setRole("customer");
      }
    };
  }, [isAuthenticated, role]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
