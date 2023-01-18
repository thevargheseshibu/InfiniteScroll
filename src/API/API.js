import axios from "axios";

export function Example(route, color, setState) {
  axios
    .get(route)
    .then(function (response) {
      let data = [];
      color && data.push(...color);

      data.push(...response.data.nodes);

      setState(data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
}
