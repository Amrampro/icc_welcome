import logo from "./favicon.png";
import annuaire from "./annuaire.jpg";
import departments from "./departments.jpg";
import events from "./events.jpg";
import hall3 from "./hall3.jpg";
import landing from "./landing.jpg";
import ministries from "./ministries.jpg";
import pastoral from "./corpspastoral.jpg";
import cellule from "./cellule.jpg";
import star from "./star.jpg";
import icc from "./icc.png";
import formations from "./formations.jpg";
import rdvpastoral from "./rdvpastoral.jpg";
import swipeup from "./elements/swipeup.gif";
import cdm from "./img/cdm.png";
import cellulepicture from "./img/cellulepicture.png";

export const images = {
  logo,
  hall3,
  annuaire,
  departments,
  events,
  landing,
  ministries,
  pastoral,
  cellule,
  star,
  formations,
  rdvpastoral,
  swipeup,
  cdm,
  icc,
  cellulepicture,
};

export const projectData = [
  {
    title: "Cellules de maison",
    description: "Retrouvez les cellules de maison d'ICC Charleroi",
    image: images.cellule,
    link: "/cellules",
  },
  {
    title: "Planning",
    description: "Retrouvez le planning hebdomadaire de notre assemblée",
    image: images.events,
    link: "/planning",
  },
  {
    title: "Corps Pastoral",
    description: "Prenez le temps de connaitre les membres du corp pastoral",
    image: images.pastoral,
    link: "/corp-pastoral",
  },
  {
    title: "Départements",
    description: "Retrouvez les différents départements de notre église",
    image: images.departments,
    link: "/departements",
  },
  {
    title: "S.T.A.R.",
    description: "Mettez vos dons et talents au service de Dieu",
    image: images.star,
    link: "/star",
  },
  {
    title: "Soins Pastoraux",
    description: "Prenez rendez-vous avec le corps pastoral.",
    image: images.rdvpastoral,
    link: "/rdv-pastoral"
  },
  {
    title: "Nos formations",
    description:
      "Formez-vous sur les principes et les valeurs du royaume de Dieu",
    image: images.formations,
    link: "/formations",
  },
  {
    title: "Annuaire",
    description: "Retouvez facilement les professionnels de notre église",
    image: images.annuaire,
    link: "/annuaire",
  },
  {
    title: "Nos différents ministères",
    description: "Retrouvez les différents ministères de notre église",
    image: images.ministries,
    link: "/ministeres",
  },
];
