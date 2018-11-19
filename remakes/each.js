const _ = {};

//_.each(list, callback)

_.each = function(arr, cb) {
  const newArr = [];

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      newArr.push(cb(arr[i], i, arr));
    }
  } else {
    for (let key in arr) {
      cb(arr[key], key, arr);
    }
  }
};

_.each(list, cb);
