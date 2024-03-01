import { sha512 } from "js-sha512";
// const apiSecret = "8qmL9ECVkWZbkB98ei5Yg";

export const nonceAuth = async (apiSecret) => {
  function generateRandomNonce(length = 32) {
    const characters = "f11ff0da-e-442a-b23d-6b59e4e67996";
    let nonce = "";

    for (let i = 0; i < length; i++) {
      nonce += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return nonce;
  }
  let nonce = await generateRandomNonce(30);
  let hashNonce = await getHashForGet(nonce, apiSecret);
  return { nonce: nonce, hashNonce: hashNonce };
};

export function getHashForGet(nonce, apiSecret) {
  const concatenatedString = apiSecret + nonce;
  const xApiHash = sha512.create().update(concatenatedString, "utf8").hex();
  return xApiHash;
}

export function getHashForNonGet(nonce, content) {
  const concatenatedString = apiSecret + md5.create().update(content).hex() + nonce;
  const xApiHash = sha512.create().update(concatenatedString, "utf8").hex();
  return xApiHash;
}
