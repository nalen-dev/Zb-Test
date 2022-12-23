const data = [
  { firstName: "Adi", lastName: "Nugroho", age: 25 },
  { firstName: "Deddy", lastName: "Dores", age: 25 },
];

function result(data) {
  const map = {};
  const props = [];
  for (let i = 0; i < data.length; i++) {
    for (const key in data[i]) {
      if (i > 0 && map[key] != data[i][key]) {
        props.push(key);
      }
      map[key] = data[i][key];
    }
  }
  return props;
}

console.log(result(data));
