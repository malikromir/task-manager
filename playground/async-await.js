const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbers should be positive");
      }
      resolve(a + b);
    }, 2000);
  });
};

const doWork = async () => {
  const sum = await add(1, 2);
  const sum1 = await add(sum, -3);
  return sum1;
};

doWork()
  .then((result) => {
    console.log("Result: ", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
