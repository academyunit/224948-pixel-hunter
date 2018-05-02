export const adaptServerData = (questions) => {
  let count = 0;
  let dataObject = {};
  const preLastLevel = 9;

  questions.forEach((item) => {
    dataObject[`level_${count}`] = item;
    if (count !== preLastLevel) {
      dataObject[`level_${count}`][`next-level`] = `level_${++count}`;
    }
  });

  return dataObject;
};
