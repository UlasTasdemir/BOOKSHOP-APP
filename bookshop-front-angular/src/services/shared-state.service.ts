import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  email: string = "";
  password: string = "";
}
