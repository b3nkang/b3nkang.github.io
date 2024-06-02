import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from '../utils/ColorProps';
import Spacer from './Spacer'
import SpacerWave from './SpacerWave';
import Wave from './Wave';
import './Components.css'

export default function BWGradientWave({overallGradStyling, nextSectionRef, svgPath="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -319 297 -152 228 C -96 207 -54 156 -24 126 L -24 126 C 5 97 31 80 78 76 C 118 74 157 85 183 106 C 234 152 254 159 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z", indexMod =1, spacerHeight=5, colorArray=  [bwgrad2, bwgrad3, bwgrad5, bwgrad7, bwgrad9, bwgrad11, bwgrad13, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] }) {
    return (
        <div style={overallGradStyling}>     
            { 
                colorArray.map((color, index) => {
                    const isRefIndex = index === colorArray.length - 10 ? true : false
                    const isLast = index === colorArray.length - 1 ? true : false

                    return (
                        <div key={index} style={{ marginBottom: (index === colorArray.length - 1) ? "0px" : "-750px" }}>
                            <Wave svgPath={svgPath} color={color} />
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
                                        minHeight: `100px`,
                                        marginTop: "-80px"
                                    }
                                }
                            >
                            </div>}
                        </div>
                    );
                })
            }
        </div>
    )
}