import React, { useEffect } from "react";
import "./Story.scss";
import womenImage from "../../../Images/PersonalStories/two-women.png";
import manImage from "../../../Images/PersonalStories/man.png";
import footerImage from "../../../Images/PersonalStories/footer-image.png";
import "aos/dist/aos.css";
import Aos from "aos";

function Story() {
  useEffect(() => {
    Aos.init({});
  });
  return (
    <div className="story">
      <section className="story__hero">
        <div>
          <h1 data-aos="fade-down" data-aos-delay="100">
            Maria
          </h1>
          <p data-aos="fade-up" data-aos-delay="300">
            In 1628 ingeschreven in Batavia
          </p>
        </div>
      </section>
      <section className="story__section1">
        <img
          src={womenImage}
          data-aos="fade-right"
          data-aos-offset="20"
          data-aos-delay="200"
        />
        <div data-aos="fade-left" data-aos-offset="400" data-aos-delay="400">
          <p>
            Maria was een vrouw waar we niet veel over weten. Maar wel dat ze in
            1628 in Batavia is ingeschreven als slaaf, <br />
            <br />
            Ze leefde als concubine/ njai can een VOC koopman. Een concubine is
            een ander woord voor een bijvrouw, Een vrouw met wie de man
            gemeenschap heeft naast Zijn huwelijk met zijn echte vrouw. <br />
            <br />
            Maria schonk haar eigenaar Pieter van den Broecke een zoontje, hier
            van is de naam niet bekent.{" "}
          </p>
          <a href="/persoonlijke-verhalen">
            Lees het persoonlijke verhaal van Amber, <br />
            zij was ook een Njai
          </a>
        </div>
      </section>
      <section className="story__section2">
        <div data-aos="fade-right" data-aos-offset="300" data-aos-delay="500">
          <p>
            Nadat Maria Pieter van den Broecke een zoontje schonk, maakte hij
            haar vrij en huwelijkte haar uit aan de VOC-soldaat Abraham
            Jacobsz., die tegen betaling van 600 gulden bereid was tot het
            huwelijk en overname van haar zoon.
          </p>
          <a href="/persoonlijke-verhalen">
            Pieter was ook de eigenaar van Bongo,
            <br /> Lees zijn verhaal ook
          </a>
        </div>
        <img
          src={manImage}
          data-aos="fade-left"
          data-aos-offset="100"
          data-aos-delay="200"
        />
      </section>
      <section className="story__section3">
        <a href="/persoonlijke-verhalen">Bekijk meer persoonlijke verhalen</a>
        <img
          src={footerImage}
          data-aos="fade-up"
          data-aos-offset="600"
          data-aos-delay="0"
        />
      </section>
    </div>
  );
}

export default Story;
