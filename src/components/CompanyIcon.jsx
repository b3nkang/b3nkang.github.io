export default function CompanyIcon({imgSrc, alt}) {
    return (
        <div style={{
            minHeight: `100%`,
            width: `50px`,
            display: `flex`,
            justifyContent: "center",
            alignItems:"center"
        }}>
            <img
                src={imgSrc}
                alt={alt}
                style={{
                    width: `50px`, 
                    height: `50px`, 
                    borderRadius: "5px",
                    // boxShadow:  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)"
                }}
            />
        </div>
    )
}