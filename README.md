# gatsby-plugin-reactfire

`FirebaseAppProvider` component from [`reactfire`](https://github.com/FirebaseExtended/reactfire) as a Gatsby plugin.

## 🤷‍♂️ Why?

I needed to set up a `FirebaseAppProvider` _inside another plugin's Context Provider_. Making this into a plugin allows me to easily order them in `gatsby-config.js`.

## 💻 Install

This plugin uses `firebase` and `reactfire`, make sure to install those too.

```shell
yarn add firebase reactfire gatsby-plugin-reactfire
```

## ⚙ Configure

Add the plugin to your `gatsby-config.js` as usual, and pass the `firebaseConfig` object from your Firebase [project's settings](https://console.firebase.google.com/project/_/settings/general) at the plugin's options.

For example:

```js
// ...
plugins: [
  {
    resolve: `gatsby-plugin-reactfire`,
    options: {
      firebaseConfig: {
        apiKey: "API_KEY",
        authDomain: "PROJECT_ID.firebaseapp.com",
        projectId: "PROJECT_ID",
        storageBucket: "PROJECT_ID.appspot.com",
        messagingSenderId: "SENDER_ID",
        appId: "APP_ID",
        measurementId: "G-MEASUREMENT_ID",
      },
    },
  },
  // `gatsby-plugin-something-else`,
]
// ...
```

That's it!

Now you can use any of the hooks and components from [`reactfire`](https://github.com/FirebaseExtended/reactfire) in your site pages and components.

## 👥 Shadowing

This plugin sets up a very basic `FirebaseAppProvider`, no `Suspense` or anything. It's literally this:

```js
import React from "react"
import { FirebaseAppProvider } from "reactfire"

export const wrapRootElement = ({ element }, { firebaseConfig }) => {
  if (typeof window === "undefined") return <p>Loading...</p>
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      {element}
    </FirebaseAppProvider>
  )
}
```

You can [shadow](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/) a `src/gatsby-plugin-reactfire/provider.js` and write your own.
