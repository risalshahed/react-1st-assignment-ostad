import { useState } from "react";

export default function Content() {
  const [text, setText] = useState('');
  const [textToDisplay, setTextToDisplay] = useState('');

  const handleClick = () => {
    setTextToDisplay(text);
  };

  const handleTextUpdate = (e) => {
    // console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <section className="content">
      <div>
        <textarea value={text} onChange={handleTextUpdate} />
      </div>
      <div>
        <button onClick={handleClick}>Show Text</button>
      </div>
      <p
        className="text_to_display"
        style={{backgroundColor: textToDisplay && 'yellow'}}
      >
        {textToDisplay}
      </p>
    </section>

  )
}
