import $ from "jquery";

const getPeople = (data, array) => {
  data.slice([0], [99]).map((person) => {
    array.push(person);
  });
};

const createArray = (data) => {
  const names = data.map((obj) => obj.Naam);
  const list = document.getElementsByClassName("randomName");

  window.setInterval(() => {
    const randomNamesIndex = Math.floor(Math.random() * names.length);
    const randomLiIndex = Math.floor(Math.random() * list.length);
    $(list[randomLiIndex]).fadeOut("slow", () => {
      $(list[randomLiIndex]).html(names[randomNamesIndex]);
      $(list[randomLiIndex]).fadeIn();
    });
  }, 2000);
};

export { getPeople, createArray };
