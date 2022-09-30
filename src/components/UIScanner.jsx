import { useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { ReactSVG } from 'react-svg';

export default function UIScanner({clicked, getQrCode}) {

    const [data, setData] = useState("Not Found");


  return (
    <div className="scanner_area">
        <div className="overlay_"></div>

        <div className="placeholder_">
            <BarcodeScannerComponent
                onUpdate={(err, result) => {
                    if (result){
                        setData(result.text);
                        getQrCode(result.text);
                        clicked();
                    }
                    else {
                        setData("Not Found")
                    };
                }}
            />
            <p>{data}</p>
        </div>

        <div className="clsoe_btn" onClick={clicked}>
            <ReactSVG wrapper="span" src="./x.svg" />
        </div>
    </div>
  )
}
