import "@styles/globals.css"
import { Provider } from "react-redux"
import store from "@store/search"
import { Toaster } from "react-hot-toast"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
