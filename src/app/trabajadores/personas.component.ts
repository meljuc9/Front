import { Component, OnInit } from '@angular/core';
import { DataService } from './../dataservice/data.service';
import { Persona } from './../dataservice/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas : Persona[];

	getPersonas(): void {
		this.DataService
			.getPersonas()
			.then(personas => this.personas = personas );
	}

  delete(per): void{
    this.DataService.deletePersona(per.id);
    this.personas = this.personas.filter(d => d !== per);
  }

  constructor(private DataService: DataService) { }
  
  ngOnInit() {
  	this.getPersonas();
  }
}