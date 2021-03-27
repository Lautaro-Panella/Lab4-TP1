import { EmpresaI } from "./empresa.interface";

export interface NoticiaI {
    id: number;
    tituloNoticia: string;
    resumenNoticia: string;
    imagenNoticia: string;
    contenidoHtml: string;
    publicada: boolean;
    fecha: Date;
    empresa: EmpresaI;
}