export class Area {
    protected baseRectangulo: number;
    protected alturaRectangulo: number;
    protected radioCilindro: number;
    protected alturaCilindro: number;
    protected ladoPentagono: number;
    protected apotemaPentagono: number;
    constructor(
    baseRectangulo: number = 4,
    alturaRectangulo: number = 5,
    radioCilindro: number = 5,
    alturaCilindro: number = 10,
    ladoPentagono: number = 8,
    apotemaPentagono: number = 5
    ) {
    this.baseRectangulo = baseRectangulo;
    this.alturaRectangulo = alturaRectangulo;
    this.radioCilindro = radioCilindro;
    this.alturaCilindro = alturaCilindro;
    this.ladoPentagono = ladoPentagono;
    this.apotemaPentagono = apotemaPentagono;
    }
    public areaRec(): number {
    return this.baseRectangulo * this.alturaRectangulo;
    }
    public areaCil(): number {
    const baseArea = Math.PI * Math.pow(this.radioCilindro, 2);
    const lateralArea = 2 * Math.PI * this.radioCilindro * this.alturaCilindro;
    return 2 * baseArea + lateralArea;
    }
    public areaPen(): number {
    return (this.ladoPentagono * this.apotemaPentagono * 5) / 2;
    }
    public imprimir(): void {
    console.log(`El área del rectángulo es ${this.areaRec()}`);
    console.log(`El área del cilindro es ${this.areaCil()}`);
    console.log(`El área del pentágono es ${this.areaPen()}`);
    }
    }
    let figuras = new Area();
    figuras.imprimir();
    