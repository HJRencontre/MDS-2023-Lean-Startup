export default function Navbar() {
    return (
        <div className="navbar" id="home">
            <div className="flex-1">
                <img src="src/assets/images/typography.png" className="w-24 md:w-40" />
            </div>
            <div className="flex-none">
                <a href="#bottom" className="border-2 btn btn-outline border-lime text-lime">
                    Je suis organisateur
                    <img src="src/assets/forms/arrowdown.png" className="max-w-sm rounded-lg" />
                </a>
            </div>
        </div>
    )
}