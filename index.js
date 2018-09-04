var recipes = { b: "Abc"};

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
