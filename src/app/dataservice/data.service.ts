import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Persona } from './persona'; /*Model */
import { Usuario } from './usuario'; /*Model */

@Injectable()
export class DataService {

	constructor(private http: HttpClient) {}
	
	private headers = new HttpHeaders({'Content-Type': 'application/json'});

	getPersonas(): Promise<Persona[]> {
		return this.http.get('http://127.0.0.1:8000/persona?format=json', {headers: this.headers})
		.toPromise()
		.then(response => response as Persona[])
    }

    deletePersona(id: number): Promise<void> {
		const url = `${"http://127.0.0.1:8000/persona"}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
	}
	createPersona(d: Persona): Promise<Persona> {
		return this.http
		.post("http://127.0.0.1:8000/persona", JSON.stringify(d), {headers: this.headers})
		.toPromise()
		.then(res => res as Persona)
	}

	getUsuarios(): Promise<Usuario[]> {
		return this.http.get('http://127.0.0.1:8000/usuario?format=json', {headers: this.headers})
		.toPromise()
		.then(response => response as Usuario[])
	}
	
	deleteUsuario(id: number): Promise<void> {
		const url = `${"http://127.0.0.1:8000/usuario"}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => null)
	}
}
	