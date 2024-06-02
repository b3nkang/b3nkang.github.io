export default function Spacer({color, height, text, zindex, marginTop=0, marginBottom=0}) {
    const spacerStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        minHeight: `${height}`,
        marginTop: `${marginTop}vh`,
        marginBottom: `${marginBottom}vh`,
        // zIndex: zindex
    }

    return (
        <div className="spacer" style={spacerStyling}>{text}</div>
    )
}