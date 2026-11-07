# Heistboard

A Sly Cooper–inspired mission planning web app where players
will create fictional heists, organize objectives, and assign crew roles.

## Project Status

**v0.3 — Add and Complete Mission Objectives**

Submit a mission name and description to display the current briefing
without reloading the page. A new valid submission replaces the briefing.
Entries containing only spaces show a validation message and preserve
the current briefing. Mission names are limited to 60 characters and
descriptions to 300 characters.

Add objectives using the objective form. Each objective appears with a
checkbox; checking it crosses out its text, and unchecking it restores the
text. New objectives keep the existing checklist. Empty or whitespace-only
objectives are rejected.

The briefing and objectives reset when the page is refreshed; saving is
planned for a later version.

## Planned Features

- Assign Infiltrator, Tech Specialist, and Muscle crew roles.
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
