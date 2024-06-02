import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from '../utils/ColorProps';
import Spacer from './Spacer'

export default function BWGradient({
    indexMod=1, 
    spacerHeight=5, 
    colorArray=[bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20] 
}) {

    return (
        <>     
            { 
                colorArray.map((color, index) => index % indexMod === 0 ?
                <Spacer key={index} color={color} height={spacerHeight} /> : null
            )}
        </>
    )
}