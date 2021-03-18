import { Empresa } from "./empresa.model";

export class Noticia{
    id:number;
    tituloNoticia:string;
    resumenNoticia:string;
    imagenNoticia:string;
    contenidoHTML:string;
    publicada:boolean;
    fechaPublicacion:Date;
    empresa:Empresa;

}