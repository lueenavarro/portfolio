import React, { useEffect, useState } from "react";
import style from "./Typewriter.module.scss";

const Typewriter = ({
  message,
  typingSpeed = 200,
  backspaceSpeed = 30,
  pause = 3000,
}) => {
  const [messageHolder, setMessageHolder] = useState("");
  const [counter, setCounter] = useState(0);
  const [blinking, setBlinking] = useState(false);
  const [typing, setTyping] = useState(true);
  const [speed, setSpeed] = useState(typingSpeed);

  const messageEmpty = counter === 0;
  const messageComplete = counter === message.length;

  const moveCaret = (speed, condition, newMessage, newCounter, timeouts) => {
    setSpeed(speed);
    if (condition) {
      setMessageHolder(newMessage);
      setCounter(newCounter);
    } else {
      setBlinking(true);
      timeouts.push(
        setTimeout(() => {
          setBlinking(false);
          setTyping(!typing);
        }, pause)
      );
    }
  };

  useEffect(() => {
    const timeouts = [];
    timeouts.push(
      setTimeout(() => {
        if (typing) {
          moveCaret(
            typingSpeed,
            !messageComplete,
            messageHolder.concat(message[counter]),
            counter + 1,
            timeouts
          );
          return;
        }
        moveCaret(
          backspaceSpeed,
          !messageEmpty,
          messageHolder.slice(0, -1),
          counter - 1,
          timeouts
        );
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
      <span className={blinking && style.caret}>
        {!messageEmpty && <>&nbsp;</>}|
      </span>
    </h2>
  );
};

export default Typewriter;
