import React, { useState } from "react";
import "./../styles/App.css";

const Tabs = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <ul>
        {tabs.map((tab, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{ cursor: "pointer" }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <p>{tabs[activeIndex]?.content}</p>
    </div>
  );
};

const App = () => {
  const tabs = [
    { title: "Tab 1", content: "This is the content for Tab 1." },
    { title: "Tab 2", content: "This is the content for Tab 2." },
    { title: "Tab 3", content: "This is the content for Tab 3." },
  ];

  return (
    <div>
      {/* Do not remove the main div */}
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;