import { useState, useEffect } from "react";

export default function TypingText() {
  const texts = ["Web Developer", "React Developer", "MCA Student"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex(charIndex + 1);
      }, 120);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 1500);
    }
  }, [charIndex, index]);

  return (
    <h3 className="typing">
      I am a <span>{text}</span>
    </h3>
  );
}
