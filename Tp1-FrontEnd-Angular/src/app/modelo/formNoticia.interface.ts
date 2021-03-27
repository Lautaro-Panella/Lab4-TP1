export interface FormNoticiaI {
    id: number;
    tituloNoticia: string;
    resumenNoticia: string;
    imagenNoticia: string;
    contenidoHtml: string;
    publicada: boolean;
    fecha: Date;
    idEmpresa: number;
}