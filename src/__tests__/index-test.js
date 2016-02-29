import merger from '../index';

describe('merger', () => {
    it('should merge newState into oldState', () => {
        const oldState = { x: 0, y: 0 };
        const newState = { y: 42 };

        merger(oldState, newState)
            .should.deep.equal({ x: 0, y: 42 });
    });

    it('should not convert arrays to objects', () => {
        const oldState = {};
        const newState = { arr: [1, 2] };

        merger(oldState, newState)
            .should.deep.equal({ arr: [1, 2] });
    });

    it('should overwrite changed arrays', () => {
        const oldState = { arr: [1, 2] };
        const newState = { arr: [3, 4] };

        merger(oldState, newState)
            .should.deep.equal({ arr: [3, 4] });
    });
});
