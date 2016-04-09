import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './home/home.component';
import {BooksComponent} from './books/books.component';
import {FormComponent} from './form/form.component';

@RouteConfig([
  {path: 'home/', name: 'Home', component: HomeComponent, useAsDefault: true},
  {path: 'books/...', name: 'Books', component: BooksComponent},
  {path: 'admin/', name: 'Admin', component: FormComponent}
])

@Component({
  selector: 'http-app',
  templateUrl: '/app/book-monkey/iteration-4/http/http.component.html',
  styles: [
    `.router-link-active {
      color: #ffffff !important;
      background: #DB282C !important;
    }`
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class HttpApp { }