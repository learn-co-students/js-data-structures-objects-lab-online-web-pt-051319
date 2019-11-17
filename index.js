let driver = {};

let destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
	driver[key] = value;
	return driver;
};

let updateDriverWithKeyAndValue = (driver, key, value) => {
	let newdriver = { ...driver };
	newdriver[key] = value;
	return newdriver;
};

let deleteFromDriverByKey = (driver, key) => {
	let newdriver = { ...driver };
	delete newdriver[key];
	return newdriver;
};

let destructivelyDeleteFromDriverByKey = (driver, key) => {
	delete driver[key];
	return driver;
};