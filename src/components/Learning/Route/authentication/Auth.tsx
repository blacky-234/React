import { useState, createContext, useContext } from "react";
import type { JSX } from "react";

// Define a type for the user
type User = {
  id: string;
  name: string;
  email: string;
} | null;

// Define the context type
type AuthContextType = {
  user: User;
  login: (user: User) => void;
  logout: () => void;
};

// Create context with type
const AuthContext = createContext<AuthContextType | undefined | null>(undefined);

// Define props for the provider
type AuthProviderProps = {
  children: JSX.Element;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>(null);

  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook with type checking
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
