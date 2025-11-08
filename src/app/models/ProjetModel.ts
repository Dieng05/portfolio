export interface ImageProjet {
  url: string;
  titre: string;
  description: string;
}

export class ProjetModel {
  idProjet: number;
  titre: string;
  icon: string;
  imageAccueil: string;
  introduction: string;
  technologiesBackend: string[];
  technologiesFrontend: string[];
  images: ImageProjet[];
  lienGithub: string;

  constructor(
    idProjet: number,
    titre: string,
    icon: string,
    imageAccueil: string,
    introduction: string = '',
    technologiesBackend: string[] = [],
    technologiesFrontend: string[] = [],
    images: ImageProjet[] = [],
    lienGithub: string = ''
  ) {
    this.idProjet = idProjet;
    this.titre = titre;
    this.icon = icon;
    this.imageAccueil = imageAccueil;
    this.introduction = introduction;
    this.technologiesBackend = technologiesBackend;
    this.technologiesFrontend = technologiesFrontend;
    this.images = images;
    this.lienGithub = lienGithub;
  }
}
