import * as React from "react";
import { tns } from "tiny-slider";

const Facts = () => {
  const { useState, useEffect } = React;

  const [slider, setSlider] = useState(0);

  useEffect(() => {
    const slider = tns({
      container: ".facts__slider",
      items: 1,
      autoplay: false,
      autoplayButtonOutput: false,
      controls: false,
      nav: true,
      speed: 500,
      navPosition: "bottom",
      navAsThumbnails: true,
      loop: true,
      swipeAngle: false,
    });
    setSlider(slider);
  }, []);

  return (
    <div className="facts">
      <div className="facts__wrapper">
        <ul className="facts__slider">
          <li className="facts__slider-item">
            <h2>Wist je dat…</h2>
            <p>
              Naar schatting er totaal <b>1.000.000</b> tot <b>2.000.000</b> tot
              slaaf gemaakte mensen waren.
            </p>
          </li>
          <li className="facts__slider-item">
            <h2>Wist je dat…</h2>
            <p>
              Onze datasets uit <b>ouwe geschriften</b> komen die later terug
              gevonden zijn.
            </p>
          </li>
          <li className="facts__slider-item">
            <h2>Wist je dat…</h2>
            <p>
              Slaven soms <b>meerdere keren</b> in hun leven <b>verkocht</b>{" "}
              werden.
            </p>
          </li>
          <li className="facts__slider-item">
            <h2>Wist je dat…</h2>
            <p>
              De kans groot is dat <b>jouw stamboom</b> ook verwant is aan de
              slavernij.
            </p>
            <a href="/persoonlijke-verhalen">
              Nieuwsgierig geworden? Zoek dan tussen de namen
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Facts;
