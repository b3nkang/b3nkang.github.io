export default function Spacer({color, height, text, zindex}) {
    const spacerStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        minHeight: `${height}px`,
        // zIndex: zindex
    }

    return (
        <div className="spacer" style={spacerStyling}>{text}</div>
    )
}