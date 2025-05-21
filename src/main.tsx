import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import DefaultLayout from "./layouts/DefaulltLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/test1" element={<Test1 title="test1" />} />
          <Route path="/test2" element={<Test2 title="test2" />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  </StrictMode>
);
