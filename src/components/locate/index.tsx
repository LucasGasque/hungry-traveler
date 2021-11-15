import { LocationData } from "../../types"
import { Button } from "./style"
import compass from '../../img/compass.png'

interface LocateProps{
    panTo: ({lat, lng }: LocationData)=> void
    center: LocationData
}

const Locate = ({ panTo, center }: LocateProps) =>{
    return(
        <Button
            onClick={()=> panTo(center)}
        >
            <img src={compass} alt='locate'/>
        </Button>
    )
}

export default Locate