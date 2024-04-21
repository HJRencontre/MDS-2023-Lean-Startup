// eslint-disable-next-line no-unused-vars
import React from "react";
import progressImage from "../assets/organizer/progress.svg";
import dashboardImage from "../assets/organizer/dashboard.svg";
import loveImage from "../assets/organizer/love.svg"

export default function OrganizerServices(){
  return (
    <div className="bg-white text-blueMidnight p-10 rounded-t-3xl">
      <div className="lg:grid grid-cols-2 items-center">
        <figure><img className="bg-trans p-10 rounded-lg" src={progressImage} alt="Stat"/></figure>
        <div className="card-body">
          <h2 className="font-bold card-title text-blueMidnight text-2xl">Augmentez vos revenus</h2>
          <p className="text-justify">Optimisez la vente de vos billets en ligne et maximisez vos revenus grâce à notre
            plateforme de billetterie moderne et performante.</p>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 items-center">
        <div className="card-body">
          <h2 className="font-bold card-title text-blueMidnight text-2xl text-left">Dotez vous dune gestion de billetterie moderne</h2>
          <p className="text-justify">Profitez d'un système de billetterie simple à utiliser, personnalisable et
            sécurisé, offrant une expérience fluide tant pour vous que pour vos spectateurs.</p>
        </div>
        <figure><img className="bg-trans p-10 rounded-lg" src={dashboardImage} alt="Stat"/></figure>

      </div>

      <div className="lg:grid grid-cols-2 items-center">
        <figure><img className="bg-trans p-10 rounded-lg" src={loveImage} alt="Stat"/></figure>
        <div className="card-body">
          <h2 className="font-bold card-title text-blueMidnight text-2xl">Reconnectez avec votre quartier</h2>
          <p className="text-justify">Favorisez les interactions avec la communauté locale en organisant des événements
            culturels et en facilitant l'accès à la culture pour tous.</p>
        </div>
      </div>
</div>
)
  ;
}