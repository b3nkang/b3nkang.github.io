export default function SpacerWave({
    color, 
    height, 
    text
}) {
    const spacerStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        minHeight: `${height}px`,
        zIndex: 1
    }

    return (
        <div className="spacerWave" style={spacerStyling}>{text}</div>
    )
}