import { Component, OnInit } from '@angular/core';
import { Persona } from './../../dataservice/persona';
import { DataService } from './../../dataservice/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-add',
  templateUrl: './personas-add.component.html',
  styleUrls: ['./personas-add.component.css']
})
export class PersonasAddComponent implements OnInit {

	persona = new Persona();
	  
	constructor(private DataService: DataService, private router: Router) { }

	save(): void {
		this.DataService.createPersona(this.persona)
		.then(
			() => this.redirect(),
			() => console.log("Error"),
		)
	}
  	redirect(){
		this.router.navigate(['./personas'])
  	}
	ngOnInit() {
  
  }
}