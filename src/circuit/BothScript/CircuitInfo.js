"use strict";
exports.__esModule = true;
exports.problemCategory = exports.CircuitInfoUtils = exports.CircuitWiresInfo = exports.CircuitPartsInfo = exports.CircuitBasisInfo = void 0;
var CircuitBasisInfo = /** @class */ (function () {
    function CircuitBasisInfo(sizeX, sizeY) {
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
    return CircuitBasisInfo;
}());
exports.CircuitBasisInfo = CircuitBasisInfo;
var CircuitPartsInfo = /** @class */ (function () {
    function CircuitPartsInfo(x, z, isBig, category) {
        this.x = x;
        this.z = z;
        this.isBig = isBig;
        this.category = category;
    }
    return CircuitPartsInfo;
}());
exports.CircuitPartsInfo = CircuitPartsInfo;
var CircuitWiresInfo = /** @class */ (function () {
    function CircuitWiresInfo(x, z, wires) {
        this.x = x;
        this.z = z;
        this.wires = wires;
    }
    return CircuitWiresInfo;
}());
exports.CircuitWiresInfo = CircuitWiresInfo;
var CircuitInfoUtils = /** @class */ (function () {
    function CircuitInfoUtils() {
    }
    CircuitInfoUtils.jsonToInfo = function (json) {
        var objs = JSON.parse(json);
        var basisInfo = new CircuitBasisInfo(0, 0);
        var partsInfos = new Array(0);
        var wiresInfos = new Array(0);
        objs.forEach(function (obj) {
            if (obj["class"] == 'basis') {
                var basis = obj;
                basisInfo = new CircuitBasisInfo(basis.sizeX, basis.sizeY);
            }
            else if (obj["class"] == 'parts') {
                var parts = obj;
                partsInfos.push(new CircuitPartsInfo(parts.x, parts.z, parts.isBig, parts.category));
            }
            else if (obj["class"] == 'wires') {
                var wires = obj;
                wiresInfos.push(new CircuitWiresInfo(wires.x, wires.z, wires.wires));
            }
        });
        return [basisInfo, partsInfos, wiresInfos];
    };
    CircuitInfoUtils.infoToJson = function (circuitBasisInfo, circuitPartsInfos, circuitWiresInfos) {
        var objs = new Array(0);
        var basisObj = {
            "class": 'basis',
            sizeX: circuitBasisInfo.sizeX,
            sizeY: circuitBasisInfo.sizeY
        };
        objs.push(basisObj);
        circuitPartsInfos.forEach(function (v) {
            var obj = {
                "class": 'parts',
                x: v.x,
                z: v.z,
                isBig: v.isBig,
                category: v.category
            };
            objs.push(obj);
        });
        circuitWiresInfos.forEach(function (v) {
            var obj = {
                "class": 'wires',
                x: v.x,
                z: v.z,
                wires: v.wires
            };
            objs.push(obj);
        });
        return JSON.stringify(objs);
    };
    return CircuitInfoUtils;
}());
exports.CircuitInfoUtils = CircuitInfoUtils;
exports.problemCategory = [
    'None',
    'Reversing',
    'Pwn',
    'PPC',
    'Crypto',
    'Shell',
    'Forensics',
    'Web',
    'OSINT',
    'Misc'
];
