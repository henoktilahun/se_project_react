import React, { useContext, useState } from "react";
import "./ToggleSwitch.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="toggle">
      <input
        type="checkbox"
        className="toggle__switch"
        onClick={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "toggle__switch-slider toggle__switch-slider_F"
            : "toggle__switch-slider toggle__switch-slider_C"
        }
      ></span>
      <p
        className={`toggle__switch-temp_F ${
          currentTemperatureUnit === "F" && "toggle__switch-active"
        }`}
      >
        F
      </p>
      <p
        className={`toggle__switch-temp_C ${
          currentTemperatureUnit === "C" && "toggle__switch-active"
        }`}
      >
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
