import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from '../utils/ColorProps';
import Spacer from './Spacer'
import SpacerWave from './SpacerWave';
import Wave from './Wave';

export default function BWGradientWave({indexMod =1, spacerHeight=5, colorArray=  [bwgrad2, bwgrad3, bwgrad5, bwgrad7, bwgrad9, bwgrad11, bwgrad13, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] }) {

    return (
        <>     
            { 
                colorArray.map((color, index) => (
                    <div key={index} style={{ marginBottom: (index === colorArray.length - 1) ? "0px" : "-750px" }}>
                        <Wave color={color} />
                        <SpacerWave color={color} height={spacerHeight} />
                    </div>
                ))
            }
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