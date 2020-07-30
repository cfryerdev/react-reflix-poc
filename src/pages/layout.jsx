import React from "react";
import Navigation from "../components/navigation";
import VirtualKeyboard from "../components/virtual-keyboard";
import { FocusProvider } from "../contexts/focus-context";

export default ({ children }) => (
  <FocusProvider>
    <Navigation />
    <div className="page-container">{children}</div>
    <div className="text-center">
      <small className="text-uppercase text-secondary mt-4">
        Copyright 2020 - cfryerdev
      </small>
    </div>
    <VirtualKeyboard />
  </FocusProvider>
);