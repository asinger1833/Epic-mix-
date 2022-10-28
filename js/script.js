const epicMix = [
  "Imagine",
  "All Along the Watchtower ",
  "Wish You Were Here",
  "Typical Situation",
  "Let it Be",
  "No Cocaine",
  "Money",
  "Miss You",
  "Breakdown",
  "Gimme Shelter",
  "Beast of Burden",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
