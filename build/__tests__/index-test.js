'use strict';

var _index = require('../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

describe('merger', function () {
    it('should merge newState into oldState', function () {
        var oldState = { x: 0, y: 0 };
        var newState = { y: 42 };

        (0, _index2['default'])(oldState, newState).should.deep.equal({ x: 0, y: 42 });
    });

    it('should not convert arrays to objects', function () {
        var oldState = {};
        var newState = { arr: [1, 2] };

        (0, _index2['default'])(oldState, newState).should.deep.equal({ arr: [1, 2] });
    });

    it('should overwrite changed arrays', function () {
        var oldState = { arr: [1, 2] };
        var newState = { arr: [3, 4] };

        (0, _index2['default'])(oldState, newState).should.deep.equal({ arr: [3, 4] });
    });
});