export function generateRandomString(length: number) {
  let text: string = "";
  let possible: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  console.log(text);
  return text;
}

//code challenge

// async function generateCodeChallenge(codeVerifier: string) {
//   function base64encode(string: any) {
//     return window
//       .btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
//       .replace(/\+/g, "-")
//       .replace(/\//g, "_")
//       .replace(/=+$/, "");
//   }
//   const encoder = new TextEncoder();
//   const data = encoder.encode(codeVerifier);
//   const digest = await window.crypto.subtle.digest("SHA-256", data);

//   return base64encode(digest);
// }
