import { Component, OnInit } from '@angular/core';
import { Profesional } from './../../dataservice/profesional';
import { DataService } from './../../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-add',
  templateUrl: './usuarios-add.component.html',
  styleUrls: ['./usuarios-add.component.css']
})
export class UsuariosAddComponent implements OnInit {

  profesional = new Profesional();

  constructor(private DataService: DataService, private router: Router) { }

  save(): void {
		this.DataService.createProfesional(this.profesional)
		.then(
			() => this.redirect(),
			() => console.log("Error"),
		)
	}
  redirect(){
		this.router.navigate(['./profesionales'])
	}

  ngOnInit(){  }
}