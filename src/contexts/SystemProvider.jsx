import React from "react";
import SystemContext from "./SystemContext";

const SystemProvider = ({ children }) => {
  const [metricSystem, setMetricSystem] = React.useState(() => {
    const storageSystem = localStorage.getItem("metricSystem");

    if (storageSystem) return JSON.parse(storageSystem);

    return true;
  });

  return <SystemContext.Provider value={{ metricSystem, setMetricSystem }}>{children}</SystemContext.Provider>;
};

export default SystemProvider;
