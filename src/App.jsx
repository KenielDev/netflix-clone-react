import { useState } from "react";
import "./App.css";
import "./api.jsx";
import Row from "./components/movieRows";
import categories from "./api.jsx";
import Banner from "./components/banner";

<script src="https://cdn.tailwindcss.com"></script>;

function App() {
  return (
    <div className="App text-center bg-black">
      {/* navbar */}
      <Banner />
      {categories.map((category, index) => {
        return (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
