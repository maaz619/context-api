import React from "react";

interface User {
  name: string;
  email: string;
}

export const UserContext = React.createContext<User | null>(null);
