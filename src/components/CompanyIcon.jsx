export default function CompanyIcon({
    imgSrc, 
    alt, 
    styling
}) {
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
                style={{
                    width: "51px",
                    height: "51px",
                    borderRadius: "4px",
                    marginBottom: "6px",
                    transition: "opacity 1.75s ease-in-out",
                    ...styling
                }}
            />
        </div>
    )
}