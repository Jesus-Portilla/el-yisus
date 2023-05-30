export class Estudiante {
    nombre: string;
    apellido: string;
    fecha: string;
    cedula: string;
    asignatura: string;
    nota1: number;
    nota2: number;
    promedio: number;
    estado: boolean;
  
    constructor(
      nombre: string,
      apellido: string,
      fecha: string,
      cedula: string,
      asignatura: string,
      nota1: number,
      nota2: number,
      promedio: number,
      estado: boolean
    ) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.fecha = fecha;
      this.cedula = cedula;
      this.asignatura = asignatura;
      this.nota1 = nota1;
      this.nota2 = nota2;
      this.promedio = promedio;
      this.estado = estado;
    }
  }
  