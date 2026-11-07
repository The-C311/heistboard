const missionForm = document.querySelector("#mission-form");
const missionName = document.querySelector("#mission-name");
const missionDescription = document.querySelector("#mission-description");
const currentMissionName = document.querySelector("#current-mission-name");
const currentMissionDescription = document.querySelector("#current-mission-description");
const missionError = document.querySelector("#mission-error");

missionForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = missionName.value.trim();
  const description = missionDescription.value.trim();

  if (!name || !description) {
    missionError.textContent = "Enter a mission name and description.";
    (!name ? missionName : missionDescription).focus();
    return;
  }

  missionError.textContent = "";
  currentMissionName.textContent = name;
  currentMissionDescription.textContent = description;
});

const objectiveForm = document.querySelector("#objective-form");
const objectiveText = document.querySelector("#objective-text");
const objectiveError = document.querySelector("#objective-error");
const objectiveList = document.querySelector("#objective-list");
const objectivesEmpty = document.querySelector("#objectives-empty");

objectiveForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = objectiveText.value.trim();

  if (!text) {
    objectiveError.textContent = "Enter an objective.";
    objectiveText.focus();
    return;
  }

  const item = document.createElement("li");
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  const description = document.createElement("span");

  checkbox.type = "checkbox";
  description.textContent = text;
  label.append(checkbox, description);
  item.append(label);
  objectiveList.append(item);

  objectivesEmpty.hidden = true;
  objectiveError.textContent = "";
  objectiveText.value = "";
  objectiveText.focus();
});
