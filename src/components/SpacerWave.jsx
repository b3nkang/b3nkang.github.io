export default function SpacerWave({color, height, text}) {
    const spacerStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        minHeight: `${height}px`
    }

    return (
        <div className="spacerWave" style={spacerStyling}>{text}</div>
    )
}