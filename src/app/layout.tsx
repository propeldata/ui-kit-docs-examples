import type { Metadata } from "next";
import { ClientCredentials, ModuleOptions } from "simple-oauth2";
import "./globals.css";
import { ThemeProvider, AccessTokenProvider } from "@propeldata/ui-kit";
import { unstable_noStore as noStore } from "next/cache";

export const metadata: Metadata = {
  title: "Propel Embeddable UI Examples",
  description: "Examples of all Embeddable UI components.",
};

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  noStore()

  // Get a token using the client credentials
  const res = await oauth2Client.getToken({});
  const accessToken = res.token["access_token"] as string;
  return (

    <html lang="en">
      <body>
        <AccessTokenProvider accessToken={accessToken}>
          <ThemeProvider>
              {children}
          </ThemeProvider>
        </AccessTokenProvider>
      </body>
    </html>
  );
}
