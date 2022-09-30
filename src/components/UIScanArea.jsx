import { BtnIcon, BtnPrimary } from "./UIButtons";
import { ReactSVG } from 'react-svg';
import { useState } from "react";
import UIScanner from "./UIScanner";

export default function UIScanArea() {

    const [isVisible, setVisible] = useState(false);

    const openscanner = ()=> {
        setVisible(!isVisible)
    }
   

  return (
    <div className="container">

       

        <form className="scan_wrapper">
            <input type="text"/>
            <BtnIcon clicked={openscanner}>
                <>
                <ReactSVG wrapper="span" src="./qr-code.svg" />
                </>
            </BtnIcon>
            <BtnPrimary title="Scan" />
        </form>

        {
            isVisible &&

            <UIScanner clicked={openscanner}/>
        }
    </div>
  )
}
