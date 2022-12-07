export interface BookModel {
  id: number;
  author: BookAuthor;

  details?: BookDetails;

  title: string;

}

export interface BookAuthor {
  firstName: string;
  lastName: string;
}

export interface BookDetails {
  pages: number;
  format: string;
}


export type NewBookModel = Omit<BookModel, "id">
export type BookModelSearchCriteria = { title_like: string }
