import data from "../data/dataset1.json";
import {
  getPeople,
  createArray,
  deleteAfterDash,
  deleteAfterSpace,
  unkownName,
} from "../scripts/helperFunctions";

const cleaningData = deleteAfterDash(data);
const cleaningData2 = deleteAfterSpace(cleaningData);
export const cleanedData = unkownName(cleaningData2);

const setofpeople1 = [];
const setofpeople2 = [];
const setofpeople3 = [];

getPeople(cleanedData, setofpeople1, 0, 69);
getPeople(cleanedData, setofpeople2, 69, 138);
getPeople(cleanedData, setofpeople3, 138, 207);

createArray(cleanedData);

const Content = ({ name, personalName }) => {
  return (
    <div className="content">
      <div className="content__column">
        {setofpeople1.map((person, id) => (
          <p className="randomName" key={id}>
            {person}
          </p>
        ))}
      </div>
      <div className="content__column">
        {name}
        {data &&
          setofpeople2.map((person, id) => (
            <p className="randomName" key={id}>
              {person}
            </p>
          ))}
      </div>
      <div className="content__column">
        {personalName}
        {data &&
          setofpeople3.map((person, id) => (
            <p className="randomName" key={id}>
              {person}
            </p>
          ))}
      </div>
    </div>
  );
};

export default Content;
