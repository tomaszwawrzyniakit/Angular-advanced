import {Observable} from "rxjs";
import {Inject, Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

import {BookModel, BookModelSearchCriteria, NewBookModel} from "../feature/books/book.model";
import {baseUrlToken} from "./base-url.token";

@Injectable()
export class BookRestService {
  constructor(private httpClient: HttpClient, @Inject(baseUrlToken) private serverPrefix: string) {

    console.log("Hello!");
  }

  findAll(): Observable<BookModel[]> {
    return this.httpClient.get<BookModel[]>(`${this.serverPrefix}/books`);
  }

  update(BookModel: BookModel): Observable<BookModel> {
    return this.httpClient.put<BookModel>(`${this.serverPrefix}/books/${BookModel.id}`, BookModel);
  }

  add(BookModel: NewBookModel): Observable<BookModel> {
    return this.httpClient.post<BookModel>(`${this.serverPrefix}/books`, BookModel);
  }

  findById(id: string): Observable<BookModel> {
    return this.httpClient.get<BookModel>(`${this.serverPrefix}/books/${id}`);
  }

  find({title_like}: BookModelSearchCriteria): Observable<BookModel> {
    const params = new HttpParams({fromObject: {title_like}})
    return this.httpClient.get<BookModel>(`${this.serverPrefix}/BookModels`, {params});
  }
}
