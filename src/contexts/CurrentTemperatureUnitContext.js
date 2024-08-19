import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatureUnite: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
