import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Titlecard from './Titlecard.jsx'
import { useState, useEffect } from 'react'
import Footer from './Footer.jsx'

const RootComponent = () => {
  const [titlecardSpacerHeight, setTitlecardSpacerHeight] = useState(30) // initial

  const findNewHeight = (newHeight) => {
    setTitlecardSpacerHeight(newHeight)
    // console.log("in findNewHeight, height is: ",newHeight)
  }

  // const adjustViewport = () => {
  //   let viewportMetaTag = document.querySelector('meta[name="viewport"]');
  //   if (window.innerWidth <= 430) {
  //     // viewportMetaTag.setAttribute('content', 'width=600, initial-scale=' + (window.innerWidth / 430));
  //     console.log("switch to mobile")
  //     viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.8');
  //   } else {
  //     viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
  //   }
  // }

  // adjustViewport();
  // window.addEventListener('resize', adjustViewport);

  // useEffect(() => {
  //   if (window.innerWidth) {
  //     adjustViewport()
  //   }
    
  //   window.addEventListener('resize', adjustViewport);

  //   return () => {
  //       window.removeEventListener('resize', adjustViewport);
  //   }
  // }, [])


  // function adjustViewport() {
  //   const viewportMetaTag = document.querySelector('meta[name="viewport"]');
  //   if (window.innerWidth <= 600) {
  //     viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=0.5');
  //   } else {
  //     viewportMetaTag.setAttribute('content', 'width=device-width, initial-scale=1.0');
  //   }
  // }

  // // Adjust viewport on page load
  // adjustViewport();

  // // Adjust viewport on window resize
  // window.addEventListener('resize', adjustViewport);



  return (
    <React.StrictMode>
      <div className="siteBounder" style={{ minWidth: "600px"}}>
        <div className="titlecard">
          <div style={{
              display: "flex",
              flexGrow: 1,
              alignItems: "center",
              flexDirection: 'column',
              flexBasis: "75%",
              gap: "120px",
              height: "85vh",
              justifyContent: "space-between",
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
