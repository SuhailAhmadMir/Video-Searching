import axios from "axios"

const KEY = "AIzaSyC2WN15gNrMt4dQbPzBd1s3w4D8JbYyfCo"

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
})
