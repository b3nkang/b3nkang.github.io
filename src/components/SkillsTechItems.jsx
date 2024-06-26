function SkillsTechItem({ gap=10, mb=20, skillsArray, itemName, iconStyling}) {
    return (
        <div style={{
            width: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            gap: `${gap}px`,
            marginBottom: `${mb}px`,
        }}>
            <div style={{
                flexGrow: 1,
                flexBasis: "30%",
                fontFamily: "canela-dregular",
                fontSize: "20px",
                padding: "5px 5px 2px 0px",
                lineHeight: 1
            }}>
                {itemName}
            </div>
            <div style={{                                                 
                width: "auto",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                gap: "6px",
                flexWrap: "wrap",
                flexBasis: "70%"
            }}>
                { skillsArray.map((imgUrl) => {
                    return <img key={imgUrl} src={`https://github.com/onemarc/tech-icons/raw/main/icons/${imgUrl}.svg`} style={{ width: '50px', ...iconStyling}} />
                })}
            </div>
        </div>
    )
}

export default SkillsTechItem;