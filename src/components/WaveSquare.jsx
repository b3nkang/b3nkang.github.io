import '../App.css'

function WaveSquare({ children, waveStyle, waveClass }){
    return (
        <div className={waveClass} style={waveStyle}>
            {children}
        </div>
    )
}

export default WaveSquare;


// import '../App.css'

// function WaveSquare({ children, squareStyle, squareClass }){
//     return (
//         <div className='waveSquare'>
//             {squareClass.reduceRight((squarePrev, currentClass, index) => {
//                 <div key={currentClass} className={currentClass} style={squareStyle[index]}>
//                     {squarePrev}
//                 </div>
//             }, children)}
//         </div>
//     )
// }

// export default WaveSquare;