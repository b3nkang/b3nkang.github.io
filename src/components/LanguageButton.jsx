export default function LanguageButton({ text, iconStyling, display="block" }) {
    return (
        <div style={{
            display: display,
            borderRadius: "10px",
            padding: "6px 10px 3px 10px",
            backgroundColor: "rgba(80,80,80,1.0)",
            color: "white",
            transition: "opacity 1.75s ease-in-out",
            ...iconStyling
        }}>
            {text}
        </div>
    )
}