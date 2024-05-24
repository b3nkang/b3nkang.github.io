import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from '../utils/ColorProps';
import Spacer from './Spacer'
import WavySpacer from './WavySpacer';

export default function BWGradient({indexMod =1, spacerHeight=5, colorArray=  [bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] }) {

    return (
        <>     
            { 
                colorArray.map((color, index) => index % indexMod === 0 ?
                <div style={{marginBottom:"-500px"}}>
                    <WavySpacer color={color}/>
                    <Spacer color={color} height={spacerHeight} />
                </div> : null

            )}
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,64L24,58.7C48,53,96,43,144,69.3C192,96,240,160,288,160C336,160,384,96,432,80C480,64,528,96,576,138.7C624,181,672,235,720,256C768,277,816,267,864,250.7C912,235,960,213,1008,202.7C1056,192,1104,192,1152,192C1200,192,1248,192,1296,213.3C1344,235,1392,277,1416,298.7L1440,320L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg> */}
        </>
    )
}

// const svgPath = "M0,50 Q25,0 50,50 T100,50";
// const svgPath = "M20,50 S30,40 40,50 S70,70 80,40"
// const svgPath = "M20,100 S30,-10 40,100 S70,120 80,-10"
// const svgPath = "M0,100 S20,-200 30,100 S90,120 100,-10"


// export default function BWGradient({ indexMod = 1, spacerHeight = 10, colorArray = [bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] }) {
//   return (
//     <>     
//       { 
//         colorArray.map((color, index) => (
//           index % indexMod === 0 ? (
//             <WavySpacer key={index} color={`rgba(${color.r},${color.g},${color.b},${color.a})`} height={spacerHeight} svgPath={svgPath} />
//           ) : null
//         ))
//       }
//     </>
//   );
// }