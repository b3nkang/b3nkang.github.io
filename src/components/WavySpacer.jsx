export default function WavySpacer({color, height, text}) {
    const spacerStyling = {
        // backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        // minHeight: `${height}vh`
        marginBottom: "-10px"
    }

    return (
        <div style={spacerStyling}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path 
                    fill={`rgba(${color.r},${color.g},${color.b},${color.a})`} 
                    fillOpacity="1" 
                    d="M0,64L24,58.7C48,53,96,43,144,69.3C192,96,240,160,288,160C336,160,384,96,432,80C480,64,528,96,576,138.7C624,181,672,235,720,256C768,277,816,267,864,250.7C912,235,960,213,1008,202.7C1056,192,1104,192,1152,192C1200,192,1248,192,1296,213.3C1344,235,1392,277,1416,298.7L1440,320L1440,520L0,520L0,320Z"
                >
                </path>

            </svg>
        </div>
    )
}