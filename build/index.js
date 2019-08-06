'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _merge = require('lodash/merge');

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (oldState, newState) {
    var result = _extends({}, oldState);

    for (var key in newState) {
        if (!newState.hasOwnProperty(key)) {
            continue;
        }
        var value = newState[key];

        // Assign if we don't need to merge at all
        if (!result.hasOwnProperty(key)) {
            result[key] = (0, _isObject2['default'])(value) && !Array.isArray(value) ? (0, _merge2['default'])({}, value) : value;
            continue;
        }

        var oldValue = result[key];

        if ((0, _isObject2['default'])(value) && !Array.isArray(value)) {
            result[key] = (0, _merge2['default'])({}, oldValue, value);
        } else {
            result[key] = value;
        }
    }

    return result;
};