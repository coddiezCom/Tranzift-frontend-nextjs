import axios from "axios";

const RELOADLY_AUTH_URL = "https://auth.reloadly.com/oauth/token";

const reloadlyClientId = "HFa22wluMfbrNJPtp1WRxfTXPOWPS67g";
const reloadlyClientSecret = "7l668c1xuV-nSJxgC5bOT610Ru2IPU-FhFA4NA4kO9GyqbH6R9MDSMaxVNWzPaf";
const reloadlyAudience = "https://giftcards-sandbox.reloadly.com";

async function reloadBearerToken() {
  try {
    const response = await axios.post(
      RELOADLY_AUTH_URL,
      {
        client_id: reloadlyClientId,
        client_secret: reloadlyClientSecret,
        grant_type: "client_credentials",
        audience: reloadlyAudience,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.error("Error reloading Reloadly token:", error.message);
    throw error;
  }
}

export default reloadBearerToken;
