import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Titlecard from './Titlecard.jsx'
import { useState } from 'react'
import Footer from './Footer.jsx'

const RootComponent = () => {
  const [titlecardSpacerHeight, setTitlecardSpacerHeight] = useState(30) // initial

  const findNewHeight = (newHeight) => {
    setTitlecardSpacerHeight(newHeight)
    console.log("in findNewHeight, height is: ",newHeight)
  }

  return (
    <React.StrictMode>
      <div style={{ minWidth: "600px"}}>
        <div className="titlecard">
          <div style={{
              display: "flex",
              justifyContent: "space-between",
              flexGrow: 1,
              alignItems: "center",
              flexDirection: 'column',
              height: "85vh",
              flexBasis: "75%",
              gap: "120px"
            }}>
            <div style={{
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              minWidth: "90vw",
              maxWidth: "1400px"
            }}>
              <Titlecard findNewHeight={findNewHeight}/>
            </div>
            <div style={{
              flexBasis: "40%",
              display: "flex",
              alignItems: "end"
            }}>
              <Footer />
            </div>
          </div>
        </div>
        <App titlecardSpacerHeight={titlecardSpacerHeight}/>
      </div>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<RootComponent />)
