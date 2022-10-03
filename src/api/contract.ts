  export type Rating = {
    average: number;
  }
  
  export type Image = {
    medium: string;
  }
  
  export type Person = {
    id: number;
    name: string;
    image: Image;
  }
  
  export type Cast = {
    person: Person;
  }
  
  export type Show = {
    id: number;
    url: string;
    name: string;
    language: string;
    genres: string[];
    rating: Rating;
    image: Image;
    summary: string;
  }
  
  export type ShowSearch = {
    score: number;
    show: Show;
  }