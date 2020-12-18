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
