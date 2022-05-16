import axios from 'axios'

export default axios.create({
  baseURL: "https://groupy-app.herokuapp.com/api/",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token")
  }
});
