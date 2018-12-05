"use strict";
import chai, {
    expect
} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
    Donuz
} from '../../Donuz'
chai.use(sinonChai);
sinonStubPromise(sinon);
global.fetch=require('node-fetch')

describe('Clients requests', () => {
    let fetchedStub;
    let promise;

    beforeEach(() => {
        fetchedStub = sinon.stub(global, 'fetch');
    });

    afterEach(() => {
        fetchedStub.restore();
    });
    it('should return count of gifts', () => {
        let custom= Donuz.gifts.countGifts('dsadsadasdasd');
        expect(typeof(custom)).to.be.eql(typeof(0));
    });
    it('should return gift object', () => {
        let gift=Donuz.gifts.getGift(1);
        expect(gift).to.be.an.instanceOf(Object);
    });
    it('should return gift info object', () => {
        let gift= Donuz.gifts.getGiftInfo(1,'daswdasdasdas');
        expect(gift).to.be.an.instanceOf(Object);
    });
    it('should return all gifts', () => {
        let gifts= Donuz.gifts.getGifts();
        expect(gifts).to.be.an.instanceOf(Object);
    });
})