//// [destructuringCatch.ts]
import _sliced_to_array from "@swc/helpers/src/_sliced_to_array.mjs";
try {
    throw [
        0,
        1
    ];
} catch (param) {
    var _param = _sliced_to_array(param, 2), a = _param[0], b = _param[1];
    a + b;
}
try {
    throw {
        a: 0,
        b: 1
    };
} catch (param1) {
    var a1 = param1.a, b1 = param1.b;
    a1 + b1;
}
try {
    throw [
        {
            x: [
                0
            ],
            z: 1
        }
    ];
} catch (param2) {
    var _param1 = _sliced_to_array(param2, 1), _param_ = _param1[0], _param__x = _sliced_to_array(_param_.x, 1), y = _param__x[0], z = _param_.z;
    y + z;
}
// Test of comment ranges. A fix to GH#11755 should update this.
try {} catch (param3) {
    var _param2 = _sliced_to_array(param3, 1), /*a*/ a2 = _param2[0];
}
