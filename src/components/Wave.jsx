import './Components.css'

export default function Wave({color, height, text}) {
    const spacerStyling = {
        // backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        // minHeight: `${height}vh`
        marginBottom: "-10px"
    }

    return (
        <div style={spacerStyling} className="svg-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="320"> 
                <path 
                    fill={`rgba(${color.r},${color.g},${color.b},${color.a})`} 
                    fillOpacity="1" 
                    // d="M 0 64 L 24 58.7 C 48 53 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1008 202.7 C 1056 192 1105 186 1153 187 C 1207 185 1248 192 1296 213.3 C 1344 235 1392 277 1416 298.7 L 1440 320 L 1440 520 L 0 520 L 0 320 Z"
                    d="M 0 64 L 24 58.7 C 48 53 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1219 182 1232 184 1312 218 C 1375 256 1387 253 1439 318 L 1440 320 L 1440 520 L 0 520 L 0 320 Z"
                >
                </path>
            </svg>
        </div>
    )
}