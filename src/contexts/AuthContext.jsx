import { createContext, useContext, useState } from 'react';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const login = (role) => setUser({ name: role === 'admin' ? 'Admin User' : 'Arjun Mehta', role, avatar: role === 'admin' ? 'AU' : 'AM' });
  const logout = () => setUser(null);
  return <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === 'admin' }}>{children}</AuthContext.Provider>;
}
