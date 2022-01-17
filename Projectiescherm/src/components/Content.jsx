import data from "../data/dataset1.json";
import { getPeople, createArray } from "../scripts/helperFunctions";

console.log(data);

const setofpeople100 = [];

getPeople(data, setofpeople100);

createArray(data);

const test = createArray(data);

console.log(test);

const Content = () => {
  return (
    <div className="content">
      {data &&
        setofpeople100.map(({ Naam, ID }) => (
          <p className="randomName" key={ID}>
            {Naam}
          </p>
        ))}
    </div>
  );
};

export default Content;
