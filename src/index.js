export function zipWithIndex(list) {
  return list.map((entity, index) => [entity, index]);
}

export function* fetchText(url) {
  yield {
    _type: "Pending",
  };

  return fetch(url)
    .then((response) => response.text())
    .then((response) => ({ _type: "Ok", [0]: response }))
    .catch((error) => ({ _type: "Error", [0]: error }));
}
