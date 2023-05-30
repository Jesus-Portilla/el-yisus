import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Estudiante } from 'src/app/models/Estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {
  listEstudiante: Estudiante[] = [];
  filteredListEstudiante: Estudiante[] = [];
  form: FormGroup;
  filtro: string = 'Todos';

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fecha: ['', Validators.required],
      cedula: ['', Validators.required],
      asignatura: ['', Validators.required],
      nota1: ['', [Validators.required, Validators.min(0), Validators.max(10)]],
      nota2: ['', [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  navegarAPromedioTotal(): void {
    this.router.navigate(['/promedio-total']);
  }

  agregarEstudiante(): void {
    if (this.form.valid) {
      const estudiante: Estudiante = {
        nombre: this.form.value.nombre,
        apellido: this.form.value.apellido,
        fecha: this.form.value.fecha,
        cedula: this.form.value.cedula,
        asignatura: this.form.value.asignatura,
        nota1: parseFloat(this.form.value.nota1),
        nota2: parseFloat(this.form.value.nota2),
        promedio: 0,
        estado: false,
      };

      estudiante.promedio = (estudiante.nota1 + estudiante.nota2) / 2;
      estudiante.estado = estudiante.promedio >= 7;

      this.listEstudiante.push(estudiante);
      this.filtrarEstudiantes();
      this.form.reset();
    }
  }

  eliminarEstudiante(indice: number): void {
    this.listEstudiante.splice(indice, 1);
    this.filtrarEstudiantes();
  }

  filtrarEstudiantes(): void {
    if (this.filtro === 'Aprobados') {
      this.filteredListEstudiante = this.listEstudiante.filter(estudiante => estudiante.estado);
    } else if (this.filtro === 'Reprobados') {
      this.filteredListEstudiante = this.listEstudiante.filter(estudiante => !estudiante.estado);
    } else {
      this.filteredListEstudiante = this.listEstudiante;
    }
  }

  actualizarEstudiante(estudiante: Estudiante, indice: number): void {
    estudiante.estado = !estudiante.estado;
    this.listEstudiante[indice].estado = estudiante.estado;
  }
}
