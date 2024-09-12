class QuadraticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    private calculateDiscriminant(): number {
        return (this.b * this.b) - (4 * this.a * this.c);
    }

    public calculateRoots(): { x1: number | null, x2: number | null } {
        const discriminant = this.calculateDiscriminant();

        if (discriminant < 0) {
            return { x1: null, x2: null };
        } else {
            const sqrtDiscriminant = Math.sqrt(discriminant);
            const x1 = (-this.b + sqrtDiscriminant) / (2 * this.a);
            const x2 = (-this.b - sqrtDiscriminant) / (2 * this.a);
            return { x1, x2 };
        }
    }
}

function createForm() {
    const app = document.getElementById('app');
    const form = document.createElement('form');
    form.id = 'quadraticForm';

    const labelA = document.createElement('label');
    labelA.textContent = 'Valor de a:';
    const inputA = document.createElement('input');
    inputA.type = 'number';
    inputA.id = 'a';
    inputA.required = true;

    const labelB = document.createElement('label');
    labelB.textContent = 'Valor de b:';
    const inputB = document.createElement('input');
    inputB.type = 'number';
    inputB.id = 'b';
    inputB.required = true;

    const labelC = document.createElement('label');
    labelC.textContent = 'Valor de c:';
    const inputC = document.createElement('input');
    inputC.type = 'number';
    inputC.id = 'c';
    inputC.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Calcular';

    // Resultados
    const resultX1 = document.createElement('p');
    resultX1.id = 'resultX1';

    const resultX2 = document.createElement('p');
    resultX2.id = 'resultX2';

    // Añadir los elementos al formulario
    form.appendChild(labelA);
    form.appendChild(inputA);
    form.appendChild(document.createElement('br'));

    form.appendChild(labelB);
    form.appendChild(inputB);
    form.appendChild(document.createElement('br'));

    form.appendChild(labelC);
    form.appendChild(inputC);
    form.appendChild(document.createElement('br'));

    form.appendChild(submitButton);

    if (app) {
        app.appendChild(form);
        app.appendChild(resultX1);
        app.appendChild(resultX2);
    }

    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();

        const a = parseFloat((<HTMLInputElement>document.getElementById('a')).value);
        const b = parseFloat((<HTMLInputElement>document.getElementById('b')).value);
        const c = parseFloat((<HTMLInputElement>document.getElementById('c')).value);

        const equation = new QuadraticEquation(a, b, c);
        const roots = equation.calculateRoots();

        if (roots.x1 === null || roots.x2 === null) {
            resultX1.textContent = "No hay soluciones reales.";
            resultX2.textContent = "";
        } else {
            resultX1.textContent = `x1 = ${roots.x1}`;
            resultX2.textContent = `x2 = ${roots.x2}`;
        }
    });
}

window.onload = () => {
    createForm();
};
