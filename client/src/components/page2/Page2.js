import React from 'react';
import './Page2.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const Page2 = () => {
return(
    <div className="centerContainer">
        <div className="fontTitle">KRETZ</div>
        <div className="fontBold">PLUS QU'UNE</div>
        <div className="fontBold">AGENCE IMMOBILIERE,</div>
        <div className="fontBold">UNEMAISON DE</div>
        <div className="fontBold">FEMILLE</div>
        <div className="smallGap"></div>
        <div className="fontSmall">Fondée en 2007 par Sandrine et Olivier Kretz, KRETZ est une société </div>
        <div className="fontSmall">indépendante spécialisée dans l’immobilier de luxe en France et à </div>
        <div className="fontSmall">l’international. </div>
        <div className="fontSmall">Rejoints par leurs trois enfants, Martin, Valentin et Louis, c’est en famille, dans leur</div>
        <div className="fontSmall">maison-bureau des années 30 à Boulogne Billancourt, qu’ils inventent une autre</div>
        <div className="fontSmall">façon de faire de l’immobilier : plus innovante, plus personnalisée, plus généreuse.</div>
        <div className="smallGap"></div>
        <Button variant="outlined">Découvrir l’agence</Button>
        </div>
);
}
export default Page2;