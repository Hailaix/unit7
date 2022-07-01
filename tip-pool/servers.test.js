describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });
  it('should add a new element to servertable on updateServerTable()', function () {
    submitServerInfo(); //updateServerTable is called within
    let serverTableBody = document.querySelector('#serverTable tbody tr'); //selects the new tr added by updateServerTable
    expect(serverTableBody.childElementCount).toEqual(2);
    expect(serverTableBody.children[0].innerHTML).toEqual('Alice');
    expect(serverTableBody.children[1].innerHTML).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  })
});
