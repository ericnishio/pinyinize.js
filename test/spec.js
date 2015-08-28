var expect = require('chai').expect;
var pinyinize = require('../index');

describe('pinyinize', function() {
  it('should convert tai2 wan1', function() {
    expect(pinyinize('tai2 wan1')).to.equal('tái wān');
  });

  it('should convert wo3 ai4 ni3', function() {
    expect(pinyinize('wo3 ai4 ni3')).to.equal('wǒ ài nǐ');
  });

  it('should convert wo3 fa1 sheng1 le', function() {
    expect(pinyinize('wo3 fa1 sheng1 le')).to.equal('wǒ fā shēng le');
  });

  it('should convert ni3 xiang3 zen3 me yang4', function() {
    expect(pinyinize('ni3 xiang3 zen3 me yang4')).to.equal('nǐ xiǎng zěn me yàng');
  });

  it('should convert ni3 yi3 jing1 chi1 fan4 le ma', function() {
    expect(pinyinize('ni3 yi3 jing1 chi1 fan4 le ma')).to.equal('nǐ yǐ jīng chī fàn le ma');
  });

  it('should convert ying1 xiong2', function() {
    expect(pinyinize('ying1 xiong2')).to.equal('yīng xióng');
  });
});
