export default function Hero(){
    return (
        <div className="min-h-screen hero bg-blueMidnight">
            <div className="flex-col hero-content lg:flex-row-reverse">
                <img src="src/assets/images/mapsketch.png" className="max-w-sm rounded-lg" />
                <div>

                    <div className="grid grid-cols-2">
                        <h1 className="text-left text-5xl font-bold">La culture</h1>
                    <img className="h-20 w-64 origin-top-left justify-start" src="src/assets/images/titlewavesketch.png" />
                    </div>

                    <h1 className="text-left text-5xl font-bold">à portée de pas.</h1>
                    <p className="py-6 text-left">Réservez vos places, visionnez des vidéos exclusives
                        de ces lieux et plongez dans une experience culture inoubliable !</p>
                    <button className="btn bg-blueElectric text-lime" onClick={()=>document.getElementById('my_modal_1').showModal()}>Souscrire à la beta </button>
                    <dialog id="my_modal_1" className="modal bg-lime">
                        <div className="modal-box bg-blueElectric">
                            <h3 className="text-lg font-bold">Join our waitlist !</h3>
                            <p className="py-4">Register to be noticed when the app will be ready ! 🙌</p>
                            <div className="modal-action">
                                <input type="text" placeholder="wolfgang@mozart.com" className="w-full max-w-xs input input-bordered" />
                                <form method="dialog">

                                    <button className="btn">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    )
}