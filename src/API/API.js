import axios from "axios";

export function APIFetch(route, apiData, setState) {
  axios
    .get(route)
    .then(function (response) {
      let data = [];
      apiData && data.push(...apiData) ;
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
