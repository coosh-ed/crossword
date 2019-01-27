module.exports = function (obj, other) {
        for (var i=0; i<Object.keys(obj).length; i++) {
        var key = Object.keys(obj)[i];
                if (obj[key] != other[key]){
                        return false;
                        }
                }
        return true;
        };
