function identity(arg) {
    console.log(arg);
    return arg;
}
identity(1234);
function identity2(arg) {
    return arg;
}
identity2('213');
identity2('string');
identity2(3423);
identity2({ name: 'hello world' });
identity2([1, 2, 3]);
function identity3(arg) {
    console.log(arg.length);
    return arg;
}
