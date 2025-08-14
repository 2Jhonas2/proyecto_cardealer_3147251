import { Controller, 
         Delete, 
         Get, 
         Param, 
         Patch, 
         Post } from '@nestjs/common';
import path from 'path';

@Controller("admins")
export class AdminsController {
  

  //endpoint:
  //destino de la request
  //se escribe como una funcion
  //en una clase controlador
  @Get()
  consultarAdmins(): string {
    return("Aquí se podrán consultar los usuarios");
  }

  @Get(":id")
  consultarAdminPorId(@Param("id")id:string){
    return(`Aquí se podrá consultar el 
      usuario con id:${id}`);
  }

  @Patch(":id")
  actualizarAdminPorId(@Param("id")id:string):string{
    return(`Aquí se podrá actualizar el 
      usuario cuyo id es:${id}`);
  }

  @Delete(":id")
  eliminarAdminPorId(@Param("id")id:string):string{
    return(`Aquí se podrá eliminar el 
      usuario cuyo id es:${id}`);
  }

  @Post()
  crearAdmin(): string {
    return("Aquí se podrá registrar los usuarios");
  }

  @Patch()
  actualizarAdmin(): string {
    return("Aquí se podrá actualizar los usuarios");
  }

  @Delete()
  eliminarAdmin(): string {
    return("Aquí se podrá eliminar los usuarios");
  }

}
