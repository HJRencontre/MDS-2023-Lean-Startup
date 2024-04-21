// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";
export default function OrganizerForms() {
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        entreprise: '',
        email: '',
        demande: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailtoLink = `mailto:maxime.guyard@my-digital-school.org?subject=Demande%20de%20contact&body=Prénom:%20${encodeURIComponent(formData.prenom)}%0D%0ANom:%20${encodeURIComponent(formData.nom)}%0D%0AEntreprise:%20${encodeURIComponent(formData.entreprise)}%0D%0AEmail:%20${encodeURIComponent(formData.email)}%0D%0ADemande:%20${encodeURIComponent(formData.demande)}`;

        window.location.href = mailtoLink;

        alert('Votre demande a bien été envoyée !');

    };


    return (
        <div id="bottom">
            <div className="bg-lime text-blueMidnight p-8 space-y-10">
                <h1 className="font-bold text-5xl">Nous rejoindre</h1>
                <p className="mt-4">
                    Vous êtes un théâtre et souhaitez rejoindre Spotlive ou avez des questions ?
                </p>
                <p>
                    Remplissez ce formulaire, et vous serez recontacté dans la journée !
                </p>
                <form className="bg-white p-8 shadow-2xl rounded-xl" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-blueMidnight">Prénom</span>
                                </div>
                                <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} placeholder="Saisissez votre prénom" className="input input-bordered bg-white" required/>
                            </label>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-blueMidnight">Nom</span>
                                </div>
                                <input type="text" name="nom" value={formData.nom} onChange={handleChange} placeholder="Saisissez votre nom" className="input input-bordered bg-white" required/>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-blueMidnight">Entreprise</span>
                                </div>
                                <input type="text" name="entreprise" value={formData.entreprise} onChange={handleChange} placeholder="Saisissez le nom de votre entreprise" className="input input-bordered bg-white" required/>
                            </label>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-blueMidnight">Adresse mail</span>
                                </div>
                                <input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="mo@lie.re" className="input input-bordered bg-white" required/>
                            </label>
                        </div>
                        <div>
                            <label className="form-control">
                                <div className="label">
                                    <span className="label-text text-blueMidnight">Votre demande</span>
                                </div>
                                <textarea name="demande" value={formData.demande} onChange={handleChange} className="textarea textarea-bordered bg-white" placeholder="Dites nous en plus !" required></textarea>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="btn bg-blueElectric text-white mt-4 px-4 py-2 rounded-md">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
