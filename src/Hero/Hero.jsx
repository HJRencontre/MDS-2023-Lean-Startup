import MapRevealed from "../MapRevealed/MapRevealed.jsx";

export default function Hero(){
    return (
        <div className="min-h-screen hero bg-blueMidnight">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/mapsketch.png" className="max-w-sm rounded-lg" />
                <div>

                    <div className="grid grid-cols-2">
                        <h1 className="text-left text-5xl font-bold">La culture</h1>
                    <img className="h-20 w-64 origin-top-left justify-start" src="https://raw.githubusercontent.com/HJRencontre/MDS-2023-Lean-Startup/7bfe9ddd26904686f8d23103dcc191ac1ab12684/src/assets/images/titlewavesketch.png" />
                    </div>

                    <h1 className="text-left text-5xl font-bold">à portée de pas.</h1>
                    <p className="py-6 text-left">Réservez vos places, visionnez des vidéos exclusives
                        de ces lieux et plongez dans une experience culture inoubliable !</p>
                    <button className="btn bg-blueElectric text-lime" onClick={()=>document.getElementById('my_modal_3').showModal()}>Souscrire à la beta </button>
                    <dialog id="my_modal_3" className="modal bg-lime">
                        <div className="modal-box bg-blueElectric">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <h3 className="text-lg font-bold">La culture a portée de pas</h3>
                            <p className="py-4">Glissez le slider pour révéler la culture autour de vous !</p>
                            <div className="modal-action">
                                <MapRevealed></MapRevealed>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}