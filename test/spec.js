describe('Pinyinize.js', function() {
    it('should convert tai2 wan1', function() {
        expect(Pinyinize.toMarks('tai2 wan1')).toBe('tái wān');
    });

    it('should convert wo3 ai4 ni3', function() {
        expect(Pinyinize.toMarks('wo3 ai4 ni3')).toBe('wǒ ài nǐ');
    });

    it('should convert wo3 fa1 sheng1 le', function() {
        expect(Pinyinize.toMarks('wo3 fa1 sheng1 le')).toBe('wǒ fā shēng le');
    });

    it('should convert ni3 xiang3 zen3 me yang4', function() {
        expect(Pinyinize.toMarks('ni3 xiang3 zen3 me yang4')).toBe('nǐ xiǎng zěn me yàng');
    });

    it('should convert ni3 yi3 jing1 chi1 fan4 le ma', function() {
        expect(Pinyinize.toMarks('ni3 yi3 jing1 chi1 fan4 le ma')).toBe('nǐ yǐ jīng chī fàn le ma');
    });
});
