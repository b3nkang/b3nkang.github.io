import './Components.css'

export default function Wave({
    color, 
    height, 
    text, 
    className, 
    svgPath="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -319 297 -152 228 C -96 207 -54 156 -24 126 L -24 126 C 5 97 31 80 78 76 C 118 74 157 85 183 106 C 234 152 254 159 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z"
}) {
    
    const spacerStyling = {
        // backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        // minHeight: `${height}vh`
        marginBottom: "-10px"
    }

    return (
        <div style={spacerStyling} className={`svg-container ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="320"> 
                {/* <rect width="100%" height="100%" fill="black" /> */}
                <path 
                    fill={`rgba(${color.r},${color.g},${color.b},${color.a})`} 
                    fillOpacity="1" 
                    d={svgPath}
                >   
                </path>
            </svg>
        </div>
    )
}