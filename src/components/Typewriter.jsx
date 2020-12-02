import React, { useEffect, useState } from "react";
import "./Typewriter.scss";

const Typewriter = ({message, speed = 200, pause = 3000}) => {
  const [messageHolder, setMessageHolder] = useState("");
  const [counter, setCounter] = useState(0);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => {
      if (counter < message.length) {
        setMessageHolder(messageHolder.concat(message[counter]));
        setCounter(counter + 1);
      } else {
        setBlink(true);
        setTimeout(() => {
          setBlink(false);
          setMessageHolder("");
          setCounter(0);
        }, pause);
      }
    }, speed);
    return () => clearInterval(timeout);
  });

  return (
    <h2 className="typewriter">
      {messageHolder}
      <span className={blink ? "caret" : null}>&nbsp;|</span>
    </h2>
  );
};

export default Typewriter;
