import React from "react";
import emojipedia from "../emojipedia.js";
import Entry from "./Entry";

function createEntry(anEmoji){
  return (
          <Entry
            key={anEmoji.id}
            name={anEmoji.name}
            emoji={anEmoji.emoji}
            meaning={anEmoji.meaning}
          />
        );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
      
        {emojipedia.map(createEntry)}

      </dl>
    </div>
  );
}

export default App;
