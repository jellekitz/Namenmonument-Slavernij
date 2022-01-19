import $ from "jquery";

const getPeople = (data, array, first, last) => {
  data.slice([first], [last]).map((person) => {
    array.push(person);
  });
};

const createArray = (data) => {
  const list = document.getElementsByClassName("randomName");

  window.setInterval(() => {
    const randomNamesIndex = Math.floor(Math.random() * data.length);
    const randomLiIndex = Math.floor(Math.random() * list.length);

    console.log(randomNamesIndex);
    console.log(randomLiIndex);
    $(list[randomLiIndex]).fadeOut(1500, () => {
      $(list[randomLiIndex]).html(data[randomNamesIndex]);
      $(list[randomLiIndex]).fadeIn(1500);
    });
  }, 400);
};

const deleteAfterDash = (data) => {
  const names = data.map((obj) => obj.Naam);

  const emptyArray = [];

  names.forEach((name) => {
    const deletedAfterDash = name.split("/")[0];

    emptyArray.push(deletedAfterDash);
  });

  return emptyArray;
};

const deleteAfterSpace = (data) => {
  const emptyArray = [];

  data.forEach((name) => {
    const deletedAfterSpace = name.split(" ")[0];

    emptyArray.push(deletedAfterSpace);
  });

  return emptyArray;
};

const unkownName = (data) => {
  const emptyArray = [];

  data.forEach((name) => {
    const unkown = name
      .replace("Slaafgemaakt", "Onbekend")
      .replace("Slaafgemaakte", "Onbekend")
      .replace("Mannelijke", "Onbekend")
      .replace("Mannelijk", "Onbekend")
      .replace("Vrouwelijke", "Onbekend")
      .replace("Vrouwelijk", "Onbekend");

    emptyArray.push(unkown);
  });

  return emptyArray;
};

export {
  getPeople,
  createArray,
  deleteAfterDash,
  deleteAfterSpace,
  unkownName,
};
