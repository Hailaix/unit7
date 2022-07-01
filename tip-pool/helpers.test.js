describe('helpers tests', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
        submitPaymentInfo();
        billAmtInput.value = 50;
        tipAmtInput.value = 25;
        submitPaymentInfo();
    });
    it('should sum the specified numbers on sumPaymentTotal', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(35);
        expect(sumPaymentTotal('billAmt')).toEqual(150);
        expect(sumPaymentTotal('tipPercent')).toEqual(60);

    });
    it('should calculate the correct percentage on calculateTipPercent', function () {
        expect(calculateTipPercent(100, 10)).toEqual(10);
        expect(calculateTipPercent(100, 0)).toEqual(0);
    });
    it('should append a td element to a tr on appendtd', function () {
        let testtr = document.createElement('tr');
        appendTd(testtr, 'testvalue');
        expect(testtr.childElementCount).toEqual(1);
        expect(testtr.firstChild.innerHTML).toEqual('testvalue');
    });
    afterEach(function () {
        for (let rmsum of summaryTds) {
            rmsum.innerHTML = '';
        }
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
});