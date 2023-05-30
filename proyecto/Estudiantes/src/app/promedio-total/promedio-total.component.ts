import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../models/Estudiante';
import { Router } from '@angular/router';

@Component({
  selector: 'app-promedio-total',
  templateUrl: './promedio-total.component.html',
  styleUrls: ['./promedio-total.component.css']
})
export class PromedioTotalComponent implements OnInit {
  listEstudiante: Estudiante[] = [];
  promedioTotal: number = 0;

  constructor(private router: Router) { }

  volverAListadoEstudiantes(): void {
    this.router.navigate(['/estudiantes']);
  }

  ngOnInit(): void {
    // Obtén la lista de estudiantes desde donde la estés almacenando
    // Por ejemplo, podrías importarla de un servicio o cargarla en el constructor

    // Calcula el promedio total
    this.calcularPromedioTotal();
    const calo=localStorage.getItem("listEstudiante");
    if (calo) {
      this.listEstudiante=JSON.parse(calo)
    
    }else {
      this.listEstudiante=[];
    }
  }

  calcularPromedioTotal(): void {
    if (this.listEstudiante.length > 0) {
      const sumatoriaNotas = this.listEstudiante.reduce((acumulador, estudiante) => {
        return acumulador + estudiante.promedio;
      }, 0);
      this.promedioTotal = sumatoriaNotas / this.listEstudiante.length;
    }
  }
}

