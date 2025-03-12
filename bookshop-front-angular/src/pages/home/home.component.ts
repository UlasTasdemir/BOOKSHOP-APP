import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { ProductComponent } from "../../components/product/product.component";
import { SharedStateService } from '../../services/shared-state.service';

export class Book {
  public id: number = 0;
  public isbn_13: string = "";
  public publicId: string = "";
  public author: string = "";
  public price: number = 0;
  public title: string = "";
  public subTitle?: string = "";

  constructor(object: any) {
    this.id = object.id;
    this.isbn_13 = object.isbN_13;
    this.publicId = object.publicId;
    this.author = object.author;
    this.price = object.price;
    this.title = object.title;
    this.subTitle = object.subTitle;
  }
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isAuthenticated: boolean = localStorage.getItem("isAuthenticated") == "true" ? true : false;
  allBooks: Book[] = [];

  constructor(
    public sharedState: SharedStateService,
    private http: HttpClient
  ) { }


  async ngOnInit() {
    try {
      this.sharedState.email = localStorage.getItem("email") ?? "";
      const response = await lastValueFrom(
        this.http.get<string>(
          "https://localhost:7001/getAllBooks",
          { responseType: 'text' as 'json' }
        )
      );
      JSON.parse(response).map((item: any) => {
        this.allBooks.push(new Book(item));
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  async signOut() {
    try {
      const response = await lastValueFrom(
        this.http.get<string>(
          "https://localhost:7001/signout",
          { responseType: 'text' as 'json' }
        )
      );
      localStorage.removeItem("email");
      localStorage.setItem("isAuthenticated", "false");
      this.isAuthenticated = localStorage.getItem("isAuthenticated") == "true" ? true : false;
      this.sharedState.email = localStorage.getItem("email") ?? "";
      this.sharedState.password = "";
      console.log("User signed out.")
    }
    catch (err) {
      console.log("Could'nt sign out.");
    }
  }
}
