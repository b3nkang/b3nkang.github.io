import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from '../utils/ColorProps';
import Spacer from './Spacer'
import SpacerWave from './SpacerWave';
import Wave from './Wave';
import './Components.css'

export default function BWGradientWave({nextSectionRef, indexMod =1, spacerHeight=5, colorArray=  [bwgrad2, bwgrad3, bwgrad5, bwgrad7, bwgrad9, bwgrad11, bwgrad13, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] }) {

    return (
        <>     
            { 
                colorArray.map((color, index) => {
                    const isRefIndex = index === colorArray.length - 10 ? true : false
                    const isLast = index === colorArray.length - 1 ? true : false

                    return (
                        <div key={index} style={{ marginBottom: (index === colorArray.length - 1) ? "0px" : "-750px" }}>
                            <Wave color={color} />
                            {!isLast && !isRefIndex && <SpacerWave color={color} height={spacerHeight} />}
                            {isRefIndex && <div 
                                ref={nextSectionRef}
                                className="spacerWave" 
                                style={
                                    {
                                        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                                        minHeight: `${spacerHeight}px`,
                                    }
                                }
                            >
                            </div>}
                            {isLast && <div 
                                className="spacerWave" 
                                style={
                                    {
                                        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                                        minHeight: `0px`,
                                    }
                                }
                            >
                            </div>}
                        </div>
                    );
                })
            }
        </>
    )
}