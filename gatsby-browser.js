import "./src/styles/index.css"
import rootWrapper from "./src/state/root-wrapper"

export const wrapRootElement = rootWrapper

export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
