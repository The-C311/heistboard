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
