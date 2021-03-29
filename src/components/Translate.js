import React, { useState } from "react";
import { languages } from "../seeds";
import Dropdown from "./Dropdown";
import Convert from "./Convert"

const Translate = () => {
  const [language, setLanguage] = useState(languages[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="language"
        selected={language}
        onSelectedChange={setLanguage}
        options={languages}
      />
      <hr />
      <Convert text={text} language={language}/>
    </div>
  );
};

export default Translate;
