import * as React from "react";

const Counter = () => {
  const { useState, useEffect } = React;

  const [counter, setCounter] = useState(0);
  const [counterMarker, setCounterMarker] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => {
        const marker = document.querySelector(".header__counter-marker-p");
        if (counter >= 10) {
          marker.style.margin = "-2.5rem 0 0 -0.2rem";
        }
        if (counter >= 100) {
          marker.style.margin = "-2.5rem 0 0 -0.4rem";
        }
        if (counter >= 1000) {
          marker.style.margin = "-2.5rem 0 0 -0.6rem";
        }
        return counter + 1;
      });
    }, 400);

    const intervalMarker = setInterval(() => {
      const counterMarker = 0;
      setCounterMarker((counterMarker) => {
        counterMarker += 0.0487;
        document.querySelector(".header__counter-marker").style.left =
          counterMarker + "px";

        if (counterMarker >= 200) {
          counterMarker = 0;
        }

        return counterMarker;
      });
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(intervalMarker);
    };
  }, []);

  return (
    <section className="header__counter">
      <span className="header__counter-marker">
        <p className="header__counter-marker-p">{counter}</p>
      </span>
      <div className="header__counter-line"></div>
      <h3 className="header__counter-total">4107</h3>
    </section>
  );
};

export default Counter;
