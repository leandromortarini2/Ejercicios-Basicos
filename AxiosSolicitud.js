import axios from "axios";

async function getUsersToken() {
  const token = localStorage.getItem("token");

  try {
    const res = await axios.get("url", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error, "error al realizar la solicitud");
  }
}
