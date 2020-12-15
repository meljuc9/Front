import { Component, OnInit } from '@angular/core';
import { Profesional } from '../dataservice/profesional';
import { DataService } from './../dataservice/data.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios : Profesional[];
	getProfesionales(): void {
		this.DataService
			.getProfesionales()
			.then(personas => this.usuarios = personas );
	}
  delete(usu): void{
    this.DataService.deleteProfesional(usu.id);
    this.usuarios = this.usuarios.filter(a => a !== usu);
  }
  constructor(private DataService: DataService) { }
  ngOnInit() {
  	this.getProfesionales();
  }
}