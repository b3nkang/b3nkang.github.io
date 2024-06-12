export default function Footer() {
    return (
        <div className="spacer" style={{
            backgroundColor: `aliceblue`,
            // minHeight: `33vh`,
            // marginTop: `-30vh`,
            width:"100%",
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            justifyContent: 'end',
            padding: '0 0 5vh 0'
        }}>
            <div style={{
                display: "flex",
                flexDirection: 'column',
                gap: "10px",
                alignItems: 'center',
            }}>
            <div style={{marginRight:"3vw", zIndex: "3000"}}>last updated june 2024</div>
            <div style={{
                display: "flex",
                gap: "20px"
            }}>
                <div>email: <a className="contact" href="mailto: ben_kang@brown.edu"target="_blank" rel="noopener noreferrer">ben_kang@brown.edu</a></div>
                <div>github: <a className="contact" href="https://github.com/b3nkang"target="_blank" rel="noopener noreferrer">b3nkang</a></div>
                <div>linkedin: <a className="contact" href="https://linkedin.com/in/b3nkang" target="_blank" rel="noopener noreferrer">in/b3nkang</a></div>
            </div>
            </div>
        </div>
    )
}