import './Titlecard.css';

function Titlecard(){

    return (
        <div className='panel'>
            <div className='header'>
                <h1 className='titlecardName'>ben kang</h1>
                <div className="contactPanel">
                    <div>email: <a className="contact" href="mailto: ben_kang@brown.edu">ben_kang@brown.edu</a></div>
                    <div>github: <a className="contact" href="github.com/b3nkang">b3nkang</a></div>
                    <div>linkedin: <a className="contact" href="linkedin.com/in/b3nkang">in/b3nkang</a></div>
                </div>
            </div>
            <div className='description'>
                Hi, welcome to my personal site! My name is Ben, and I'm a software developer and sophomore at Brown University. 
                <div className="br"></div>
                I'm interested in computer science broadly, with a focus on systems, and I also do full-stack development. At Brown, I'm on the Sc.B. track for Computer Science.
                <div className="br"></div>
                On the side, I misplay the Grand Prix Attack on Chess.com, struggle to keep up with Brown's Cycling Team, and do some formal photography when I can find the time!
            </div>
        </div>
    )
}

export default Titlecard;