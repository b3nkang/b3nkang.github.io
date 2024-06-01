export default function CompanyIcon({imgSrc, alt, styling}) {
    return (
        <div className="" style={{
            minHeight: `100%`,
            width: `50px`,
            display: `flex`,
            justifyContent: "center",
            alignItems:"center"
        }}>
            <img
                src={imgSrc}
                alt={alt}
                className="companyIcon"
                style={styling}
            />
        </div>
    )
}