import data from "./data.json";

const queryObj = {};

for (let key in data) {
  queryObj[key] = data[key].map((element) =>
    element.description
      .toLowerCase()
      .split("")
      .filter((element) => element !== " ")
      .join("")
  );
}

const matchFinder = (match, prevMatch) => {
  const result = prevMatch;
  for (let key in data) {
    let query = queryObj[key]
      .map((element) =>
        element.includes(match) && !result.includes(element) ? key : null
      )
      .filter((element) => element)[0];
    query ? result.push(query) : null;
    if (result.length > 2) {
      break;
    }
  }
  return result.length === 3 ? result : matchFinder(match.substr(1), result);
};

console.log(matchFinder("disco", []));
