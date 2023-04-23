import { background } from "@chakra-ui/react";
import { CSSProperties } from "@emotion/serialize";
import { StaticImageData } from "next/image";
import { FC, ReactNode } from "react";

interface SplashProps{
  children: ReactNode,
  image: StaticImageData, 
  style?: CSSProperties
}

const Splash: FC<SplashProps> =(props) => {
 return (
        <div style={{
            backgroundImage: `url(${props.image.src})`, 
            backgroundPosition: "center",  
            backgroundSize: "cover", 
            height: "75vh",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            display: "flex",
            width: "100%",
            zIndex: 0 

        
    }}>
            
            {props.children}
        </div>

 )
 }

 export default Splash