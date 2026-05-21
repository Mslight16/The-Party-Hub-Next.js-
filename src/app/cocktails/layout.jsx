"use client";

import { AppProvider } from "./context";

export default function CocktailsLayout({ children }) {
  return <AppProvider>{children}</AppProvider>;
}