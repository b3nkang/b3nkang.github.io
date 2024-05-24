export default function Spacer({color, height, text}) {
    const spacerStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        minHeight: `${height}vh`
    }

    return (
        <div className="spacer" style={spacerStyling}>{text}</div>
    )
}