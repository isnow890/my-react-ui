import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import DefaultLayout from "./layouts/DefaulltLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
import Test3 from "./pages/Test3";
import Test4 from "./pages/Test4";
import Test5 from "./pages/Test5";
import Test6 from "./pages/Test6";
import Test7 from "./pages/Test7";
import Test8 from "./pages/Test8";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/test1" element={<Test1 title="test1" />} />
          <Route path="/test2" element={<Test2 title="test2" />} />
          <Route path="/test3" element={<Test3 />} />
          <Route path="/test4" element={<Test4 input="inpuuu" />} />
          <Route path="/test5" element={<Test5 />} />
          <Route path="/test6" element={<Test6 />} />
          <Route path="/test7" element={<Test7 />} />
          <Route path="/test8" element={<Test8 />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter>
  </StrictMode>
);
