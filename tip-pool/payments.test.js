describe('payments tests', function () {
    beforeEach(function () {
        billAmtInput.value = 10;
        tipAmtInput.value = 2;
    });
    it('should add a payment on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(allPayments['payment1']).not.toBeUndefined();
        expect(allPayments['payment1'].billAmt).toBe('10');
        expect(allPayments['payment1'].tipAmt).toBe('2');
        expect(allPayments['payment1'].tipPercent).toBe(20);
    });
    it('shouldn\'t add an empty payment on submitPaymentInfo()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(allPayments['payment1']).toBeUndefined();
    });
    it('should be undefined on empty inputs on createCurPayment()', function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        expect(createCurPayment()).toBeUndefined();
    });
    it('should return a new payment object on createCurPayment()', function () {
        let testPayment = createCurPayment();
        expect(testPayment['billAmt']).toBe('10');
        expect(testPayment['tipAmt']).toBe('2');
        expect(testPayment['tipPercent']).toBe(20);
    });
    it('should append to the payment table on appendPaymentTable()', function(){
        appendPaymentTable(createCurPayment());
        let testpaymenttr = document.querySelector('#paymentTable tbody tr')
        expect(testpaymenttr.childElementCount).toEqual(4);
        expect(testpaymenttr.children[0].innerHTML).toEqual('$10');
        expect(testpaymenttr.children[1].innerHTML).toEqual('$2');
        expect(testpaymenttr.children[2].innerHTML).toEqual('20%');

    });
    afterEach(function () {
        for (let rmsum of summaryTds) {
            rmsum.innerHTML = '';
        }
        paymentTbody.innerHTML = '';
        allPayments = {};
        paymentId = 0;
    })
});