'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('getTest function test', () => {
    it('should return testtest', () => {
        var result = index.getTest('test');
        expect(result).to.equal('testtest');
    });
    it('should return testproject', () => {
        var result = index.getTest('project');
        expect(result).to.equal('testproject');
    });
    it('TSA Test', () => {
        let result = index.tsaTest();
    });
    it("Chat Manager Test", () => {
        let result = index.testChatManager();
    });
});
