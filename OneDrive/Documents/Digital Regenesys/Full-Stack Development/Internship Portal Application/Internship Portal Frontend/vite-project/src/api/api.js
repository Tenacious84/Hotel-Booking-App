import axios from 'axios'



import axios from "axios";

export const getAll = async () => {
  try {
    const res = await axios.get(
      "http://localhost:4000/api/profile/694509a68f012b8f6f4f44e"
    );
    console.log("API RESPONSE ✅", res.data);
    return res.data;
  } catch (err) {
    console.error(
      "API ERROR ❌",
      err.response?.data || err.message
    );
    throw err;
  }
};


// export const getAll= async ()=>{
//    await axios.get('http://localhost:4000/api/profile/694509a68f012b8f6f4f444e')
//     .then((res) => {
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err.data)
//     })
// }