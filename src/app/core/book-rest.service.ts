import {Observable} from "rxjs";

import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BookModel, BookModelSearchCriteria, NewBookModel} from "../feature/books/book.model";

@Injectable()
export class BookRestService {
  constructor(private httpClient: HttpClient) {

    console.log("Hello!");
  }
  findAll(): Observable<BookModel[]> {
    return this.httpClient.get<BookModel[]>(`/api/books`);
  }

  update(BookModel: BookModel): Observable<BookModel> {
    return this.httpClient.put<BookModel>(`/api/books/${BookModel.id}`, BookModel);
  }

  add(BookModel: NewBookModel): Observable<BookModel> {
    return this.httpClient.post<BookModel>(`/api/books`, BookModel);
  }

  findById(id: string): Observable<BookModel> {
    return this.httpClient.get<BookModel>(`/api/books/${id}`);
  }

  find({title_like}: BookModelSearchCriteria): Observable<BookModel> {
    const params = new HttpParams({fromObject: {title_like}})
    return this.httpClient.get<BookModel>(`/api/BookModels`, {params});
  }
}
