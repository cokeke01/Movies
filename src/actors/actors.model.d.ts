export interface actorDTO {
  id: number;
  name: string;
  biography: string;
  dateOfBirth: Date;
  picture: string;
}

export interface actorCreationDTO {
  //used by the ActorForm
  name: string;
  dateOfBirth?: Date;
  picture?: File; //this is for create actor
  pictureURL?: string; // this is for edit actor
  biography?: string;
}

export interface actorMovieDTO {
  id: number;
  name: string;
  character: string;
  picture: string;
}
