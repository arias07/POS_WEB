import { Routes, Route, Navigate } from "react-router-dom";
import {
  Categorias,
  Configuraciones,
  Home,
  Login,
  Productos,
  ProtectedRoute,
  POS,
  Layout,
  PageNot,
  Empresa,
  ClientesProveedores,
} from "../index";
import { BasicosConfig } from "../components/organismos/EmpresaConfigDesign/BasicosConfig";
import { MonedaConfig } from "../components/organismos/EmpresaConfigDesign/MonedaConfig";
import {MetodosPago} from "../pages/MetodosPago"
import {Dashboard} from "../pages/Dashboard"
import { SucursalesCaja } from "../pages/SucursalesCaja";
import {Impresoras} from "../pages/Impresoras"
export function MyRoutes() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <ProtectedRoute accessBy="non-authenticated">
            <Login />
          </ProtectedRoute>
        }
      />

      <Route
        path="/configuracion"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Configuraciones />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion/categorias"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Categorias />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion/productos"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Productos />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion/empresa"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Empresa />
            </Layout>
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="empresabasicos" />} />
        <Route path="empresabasicos" element={<BasicosConfig />} />
        <Route path="monedaconfig" element={<MonedaConfig />} />
      </Route>
      <Route
        path="/pos"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <POS />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<PageNot />} />
      <Route
        path="/configuracion/clientes"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <ClientesProveedores />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion/proveedores"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <ClientesProveedores />
            </Layout>
          </ProtectedRoute>
        }
      />
       <Route
        path="/configuracion/metodospago"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <MetodosPago />
            </Layout>
          </ProtectedRoute>
        }
      />
       <Route
        path="/"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
      <Route
        path="/configuracion/sucursalcaja"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <SucursalesCaja />
            </Layout>
          </ProtectedRoute>
        }
      />
       <Route
        path="/configuracion/impresoras"
        element={
          <ProtectedRoute accessBy="authenticated">
            <Layout>
              <Impresoras />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
