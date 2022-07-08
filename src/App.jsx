import { useState } from "react";
import "./App.css";
import "./api.jsx";
import Row from "./components/row";
import categories from "./api.jsx";

<script src="https://cdn.tailwindcss.com"></script>;

function App() {
  return (
    <div className="App text-center">
      {/* navbar */}
      {/* destaque */}
      {/* em alta */}
      {categories.map((category, index) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
          />
        );
      })}
    </div>
  );
}

export default App;
