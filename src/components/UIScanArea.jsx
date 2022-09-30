import { BtnIcon, BtnPrimary } from "./UIButtons";
import { ReactSVG } from 'react-svg';
import { useEffect, useState } from "react";
import UIScanner from "./UIScanner";
import axios from "axios";
import UIUser from "./UIUser";

export default function UIScanArea() {

    const [isVisible, setVisible] = useState(false);
    const [qrcode, setCode] = useState('');
    const [userData, setUserData] = useState();

    const openscanner = ()=> {
        setVisible(!isVisible)
    }

    const setQrCode = (value)=> {
        setCode(value);
    }

    const valueChanged = (event)=> {
        setCode(event.target.value)
    }   


    useEffect(()=> {

        if(qrcode.length) {
            const gq = axios.get(qrcode).then((res)=> {
                console.log(res.data)
                setUserData(res.data)
            })
        }

    }, [qrcode])
   

  return (
    <div className="container">

       

        <form className="scan_wrapper">
            <input type="text" value={qrcode} onChange={valueChanged}/>
            <BtnIcon clicked={openscanner}>
                <>
                <ReactSVG wrapper="span" src="./qr-code.svg" />
                </>
            </BtnIcon>
            <BtnPrimary title="Scan" />
        </form>

        {
            isVisible &&

            <UIScanner clicked={openscanner} getQrCode={setQrCode}/>
        }

        {
            userData &&

            <UIUser data={userData} />
        }

    </div>
  )
}
