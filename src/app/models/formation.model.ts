export class FormationModel {
  constructor(
    public diplome: string,
    public etablissement: string,
    public annee: string,
    public statut: 'En cours' | 'Obtenu',
    public localisation: string,
    public icon: string,
    public color: string
  ) {}
}
