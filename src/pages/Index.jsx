import emailjs from "@emailjs/browser"
import { useEffect, useState } from "react"
import banner from "../assets/banner2.jpg"
import vector from "../assets/chevron-up.png"
import ecolo from "../assets/ecolo.jpg"
import prestations1 from "../assets/prestations1.webp"
import prestations2 from "../assets/prestations222.webp"
import prestations3 from "../assets/prestations3.webp"
import prestations4 from "../assets/prestations4.webp"
import prestations5 from "../assets/prestations5.webp"
import prestations6 from "../assets/prestations6.webp"
import "../styles/Index.scss"

function Index(){

   const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(prev => (prev === section ? null : section));
  };

  useEffect(() => {
    const items = document.querySelectorAll(".fade-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible"); // 🔥 important
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "hopnet123",
      "template_hls3bbo",
      e.target,
      "5a9QlNXeINK_p0GwQ"
    )
    .then(() => {
      alert("Message envoyé !");
      e.target.reset();
    })
    .catch(() => {
      alert("Erreur lors de l'envoi");
    });
};

return (
<div className="blocpage">
  <img src={banner} alt="banniere equipe hopnet" className="banner" />
    <section>
<div className="title" onClick={() => toggleSection("who")}>
 <h2>Qui sommes nous</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "who" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>

<div className={`accordion-content ${openSection === "who" ? "open" : ""}`} id="who">
  <article>
  <p className="who">
    Spécialisée dans l’entretien d’immeubles, résidences et copropriétés, nous proposons un service de nettoyage exigeant, pensé pour valoriser durablement vos espaces.

Nous accompagnons propriétaires, gestionnaires et syndics avec une approche simple : offrir un cadre propre, soigné et agréable à vivre, sans compromis sur la qualité
</p>
</article>
</div>
</section>

<section className="contexte">

<div className="title" onClick={() => toggleSection("contexte")}>
 <h2>Contexte & enjeux</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "contexte" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>
  
<div className={`accordion-content ${openSection === "contexte" ? "open" : ""}`}>
<h3>Les parties communes sont le reflet immédiat d’une résidence</h3>

<article>
<h4>Au quotidien, leur entretien conditionne</h4>

<ul>
<li>Le confort des occupants</li>
<li>La perception des lieux</li>
<li>La valorisation du bien</li>
</ul>
<p>
Un nettoyage maîtrisé permet de maintenir des espaces propres, soignés et agréables, tout en préservant durablement les installations
</p>
</article>

<article>
<h4>Aujourd’hui, les attentes sont claires</h4>

<ul>
<li>Une qualité constante</li>
<li>Une présence fiable</li>
<li>Une gestion sans contrainte</li>
</ul>
<p>C’est cette exigence que nous intégrons dans chacune de nos interventions</p>
</article>
</div>
</section>

<section className="prestations">
<div className="title" onClick={() => toggleSection("prestations")}>
 <h2>Nos prestations</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "prestations" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>
<div className={`accordion-content ${openSection === "prestations" ? "open" : ""}`}>
<h3>Des interventions sur mesure, adaptées à chaque résidence</h3>

<ul>
<li className="fade-item">
    <img src={prestations1} alt="hall"/>
    <h4>Entretien des halls et espaces d’accueil</h4>
    </li>

<li className="fade-item">
        <img src={prestations2} alt="nettoyage escaliers et paliers"/>
<h4>Nettoyage des escaliers, paliers et zones de circulation</h4>
</li>

<li className="fade-item">
            <img src={prestations3} alt="entretien ascenceur"/>
<h4>Entretien des ascenseurs</h4>
</li>

<li className="fade-item">
                <img src={prestations4} alt="nettoyage parking"/>
<h4>Nettoyage des parkings</h4>
</li>

<li className="fade-item">
                <img src={prestations5} alt="entretien local poubelles" loading="lazy"/>
<h4>Gestion et entretien des espaces déchets</h4>
</li>

<li className="fade-item">
                    <img src={prestations6} alt="nettoyage vitre"/>
    <h4>Nettoyage de la vitrerie</h4>
    </li>
</ul>
</div>
</section>

<section className="exigence">

<div className="title" onClick={() => toggleSection("exigences")}>
 <h2>Notre exigence</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "exigences" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>

<div className={`accordion-content ${openSection === "exigences" ? "open" : ""}`}>

<article>
<ul>
<li>Interventions régulières et maîtrisées</li>
<li>Équipes formées, discrètes et professionnelles</li>
<li>Suivi qualité constant</li>
<li>Réactivité et adaptabilité</li>
</ul>
<p>
Chaque détail compte. C’est cette exigence qui fait la différence au quotidien</p>

</article>

</div>
</section>

<section className="engagement">

<div className="title" onClick={() => toggleSection("engagement")}>
 <h2>Notre engagement</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "engagement" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>

<div className={`accordion-content ${openSection === "engagement" ? "open" : ""}`}>

<h3>Offrir bien plus qu’un simple service d’entretien.<br></br>

Nous nous engageons à garantir, dans la durée, un niveau de qualité constant et irréprochable.</h3>
<article>

<ul>
<li>
  <h4>Des espaces toujours impeccables</h4>
<p>Chaque intervention est réalisée avec rigueur et exigence, pour assurer des parties communes propres, soignées et agréables au quotidien.</p>
</li>
<li>
  <h4>Une image valorisée</h4>
<p>Un entretien maîtrisé contribue directement à l’attractivité et à la tenue de la résidence. Nous participons activement à préserver et valoriser votre patrimoine</p>
</li>
<li>
  <h4>Une gestion fluide et sereine</h4>
<p>Notre organisation est pensée pour vous simplifier la vie : prestations régulières, suivi précis et réactivité en cas de besoin. Vous avez l’assurance que tout est pris en charge, sans relance ni contrainte</p>
</li>
</ul>

</article>

</div>
</section>

<section className="difference">

<div className="title" onClick={() => toggleSection("difference")}>
 <h2>Ce qui nous differencie</h2>
<img 
    src={vector} 
    className={`chevron ${openSection === "difference" ? "rotate" : ""}`} 
    alt="ouvrir section"
  />
  </div>
<div className={`accordion-content ${openSection === "difference" ? "open" : ""}`}>
<h3>Au-delà de la prestation, nous apportons une véritable qualité de service.</h3>


<article>
<ul>
<li>
  <h4>Une logique de partenariat</h4>
  <p>Nous travaillons en étroite collaboration avec l’ensemble des interlocuteurs (gestionnaires, propriétaires, résidents) pour assurer un service aligné avec les attentes de chaque site</p>
  </li>
<li>
  <h4>Une approche proactive</h4>
  <p>Nous anticipons les besoins et identifions les points d’attention avant qu’ils ne deviennent des problématiques. Cette vigilance permet de maintenir un niveau de qualité constant</p>
  </li>
<li>
  <h4>Une communication claire et réactive</h4>
  <p>Un interlocuteur disponible, des échanges simples et une transparence totale sur les interventions. Vous êtes informé, sans avoir à courir après l’information</p>
  </li>
<li>
  <h4>Un objectif simple : votre tranquillité</h4>
  <p>Nous prenons en charge l’entretien dans sa globalité, avec sérieux et constance, pour vous libérer de toute contrainte liée à la gestion quotidienne</p>
  </li>
</ul>

</article>
</div>

</section>

<img src={ecolo} alt="ecologie" className="ecolo" />

<section className="contact">

  <h2>Contact</h2>

  


  <h3>
    Une question ou un besoin ?
    <br />
    Contactez-nous directement.
  </h3>

  <form className="contact-form" onSubmit={sendEmail}>

    

  <input
    type="email"
    name="email"
    placeholder="Votre adresse mail"
    required
  />

  <input
    type="text"
    name="name"
    placeholder="Société"
  />

  <select name="prestation" required>
  <option value="">Type d'intervention</option>
  <option value="Nettoayge appartement">Nettoyage appartement</option>
  <option value="Nettoayge residence">Nettoyage residence</option>
  <option value="Nettoayge parties communes">Nettoyage parties communes</option>
  <option value="Air bnb">Air bnb</option>
  <option value="Conciergerie">Conciergerie</option>
  <option value="Nettoyage parking">Nettoyage parking</option>
  <option value="Entree/Sortie de poubelles">Entree/Sortie de poubelles</option>
  <option value="Desinfection local poubelle">Desinfection local poubelle</option>
  <option value="Autre">Autre</option>
</select>

  

  <textarea
    name="message"
    placeholder="Votre message"
    rows="6"
    required
  />

    <button type="submit">
      Envoyer
    </button>

  </form>

</section>

</div>
)

}

export default Index