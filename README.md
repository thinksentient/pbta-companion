# PBTA Companion App

A google spreadsheet powered Epyllion helper tool for games over Discord.

You can try it out with the sample spreadsheet here:

[pbta-companion.web.app](https://pbta-companion.web.app/#/1zsNjx1f-lErQgzCla7Of95VdZaStpiWT4Jr-AB7ig0M)


## Usage

### Sample spreadsheet

https://docs.google.com/spreadsheets/d/1zsNjx1f-lErQgzCla7Of95VdZaStpiWT4Jr-AB7ig0M

There's enough added to the sample spreadsheet so that you can [preview the app](https://pbta-companion.web.app/#/1zsNjx1f-lErQgzCla7Of95VdZaStpiWT4Jr-AB7ig0M).

To run your own game and for local developemnt copy the spreadsheet above and fill it with the details for your game. Make sure that the google spreadsheet is publicly readable (view permissions for anyone with a link).

### Systems

The app at the moment only supports Epyllion. I might explore other PBTAs in the future (PRs welcome).

**Epyllion** Play as a dragon :) ROAR! [Epyllion Core Book](https://www.magpiegames.com/epyllion/)

## Installation

Install dependencies

```bash
npm install
```

For local developemnt run:

```bash
npm run start
```

To build for release:

```bash
npm run build
```

## Spreadsheet Documentations

All the data is contained in the default google docs sheet.

Campaign info comes first followed by the "---" delimiter that indicates the start of the character details section.

### Campaign Fields

**Campaign**
The name of your campaign. 

**System**
Epyllion (sorry, nothing else available yet...)

**Locations**
An optional link to a document that describes the world.

**Game Discord Webhook**
The webhook link to the main game channel. This will allow the app to send roll results during the game.

### Character Fields

One row per character.