import {TipoUsuario} from "./entidad.tipousuario";

export class Usuario {
  id: number;
  apellidos:string;
  nombre:string;
  dni:string;
  direccion:string;
  celular:string;
  correo:string;
  userId:string;
  password:string;
  cambiarclave:boolean;
  estado:boolean;
}
