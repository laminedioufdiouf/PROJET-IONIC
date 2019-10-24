import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EnvService {
  API_URL = 'http://localhost:8000/api/login_check';
  API_ULL = 'http://localhost:8000/api/transaction';
  API_UCL = 'http://localhost:8000/api/retrait';
  constructor() { }
}
