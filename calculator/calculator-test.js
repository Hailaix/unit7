
it('should calculate the monthly rate correctly', function () {
  // ...
  expect(calculateMonthlyPayment({
    amount: 100,
    years: 10,
    rate: 12
  })).toEqual('$ 1.43');
});


it("should return a result with 2 decimal places", function () {
  // ..
  expect(calculateMonthlyPayment({
    amount: '23.7',
    years: '2',
    rate: '1'
  })).toEqual('$ 1.00');
});

it("should catch invalid inputs", function () {
  expect(calculateMonthlyPayment({
    amount: 'not',
    years: 'a',
    rate: 'number'
  })).toEqual('Please input valid numbers');
});

it("not sure if intended, but loans without rates in the equation require no payments ever", function () {
  expect(calculateMonthlyPayment({
    amount: '100000000',
    years: '1',
    rate: '0'
  })).toEqual('$ 0.00');
});
}
/// etc
