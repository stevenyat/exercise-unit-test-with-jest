const { sum } = require('./app.js');
test('adds 14 + 9 to equal 23', () => {

    let total = sum(14, 9);

    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should be 146.26 yen", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen} = require('./app.js');

    // Uso la función como debe ser usada
    const yens = fromDollarToYen(6);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 6 / 1.07 * 156.5;

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(6)).toBeCloseTo(877.57, 2); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One yen should be 0.00 pound ", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    // Uso la función como debe ser usada
    const pounds = fromYenToPound(130);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 130 / 156.5 * 0.87;

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(130)).toBeCloseTo(0.72, 2); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})