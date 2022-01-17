import data from "../data/dataset1.json";

console.log(data);

const setofpeople = [];

data.slice([0], [100]).map((person, i) => {
  setofpeople.push(person);
});

console.log(setofpeople);

const Content = () => {
  return (
    <div className="content">
      {data && setofpeople.map(({ Naam, ID }) => <p key={ID}>{Naam}</p>)}
    </div>
  );
};

export default Content;
