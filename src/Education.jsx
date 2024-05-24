function Education({color = {r:0,g:0,b:0,a:1.0,}}){
    const divStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    }

    return(
        <div className="panelEd" style={divStyling}>
            <h1>TEST</h1>
        </div>
    )
}

export default Education;