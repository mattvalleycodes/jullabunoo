# Jullabunoo

"Jullabunoo" is a responsive Airport Directory web app written in React. It uses Qantas API to fetch the data and serve it to the client.



## Goal

The primary goal of developing Jullabunoo was to explore the idea of building a "Data Fetching / Manipulation Layer" for a React application using components. Currently, the idea is being implemented as `<Data />` component.



## Application Design

Jullabunoo is build on top of one of React's most powerful features to day, composition. Routing, Data Fetching, Data Transformation and UI renderings are all done using composition. 



## Prequesties

- Node.js v12.6.0+



## Installation

To run Jullabunoo locally, run the following commands

```
git clone git@github.com:mattvalleycodes/jullabunoo.git
cd jullabunoo
npm install
npm start
```



## Commands

Jullabunoo comes with a set of useful commands:

* `npm start` runs a local version of "Jullabunoo". It's available via `http://localhost:2020`
* `npm test` runs all of the tests
* `npm run lint` runs the linter
* `npm run build` builds a production-ready version of Jullabunoo



## TODO

Jullabunoo is still a Work In Progress. Below is my plan for this project:

* Switch from "Local Storage" as storage for caching to something better. "Local Storage" is really slow and requires converting JSON objects to string as it doesn't support objects out of the box! 
* Write unit tests for the missing scenarios 
* Fix React errors during test execution 
* Extend the `<Data />` component to support more features.