import React from "react";
import data from "../../Data/dataset1.json";
import $ from "jquery";
import {
  deleteAfterDash,
  deleteAfterSpace,
  unkownName,
  getNamesByLetter,
} from "../../Scripts/helperFunctions";

const cleaningData = deleteAfterDash(data);
const cleaningData2 = deleteAfterSpace(cleaningData);
export const cleanedData = unkownName(cleaningData2);
const A = getNamesByLetter(cleanedData, "A");
const B = getNamesByLetter(cleanedData, "B");
const C = getNamesByLetter(cleanedData, "C");
const D = getNamesByLetter(cleanedData, "D");
const E = getNamesByLetter(cleanedData, "E");
const F = getNamesByLetter(cleanedData, "F");
const G = getNamesByLetter(cleanedData, "G");
const H = getNamesByLetter(cleanedData, "H");
const I = getNamesByLetter(cleanedData, "I");
const J = getNamesByLetter(cleanedData, "J");
const K = getNamesByLetter(cleanedData, "K");
const L = getNamesByLetter(cleanedData, "L");
const M = getNamesByLetter(cleanedData, "M");
const N = getNamesByLetter(cleanedData, "N");
const O = getNamesByLetter(cleanedData, "O");
const P = getNamesByLetter(cleanedData, "P");
const Q = getNamesByLetter(cleanedData, "Q");
const R = getNamesByLetter(cleanedData, "R");
const S = getNamesByLetter(cleanedData, "S");
const T = getNamesByLetter(cleanedData, "T");
const U = getNamesByLetter(cleanedData, "U");
const V = getNamesByLetter(cleanedData, "V");
const W = getNamesByLetter(cleanedData, "W");
const X = getNamesByLetter(cleanedData, "X");
const Y = getNamesByLetter(cleanedData, "Y");
const Z = getNamesByLetter(cleanedData, "Z");

const Search = () => {
  return (
    <section className="search">
      <div className="overlay"></div>
      <section className="search__area">
        <a className="search__area-filter" href=""></a>
        <input type="text" name="name" placeholder="Zoek op jou leeftijd..." />
        <ul className="search__area-list">
          <li>
            <a href="#a">A</a>
          </li>
          <li>
            <a href="#b">B</a>
          </li>
          <li>
            <a href="#c">C</a>
          </li>
          <li>
            <a href="#d">D</a>
          </li>
          <li>
            <a href="#e">E</a>
          </li>
          <li>
            <a href="#f">F</a>
          </li>
          <li>
            <a href="#g">G</a>
          </li>
          <li>
            <a href="#h">H</a>
          </li>
          <li>
            <a href="#i">I</a>
          </li>
          <li>
            <a href="#j">J</a>
          </li>
          <li>
            <a href="#k">K</a>
          </li>
          <li>
            <a href="#l">L</a>
          </li>
          <li>
            <a href="#m">M</a>
          </li>
          <li>
            <a href="#n">N</a>
          </li>
          <li>
            <a href="#o">O</a>
          </li>
          <li>
            <a href="#p">P</a>
          </li>
          <li>
            <a href="#q">Q</a>
          </li>
          <li>
            <a href="#r">R</a>
          </li>
          <li>
            <a href="#s">S</a>
          </li>
          <li>
            <a href="#t">T</a>
          </li>
          <li>
            <a href="#u">U</a>
          </li>
          <li>
            <a href="#v">V</a>
          </li>
          <li>
            <a href="#w">W</a>
          </li>
          <li>
            <a href="#x">X</a>
          </li>
          <li>
            <a href="#y">Y</a>
          </li>
          <li>
            <a href="#z">Z</a>
          </li>
        </ul>
      </section>
      <section className="search__list">
        <ul>
          {A.map((person, id) => (
            <li id="a" className="randomNameA" key={id}>
              {person}
            </li>
          ))}
          {B.map((person, id) => (
            <li id="b" className="randomNameB" key={id}>
              {person}
            </li>
          ))}
          {C.map((person, id) => (
            <li id="c" className="randomNameC" key={id}>
              {person}
            </li>
          ))}
          {D.map((person, id) => (
            <li id="d" className="randomNameD" key={id}>
              {person}
            </li>
          ))}
          {E.map((person, id) => (
            <li id="e" className="randomNameE" key={id}>
              {person}
            </li>
          ))}
          {F.map((person, id) => (
            <li id="f" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {G.map((person, id) => (
            <li id="g" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {H.map((person, id) => (
            <li id="h" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {I.map((person, id) => (
            <li id="i" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {J.map((person, id) => (
            <li id="j" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {K.map((person, id) => (
            <li id="k" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {L.map((person, id) => (
            <li id="l" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {M.map((person, id) => (
            <li id="m" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {N.map((person, id) => (
            <li id="n" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {O.map((person, id) => (
            <li id="o" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {P.map((person, id) => (
            <li id="p" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {Q.map((person, id) => (
            <li id="q" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {R.map((person, id) => (
            <li id="r" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {S.map((person, id) => (
            <li id="s" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {T.map((person, id) => (
            <li id="t" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {U.map((person, id) => (
            <li id="u" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {V.map((person, id) => (
            <li id="v" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {W.map((person, id) => (
            <li id="w" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {X.map((person, id) => (
            <li id="x" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {Y.map((person, id) => (
            <li id="y" className="randomName" key={id}>
              {person}
            </li>
          ))}
          {Z.map((person, id) => (
            <li id="z" className="randomName" key={id}>
              {person}
            </li>
          ))}
        </ul>
      </section>
      <section className="zoom">
        <div className="zoom__plus">+</div>
        <div className="zoom__min">-</div>
        <p className="zoom__text">
          <b>400</b> van de <b>160.000</b>
        </p>
      </section>
    </section>
  );
};

export default Search;
