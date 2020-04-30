import { Injectable } from '@angular/core';
import { AppConstants } from '../app-constants';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  login(usuario) {
    return this.http.post(AppConstants.baseLogin, JSON.stringify(usuario)).subscribe(data => {

      //return this.http.get(AppConstants.baseLogin + usuario).subscribe(data => {
         //return  data; 
   //console.log(data);
   
      /*Retorno Http*/
      var token = JSON.parse(JSON.stringify(data)).Authorization.split(' ')[1]; /*para pegar só o token*/

      localStorage.setItem("token", token);

      //console.info("Token: " + localStorage.getItem("token")); 

      this.router.navigate(['feed']);

},
      error => {
        console.error("Erro ao fazer login");
        alert('Acesso Negado');
      }
    );
  }
}
