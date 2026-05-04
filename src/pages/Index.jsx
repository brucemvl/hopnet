import "../styles/Index.scss"
import prestations1 from "../assets/prestations1.png"
import prestations2 from "../assets/prestations222.png"
import prestations3 from "../assets/prestations3.png"
import prestations4 from "../assets/prestations4.png"
import prestations5 from "../assets/prestations5.png"
import prestations6 from "../assets/prestations6.png"
import banner from "../assets/banner.png"
import ecolo from "../assets/ecolo.jpg"
import { useEffect } from "react";

function Index(){

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

return (
<div className="blocpage">
  <img src={banner} alt="banniere equipe hopnet" className="banner" />
    <section>
   <h2>Qui sommes nous?</h2>

<p>
    Spécialisée dans l’entretien d’immeubles, résidences et copropriétés, nous proposons un service de nettoyage exigeant, pensé pour valoriser durablement vos espaces.

Nous accompagnons propriétaires, gestionnaires et syndics avec une approche simple : offrir un cadre propre, soigné et agréable à vivre, sans compromis sur la qualité
</p>
</section>

<section className="contexte">

<h2>Contexte & enjeux</h2>

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
</section>

<section className="prestations">
<h2>Nos prestations</h2>
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
                <img src={prestations5} alt="entretien local poubelles"/>
<h4>Gestion et entretien des espaces déchets</h4>
</li>

<li className="fade-item">
                    <img src={prestations6} alt="nettoyage vitre"/>
    <h4>Nettoyage de la vitrerie</h4>
    </li>
</ul>

</section>

<section className="exigence">

<h2>Notre exigence</h2>


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


</section>

<section className="engagement">

<h2>Notre engagement</h2>


<article>
<h4>Offrir bien plus qu’un service d’entretien</h4>

<ul>
<li>Des espaces toujours impeccables</li>
<li>Une image valorisée</li>
<li>Une gestion fluide et sereine</li>
</ul>

</article>


</section>

<section className="difference">

<h2>Ce qui nous differencie</h2>


<article>

<ul>
<li>Une vraie logique de partenariat avec les syndics et gestionnaires</li>
<li>Une approche proactive (on anticipe les problèmes au lieu de les subir)</li>
<li>Une communication fluide et transparente</li>
<li>Un objectif clair : zéro stress pour le client</li>
</ul>

</article>


</section>

<img src={ecolo} alt="ecologie" className="ecolo" />

</div>
)

}

export default Index