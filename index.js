var recipes = { b: "Abc"};

function updateObjectWithKeyAndValue (object, key, value) {
  var object = { b: "Abc"};
  return Object.assign({}, object, {[key]: value});
}

