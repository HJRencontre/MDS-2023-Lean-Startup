// eslint-disable-next-line no-unused-vars
import React from "react";
export default function OrganizerHero(){
  return (
    <div className="min-h-screen hero ">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/mapsketch.png" className="max-w-sm rounded-lg" />
        <div>

          <div className="grid grid-cols-2">
            <h1 className="text-left text-5xl font-bold">Optimisez vos événements avec Spotlive</h1>
            <img className="h-20 w-64 origin-top-left justify-start" src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/titlewavesketch.png"
                 alt="Image de présentation"/>
          </div>
          <p className="py-6 text-left">Gérez efficacement la vente de billets, atteignez un public plus large et offrez
            une expérience unique à vos participants grâce à notre plateforme dédiée aux organisateurs d'événements.</p>
        </div>
      </div>
    </div>
  )
}