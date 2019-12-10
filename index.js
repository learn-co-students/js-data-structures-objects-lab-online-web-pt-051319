
let driver = new Object();

//making changes to the new object without affecting the driver
function updateDriverWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

//making changes to the driver
function destructivelyUpdateDriverWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}
//object.key() returns all keys at the top level of hash
// this function will delete the key/value pair for the key passed in from driver
function deleteFromDriverByKey(object, key) {
  let newObj = Object.assign({}, object);
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key) {
  delete object[key];
  return object;
}