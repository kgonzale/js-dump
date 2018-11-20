const _ = {};

_.map = function(list, cb) {
  const storage = [];
  //   for (let i = 0; i < list.length; i++) {
  //     storage.push(cb(list[i], i, list));
  //   }
  _.each(list, function(v, i, list) {
    if (cb(v, i, list)) {
      storage.push(cb(v, i, list));
    }
  });

  return storage;
};
