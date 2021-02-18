

/**
 * Mixed Any
 * 
 * @flow
 */
// 可以接收任意类型 string | number | boolean | ...
 function passMixed (value: mixed) {
  // mixed 强类型 必须明确类型，必须针对类型进行判断
  if (typeof value === 'string') {
    value.substr(1)
  }
  if (typeof value === 'number') {
    value * value
  }
 }

 passMixed('string');
 passMixed(100);

// 可以接收任意类型 string | number | boolean | ...
 function passAny (value: any) {
 // any 弱类型 任意类型 不会报错，为了兼容老数据
  value.substr(1)
  value * value
 }

 passMixed('string');
 passMixed(100);


