const PI = Math.PI;
 
exports.area = function(radius) {
    return PI * radius * radius;
}
 
exports.circumference = function(radius) {
    return 2 * PI * radius;
}