import {FormControl, FormGroup} from "@angular/forms";

export interface BookModel {
  id: number;
  author: BookAuthor;

  details: BookDetails;

  title: string;
  description: string;

}

export interface BookAuthor {
  firstName: string;
  lastName: string;
}

export interface BookDetails {
  pages: number;
  format: string;
}

export type ControlsOf<T> ={
  [K in keyof T]: T[K] extends string | number
    ? FormControl<T[K]>
    : FormGroup<ControlsOf<T[K]>>
}



export type NewBookModel = Omit<BookModel, "id">
export type BookModelSearchCriteria = { title_like: string }
