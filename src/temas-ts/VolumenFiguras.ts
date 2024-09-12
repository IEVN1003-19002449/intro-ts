import { Area } from "./AreaFiguras";
class Volumen extends Area {
constructor(
baseRectangulo: number = 4,
alturaRectangulo: number = 5,
radioCilindro: number = 5,
alturaCilindro: number = 10,
ladoPentagono: number = 8,
apotemaPentagono: number = 5
) {
super(baseRectangulo, alturaRectangulo, radioCilindro, alturaCilindro, ladoPentagono, 
apotemaPentagono);
}
public volumenRec(profundidad: number): number {
return this.baseRectangulo * this.alturaRectangulo * profundidad; 
}
public volumenCil(): number {
return Math.PI * Math.pow(this.radioCilindro, 2) * this.alturaCilindro;
}
public volumenPen(altura: number): number {
const areaBase = (this.ladoPentagono * this.apotemaPentagono * 5) / 2;
return areaBase * altura; 
}
public imprimirVolumenes(profundidadRec: number, alturaPen: number): void {
console.log(`El volumen del rectángulo es ${this.volumenRec(profundidadRec)}`);
console.log(`El volumen del cilindro es ${this.volumenCil()}`);
console.log(`El volumen del pentágono es ${this.volumenPen(alturaPen)}`);
}
}
let figurasVolumen = new Volumen();
figurasVolumen.imprimirVolumenes(10, 15);