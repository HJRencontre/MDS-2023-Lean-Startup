// eslint-disable-next-line no-unused-vars
import React from "react";
export default function Services() {
    return (
        <>
            <div className="lg:grid grid-cols-2 items-center">
                <figure><img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/emplacement.png" alt="Album"/></figure>
                <div className="card-body">
                    <h2 className="font-bold card-title text-lime text-2xl">(Re)découvrir les lieux</h2>
                    <p className="text-justify">Partez à la (re)découverte des théâtres à proximité de vous grâce à notre carte interactive ! Vous pourrez localiser les lieux et acheter des billets pour des spectacles dans votre région en toute simplicité.</p>
                </div>
            </div>
            <div className="lg:grid grid-cols-2 items-center">
                <div className="card-body">
                    <h2 className="font-bold card-title text-lime text-2xl">Billetterie</h2>
                    <p className="text-justify">Découvrez une sélection de tickets pour le cinéma, le théâtre et les musées à proximité. Profitez d'une expérience culturelle riche en découvrant les trésors artistiques de votre région. Achetez vos tickets dès maintenant et plongez dans l'univers captivant de la culture locale.</p>
                </div>
                <figure><img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/billetterie.png" alt="Album"/></figure>
            </div>
            <div className="lg:grid grid-cols-2 items-center">
                <figure>
                    <img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/keepintouch.png" alt="Album"/>
                </figure>
                <div className="card-body flex flex-col justify-center">
                    <h2 className="font-bold card-title text-lime text-2xl">Restez informés</h2>
                    <p className="text-justify">Un bon plan ? Un nouvel événement ? De nouveaux lieux ? De nouvelles pièces de théâtre ? Activez vos notifications pour ne rien rater et être les premiers informés.</p>
                </div>
            </div>
        </>
    );
}