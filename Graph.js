function Graph(n) {
	var that = this;
	var matrix = new Array(n);

	for (var i = 0; i < n; ++i) {
		matrix[i] = new Array(n);
		for (var j = 0; j < n; ++j) {
			matrix[i][j] = 0;
		}
	}

	this.addEdge = function(n1, n2, weight) {
		matrix[n1][n2] = weight;
		matrix[n2][n1] = weight;
	};

	this.print = function() {
		for (var i = 0; i < matrix.length; ++i) {
			console.log("["+matrix[i].join("\t")+"]\n");
		}
	};

	this.getMatrix = function() {
		return matrix;
	};
};

exports.MyGraph = Graph;
