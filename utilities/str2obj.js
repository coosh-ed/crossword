module.exports = function(str) {
	var str_arr = Array.from(str);
        return str_arr.reduce(function(acc, cur, i) {
                acc[i] = cur;
                return acc;
                }, {});
};

