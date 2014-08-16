describe('Pinyinize.js', function() {
    it('should convert tai2 wan1 into tái wān', function() {
        expect(Pinyinize.intoMarks('tai2 wan1')).toBe('tái wān');
    });
});
