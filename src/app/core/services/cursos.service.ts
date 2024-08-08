import { Injectable } from "@angular/core";
import { CursosDisponibles } from "../../features/dashboard/cursos/models";
import { map, Observable } from "rxjs";


@Injectable({
    providedIn: 'root',
})

export class CursosService {
    private DATABASE = [ //CursosDisponibles[] = [
        {
            id: 'DJHN',
            nombre: 'Angular',
            inicio: new Date(),
            fin: new Date(),
        },

        {
            id: 'JAHS',
            nombre: 'ReactJS',
            inicio: new Date(),
            fin: new Date(),
        },

        {
            id: 'LAÑO',
            nombre: 'Programación Web',
            inicio: new Date(),
            fin: new Date(),
        },

        {
            id: 'FHNH',
            nombre: 'Photoshop',
            inicio: new Date(),
            fin: new Date(),
        },

        {
            id: 'ERPO',
            nombre: 'Marketing Digital',
            inicio: new Date(),
            fin: new Date(),
        }
    ];

    obtenerCursos(): Observable<CursosDisponibles[]> {
        return new Observable((observer) => {
            observer.next(this.DATABASE);
            observer.complete();
        });
    }

    obtenerCursoById(id: string): Observable<CursosDisponibles | undefined> {
        return this.obtenerCursos().pipe(
            map((todosLosCursos) => todosLosCursos.find((el) => el.id === id))
        );
    }
    

    editarCursotById(id: string, update: Partial<CursosDisponibles>) {
        this.DATABASE = this.DATABASE.map((c) =>
            c.id === id ? { ...c, ...update } : c
        );
        return id;
    };

    borrarCursoById(id: string) {
        this.DATABASE = this.DATABASE.filter((c) => c.id !== id);
        return id;
    }
}