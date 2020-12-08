import React, { useEffect, useState } from "react";
import style from "./Typewriter.module.scss";

const Typewriter = ({ message, speed = 200, pause = 3000 }) => {
  const [messageHolder, setMessageHolder] = useState("");
  const [counter, setCounter] = useState(0);
  const [blink, setBlink] = useState(false);

  useEffect(() => {
    const timeouts = [];
    timeouts.push(
      setTimeout(() => {
        if (counter < message.length) {
          setMessageHolder(messageHolder.concat(message[counter]));
          setCounter(counter + 1);
        } else {
          setBlink(true);
          timeouts.push(
            setTimeout(() => {
              setBlink(false);
              setMessageHolder("");
              setCounter(0);
            }, pause)
          );
        }
      }, speed)
    );
    return () =>
      timeouts.forEach((timeout) => {
        clearInterval(timeout);
      });
  });

  return (
    <h2 className={style.typewriter}>
      {messageHolder}
      <span className={blink ? style.caret : null}>&nbsp;|</span>
    </h2>
  );
};

export default Typewriter;
