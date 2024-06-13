import './Titlecard.css';
import { useEffect, useRef } from 'react';

function Titlecard({ findNewHeight }){
    const descRef = useRef(null)

    const updateHeight = () => {
        if (descRef.current) {
            findNewHeight(descRef.current.getBoundingClientRect().bottom)
            // console.log("useEffect hit with ref of height: ",descRef.current.getBoundingClientRect().bottom)
        }
    }

    useEffect(() => {
        updateHeight();
        window.addEventListener('resize', updateHeight);

        return () => {
        window.removeEventListener('resize', updateHeight);
        };
    },[findNewHeight])
    
    // useEffect(() => {
    //     if (descRef.current) {
    //         findNewHeight(descRef.current.clientHeight)
    //         console.log("useEffect hit with ref of height: ",descRef.current.clientHeight)
    //     }
    // }, [descRef, findNewHeight]);

    return (
        <div className='panel'>
            <div className='header'>
                <h1 className='titlecardName'>ben kang</h1>
                <div className="contactPanel">
                    <div>email: <a className="contact" href="mailto: ben_kang@brown.edu"target="_blank" rel="noopener noreferrer">ben_kang@brown.edu</a></div>
                    <div>github: <a className="contact" href="https://github.com/b3nkang"target="_blank" rel="noopener noreferrer">b3nkang</a></div>
                    <div>linkedin: <a className="contact" href="https://linkedin.com/in/b3nkang" target="_blank" rel="noopener noreferrer">in/b3nkang</a></div>
                </div>
            </div>
            <div className='description'>
                Hi, welcome to my personal site! My name is Ben, and I'm a software developer and junior at Brown University.
                <div className="br"></div>
                I'm interested in computer science broadly, with a focus on systems, and I also do full-stack development. At Brown, I'm on the Sc.B. track for Computer Science.
                {/* <div className="br"></div>
                On campus, I'm involved with Full Stack @ Brown, Brown Chess Club, and Brown Cycling Team. */}
                <div className="br"></div>
                {/* In my spare time, I can be found misplaying the Grand Prix Attack on Chess.com, updating my list of favorite restaurants on Beli, and doing some photography work here and there! */}
                On the side, I can be found misplaying the Grand Prix Attack on Chess.com, struggling to keep up on Brown Cycling Team rides, and doing some photography work here and there!
                <div ref={descRef}></div>
            </div>
        </div>
    )
}

export default Titlecard;