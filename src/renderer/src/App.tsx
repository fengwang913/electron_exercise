// import MyTable from './table'
import { BrowserRouter } from "react-router-dom";
import Router from "./router/router";

function App(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
     <BrowserRouter>
        <Router />
     </BrowserRouter>
      
    </>
  )
}

export default App
