export default function Events() {
    return (<div className="w-auto border-2 card border-lime">
            <div className="card lg:card-side">
                <img src="src/assets/images/mapsketch2.png" alt=""/>
                <div>
                    <h1 className="text-left text-5xl font-bold">Comédie des 3 Bornes</h1>
                    <div className="flex place-items-center">
                        <img src="src/assets/images/pin.png" alt=""/>
                        <p> 32 Rue des Trois Bornes, 75011 Paris - 300mètres</p>
                    </div>
                    <p className="m-0 text-justify font-bold sm: md:mt-14">
                        Au coeur du 11ème arrondissement de Paris, la Comédie des 3 bornes existe depuis plus de 20 ans.
                        Reprise par Anne Auffret, Florent Aumaître et Arnaud Schmitt en 2017, la salle a été rénovée
                        pour le plus grand confort des artistes et des spectateurs.
                        Elle s’est confirmée au fil des années comme une référence où toutes les comédies se
                        rencontrent, du théâtre au spectacle musical en passant par le seul en scène.
                    </p>
                </div>
            </div>
            <div className="space-y-4">
                <h1 className="text-left text-5xl font-bold">A la une</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-blueMidnight">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/alamericaine.jpeg"
                                     alt="event1"/></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                <div className="badge badge-primary bg-blue">Humour</div>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="card-title font-bold text-2xl">
                                    À l'Américaine
                                </h2>
                                <h2 className="font-bold text-2xl">
                                    10€
                                </h2>
                            </div>


                            <p className="text-justify">Plongez dans l'univers comique incisif et électrisant de Sophie et Alexandra. Leur regard acéré révèle avec audace les travers de notre société moderne qui progresse et régresse simultanément...</p>
                            <div className="rating gap-2 mt-2">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400"/>
                                5
                            </div>
                            <div className="flex items-center">
                                <div className="bg-grey rounded-xl p-1 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-justify">Dans 57min</p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/event4.jpeg"
                                     alt="event1"/></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                <div className="badge badge-neutral bg-orange">Improvisation</div>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="card-title font-bold text-2xl">
                                    Disgressions
                                </h2>
                                <h2 className="font-bold text-2xl">
                                    10€
                                </h2>
                            </div>


                            <p className="text-justify">Une digression, disons que c'est une parenthèse. C'est amusant d'ailleurs que "parenthèse" s'écrive entre guillemets ! Contrairement à "guillemets" qui... ah si ! Là oui du coup.
                                Digressions est un spectacle d'improvisation d'une heure, qui se laisse divaguer au gré des situations, qui ne promet ni début, ni fin...</p>
                            <div className="rating gap-2 mt-2">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400"checked/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400"/>
                                3
                            </div>
                            <div className="flex items-center">
                                <div className="bg-grey rounded-xl p-1 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-justify">Demain</p>
                            </div>
                        </div>
                    </div>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src="src/assets/images/event3.jpeg"
                                     alt="event1"/></figure>
                        <div className="card-body">
                            <div className="card-actions justify-start">
                                <div className="badge badge-primary bg-blue">Humour</div>
                            </div>
                            <div className="flex justify-between">
                                <h2 className="card-title font-bold text-2xl text-left">
                                    Mell
                                </h2>
                                <h2 className="font-bold text-2xl">
                                    13€
                                </h2>
                            </div>


                            <p className="text-justify">Ce spectacle c'est mon histoire
                                Mes rêves, mes doutes, mes petits bonheurs
                                Ça parle de moi, mais aussi un peu de vous
                                ...</p>
                            <div className="rating gap-2 mt-2">
                                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400"/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" checked/>
                                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400"/>
                                4
                            </div>
                            <div className="flex items-center">
                                <div className="bg-grey rounded-xl p-1 mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <p className="text-justify">Dans 3 jours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
}