export interface Notes {
  id: number;
  valeur: number;
  eleveId: number;
  matiereId: number;
  appreciation: string;
  matiere: Matiere;
}

export interface Matiere {
  id: number;
  nom: string;
  professeurs?: Professeur[];
}

export interface Professeur {
  id: number;
  nom: string;
  prenom: string;
  genre: string;
}

export interface Eleve {
  id: string;
  nom: string;
  prenom: string;
  genre: "Male" | "Female" | "Unknown";
  notes?: Notes[];
  classeId: number;
}

export interface Classe {
  id: number;
  niveau: string;
  professeurId: number;
  professeur: Professeur;
  eleves?: Eleve[];
}
