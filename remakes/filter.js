const _ = {};

_.filter = function(list, cb) {
  const storage = [];

  _.each(arr, function(item, i, list) {
    if (cb(item, i, list)) {
      storage.push(item);
    }
  });

  return storage;
};
