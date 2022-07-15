import React from "react";
import inst1 from "../asset/instruments/inst1.png";
import inst2 from "../asset/instruments/inst2.png";
import inst3 from "../asset/instruments/inst3.png";
import inst4 from "../asset/instruments/inst4.png";
import inst5 from "../asset/instruments/inst5.png";

import sound1 from '../asset/audio/metal.mp3'
import sound2 from '../asset/audio/janggu.mp3'
import sound3 from '../asset/audio/drum.mp3'
import sound4 from '../asset/audio/jing.mp3'
import sound5 from '../asset/audio/sogo.mp3'

const index = [0, 1, 2, 3, 4];
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(index);

const _inst = [
  [inst1, "쇠"],
  [inst2, "장구"],
  [inst3, "북"],
  [inst4, "징"],
  [inst5, "소고"],
];

const _sound = [
  new Audio(sound1),
  new Audio(sound2),
  new Audio(sound3),
  new Audio(sound4),
  new Audio(sound5),
]

const size = [
  50 * Math.random() + 150,
  50 * Math.random() + 100,
  100 * Math.random + 50,
  50 * Math.random() + 75,
  25 * Math.random() + 75,
];
shuffle(size);

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function Pungmul() {
  return (
    <>
      <div
        className="contents"
        style={{
          height: "100vh",
        }}
      >
        <div
          className="showName"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            className="inst"
            src={_inst[index[0]][0]}
            alt=""
            style={{ height: size[1], filter: "invert(100%)" }}
            onClick={() => _sound[index[0]].play()}
          />
          <div className="text">{_inst[index[0]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            top: getRandomNumber(130, 200),
            left: getRandomNumber(100, 500),
          }}
        >
          <img
            className="inst"
            src={_inst[index[1]][0]}
            alt=""
            style={{ height: size[1], filter: "invert(100%)" }}
            onClick={() => _sound[index[1]].play()}
          />
          <div className="text">{_inst[index[1]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            top: getRandomNumber(130, 200),
            right: getRandomNumber(100, 500),
          }}
        >
          <img
            className="inst"
            src={_inst[index[2]][0]}
            alt=""
            style={{ height: size[2], filter: "invert(100%)" }}
            onClick={() => _sound[index[2]].play()}
          />
          <div className="text">{_inst[index[2]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            bottom: getRandomNumber(100, 200),
            left: getRandomNumber(100, 500),
          }}
        >
          <img
            className="inst"
            src={_inst[index[3]][0]}
            alt=""
            style={{ height: size[3], filter: "invert(100%)" }}
            onClick={() => _sound[index[3]].play()}
          />
          <div className="text">{_inst[index[3]][1]}</div>
        </div>

        <div
          className="showName"
          style={{
            position: "absolute",
            bottom: getRandomNumber(100, 200),
            right: getRandomNumber(100, 500),
          }}
        >
          <img
            className="inst"
            src={_inst[index[4]][0]}
            alt=""
            style={{ height: size[4], filter: "invert(100%)" }}
            onClick={() => _sound[index[4]].play()}
          />
          <div className="text">{_inst[index[4]][1]}</div>
        </div>
      </div>
    </>
  );
}

export default Pungmul;
