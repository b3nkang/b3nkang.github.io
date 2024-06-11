import '../App.css'

function HeaderTypography({ children, headerClass, pl="0px", mb=0, mt=0}) {
    return (
        <div className={headerClass}  style={{ display: "flex", justifyContent: "start", paddingLeft: pl, marginBottom: `${mb}px`, marginTop: `${mt}px`}}><h2>{children}</h2></div>
    )
}

export default HeaderTypography;