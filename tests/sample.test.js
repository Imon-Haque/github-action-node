describe('Sample Test', () => {
    it('should test that true === true', () => {
        expect(true).toBe(true);
    });
});

describe('Sum Test', () => {
    it('should test that 3 + 5 === 8', () => {
        expect(3+5).toBe(8);
    });
});

describe('Testing Environmental Variable', () => {
    it('author name should be the value of env', () => {
        expect(process.env.AUTHOR_NAME).toBe("IMON_HAQUE");
    });
});