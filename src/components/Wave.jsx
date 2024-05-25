import './Components.css'

export default function Wave({color, height, text, className}) {
    const spacerStyling = {
        // backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        // minHeight: `${height}vh`
        marginBottom: "-10px"
    }

    return (
        <div style={spacerStyling} className={`svg-container ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" width="100%" height="320"> 
                <path 
                    fill={`rgba(${color.r},${color.g},${color.b},${color.a})`} 
                    fillOpacity="1" 
                    // d="M 0 64 L 24 58.7 C 48 53 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1008 202.7 C 1056 192 1105 186 1153 187 C 1207 185 1248 192 1296 213.3 C 1344 235 1392 277 1416 298.7 L 1440 320 L 1440 520 L 0 520 L 0 320 Z"
                    // d="M 0 64 L 24 58.7 C 48 53 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1219 182 1232 184 1312 218 C 1375 256 1387 253 1439 318 L 1440 320 L 1440 520 L 0 520 L 0 320 Z"
                    // d="M0,320L17.1,266.7C34.3,213,69,107,103,96C137.1,85,171,171,206,176C240,181,274,107,309,80C342.9,53,377,75,411,117.3C445.7,160,480,224,514,229.3C548.6,235,583,181,617,160C651.4,139,686,149,720,144C754.3,139,789,117,823,144C857.1,171,891,245,926,266.7C960,288,994,256,1029,240C1062.9,224,1097,224,1131,229.3C1165.7,235,1200,245,1234,240C1268.6,235,1303,213,1337,213.3C1371.4,213,1406,235,1423,245.3L1440,256L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
                    // d="M -1709 537 C -677 485 -601 462 -349 320 C -271.3333 271.6667 -107 66 -2 44 L 0 44 C 52 33 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1219 182 1232 184 1312 218 C 1375 256 1387 253 1493 386 C 1533 451 1739 513 1862 513 L 1697 513 L 1510 513 L 0 520 L -1231 527 Z"
                    // d="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -319 297 -216 155 C -147 76 -45 49 -2 44 L 0 44 C 59 37 96 43 144 69.3 C 192 96 240 160 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z"
                    d="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -319 297 -152 228 C -96 207 -54 156 -24 126 L -24 126 C 5 97 31 80 78 76 C 118 74 157 85 183 106 C 234 152 254 159 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z"
                    // d="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -346 278 -156 136 C -106 100 -50 79 -11 80 L -11 80 C -11 80 17 80 60 87 C 86 91 116 101 140 113 C 206 152 224 163 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z"
                    // d="M -1680 312 C -1546 312 -1231 316 -724 310 C -405 293 -346 278 -156 136 C -106 100 -50 79 -11 80 L -11 80 C -11 80 30 79 62 85 C 93 89 128 106 151 120 C 206 152 253 161 288 160 C 336 160 384 96 432 80 C 480 64 528 96 576 138.7 C 624 181 672 235 720 256 C 768 277 816 267 864 250.7 C 912 235 960 213 1012 199 C 1054 185 1106 177 1157 179 C 1193 180 1221 186 1260 198 C 1303 213 1325 226 1357 245 C 1408 277 1463 307 1645 310 C 1938 315 1710 312 2087 317 L 2090 509 L 1510 513 L 0 520 L -1680 537 Z"
                >   
                </path>
            </svg>
        </div>
    )
}