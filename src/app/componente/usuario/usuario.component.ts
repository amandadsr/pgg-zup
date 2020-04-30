import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {

  usuarios: Observable<User>;
  usuario: { login: '', senha: '' };


  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
      this.usuarioService.getPerfilList().subscribe(data => {

      this.usuarios = data;
    });
  }

 
}
