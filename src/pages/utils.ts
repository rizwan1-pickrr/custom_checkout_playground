import { sha256 } from "js-sha256";

export function getUrls(env: string, type: "js" | "css" | "login_token" | "checkout_token") : string{
  if (env == 'prod') {
    switch (type) {
      case "js":
        return "https://fastrr-boost-ui.pickrr.com/assets/js/channels/login.js";
      case "css":
        return "https://fastrr-boost-ui.pickrr.com/assets/styles/shopify.css?v=123";
      case "login_token":
        return "https://fastrr-api.pickrr.com/api/v1/access-token/login";
      case "checkout_token":
        return "https://fastrr-api.pickrr.com/api/v1/access-token/checkout";
    }
  } else {
    switch (type) {
      case "js":
        return "https://custom-login-sr.netlify.app/assets/js/channels/login.js";
      case "css":
        return "https://custom-login-sr.netlify.app/assets/styles/shopify.css?v=123";
      case "login_token":
        return "https://fastrr-api-dev.pickrr.com/api/v1/access-token/login";
      case "checkout_token":
        return "https://fastrr-api-dev.pickrr.com/api/v1/access-token/checkout";
    }
  }
}

export function hmacInBase64(as: string, content: string): string {
  let computedHmac = sha256.hmac(as, content);
  return Buffer.from(computedHmac, 'hex').toString('base64')
}

export async function fetchToken(env: string, type: "login_token" | "checkout_token", data_str: string, ak: string, as: string) {
  const data_json = JSON.parse(data_str);
  if (data_json["timestamp"]!.startsWith("$")) {
    data_json["timestamp"] = (new Date()).toISOString();
  }
  data_str = JSON.stringify(data_json);
  const res = await fetch(getUrls(env, type), {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Api-Key": ak,
      "X-Api-HMAC-SHA256": hmacInBase64(as, data_str)
    },
    body: data_str
  });
  const resBody = await res.json();
  console.log("fetchToken", res.status, resBody);
  if (res.status != 200 || !resBody.ok) {
    throw `Cannot fetch token. Response: ${res.status} ${JSON.stringify(resBody)}`;
  }
  return resBody.result.token;
}
