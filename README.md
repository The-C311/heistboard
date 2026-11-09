# Heistboard

A Sly Cooper–inspired mission planning web app where players
will create fictional heists, organize objectives, and assign crew roles.

## Project Status

**v0.5 — Style the Mission Board**

The mission board uses midnight-blue panels, gold accents, and a subtle
blueprint grid. The layout stacks on smaller screens, with visible keyboard
focus, readable form fields, and green crossed-out completed objectives.
All styling uses local CSS with system fonts; no external assets are required.

The final palette combines the original Midnight & Gold surfaces with blue
buttons and white button text. Crew assignments use blue for Infiltrator,
green for Tech Specialist, and pink for Muscle.

Submit a mission name and description to display the current briefing
without reloading the page. A new valid submission replaces the briefing.
Entries containing only spaces show a validation message and preserve
the current briefing. Mission names are limited to 60 characters and
descriptions to 300 characters.

Add objectives using the objective form. Each objective appears with a
checkbox; checking it crosses out its text, and unchecking it restores the
text. New objectives keep the existing checklist. Empty or whitespace-only
objectives are rejected.

Enter a crew member's name for the Infiltrator, Tech Specialist, and Muscle
roles, then select **Assign Crew** to display the assignments. All three
names are required; whitespace-only names are rejected without changing
the current crew. A valid resubmission updates the assignments and keeps
the briefing and objectives intact.

The briefing, objectives, and crew reset when the page is refreshed;
saving is planned for a later version.

## Planned Features

- Save mission progress in the browser using localStorage.

## Technologies

- HTML
- CSS
- JavaScript

## Run Locally

Clone or download this repository, then open index.html
in a web browser.

## Learning Goals

Practice accessible HTML forms, responsive styling,
JavaScript DOM manipulation, event handling, and browser storage.

## Inspiration

Inspired by my love for the Sly Cooper franchise and its
heist planning missions. This is an unofficial personal
learning project.
