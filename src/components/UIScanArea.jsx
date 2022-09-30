import { BtnIcon, BtnPrimary } from "./UIButtons";
import { ReactSVG } from 'react-svg';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useState } from "react";

export default function UIScanArea() {

    const [data, setData] = useState("Not Found");

   

  return (
    <div className="container">

        <BarcodeScannerComponent
            width={300}
            height={300}
            onUpdate={(err, result) => {
                if (result) setData(result.text);
                else setData("Not Found");
            }}
        />
        <p>{data}</p>

        <form className="scan_wrapper">
            <input type="text"/>
            <BtnIcon>
                <>
                <ReactSVG wrapper="span" src="./qr-code.svg" />
                </>
            </BtnIcon>
            <BtnPrimary title="Scan" />
        </form>
    </div>
  )
}
