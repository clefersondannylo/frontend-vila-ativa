import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { NavigateComponent } from "../components/";

export function Private({ Component }) {
  const isSigned = useSelector((state) => state.auth.signed);
  return isSigned ? (
    <NavigateComponent>
      <Component />
    </NavigateComponent>
  ) : (
    <Navigate to="/login" />
  );
}
