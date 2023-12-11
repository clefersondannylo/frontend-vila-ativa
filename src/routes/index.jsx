import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Reports } from "../pages/reports";
import { Users } from "../pages/users";
import { FormUser } from "../pages/users/form";
import { Private } from "./private";

FormUser;
export function RoutesComponent() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Private Component={Home} />} />
      <Route path="/associados" element={<Private Component={Users} />} />
      <Route path="/relatorios" element={<Private Component={Reports} />} />
      <Route
        path="/associados/formulario"
        element={<Private Component={FormUser} />}
      />
    </Routes>
  );
}
