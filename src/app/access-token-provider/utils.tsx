"use server"

import { ClientCredentials, ModuleOptions } from "simple-oauth2";

// Set the config for the OAuth2 client
const oauthConfig: ModuleOptions<"client_id"> = {
  client: {
    id: process.env.APPLICATION_ID ?? "",
    secret: process.env.APPLICATION_SECRET ?? "",
  },
  auth: {
    tokenHost: process.env.TOKEN_HOST ?? "",
    tokenPath: process.env.TOKEN_PATH ?? "",
  },
};

// Create the OAuth2 client
const oauth2Client = new ClientCredentials(oauthConfig);

export async function fetchToken() {

  // Get a token using the client credentials
  const res = await oauth2Client.getToken({});
  const accessToken = res.token["access_token"] as string;
  return accessToken;
}