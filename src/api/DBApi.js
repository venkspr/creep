import axios from "axios";

const saveData = obj => {
  const { fname, lname, email, phone } = { ...obj };
  axios
    .post("http://localhost:8888/api/deals", { fname, lname, email, phone })
    .then(function(response) {
      //console.log("after post");
    });
};

const deleteOneRow = id => {
  axios
    .get("http://localhost:8888/api/deals/delete/" + id)
    .then(function(response) {});
};

export { saveData, deleteOneRow };
