import React from "react";
import { Navigation } from "./screens/Navigation";
import { SavedCountProvider } from "./screens/SavedCountContext";

export default function App() {
  return (
    <SavedCountProvider>
      <Navigation />
    </SavedCountProvider>
  );
}
