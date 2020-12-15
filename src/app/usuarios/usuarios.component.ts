import { Component, OnInit } from '@angular/core';
import { Usuario } from './../dataservice/usuario';
import { DataService } from './../dataservice/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Usuario[];
	getUsuarios(): void {
		this.DataService
			.getUsuarios()
			.then(personas => this.usuarios = personas );
	}
  delete(usu): void{
    this.DataService.deleteUsuario(usu.id);
    this.usuarios = this.usuarios.filter(a => a !== usu);
  }
  constructor(private DataService: DataService) { }
  ngOnInit() {
  	this.getUsuarios();
  }
}