/* An adjacency matrix based graph implementation */
function Graph(n) {
	var matrix = new Array(n);
	var nodes = new Array();
	var that = this;

	for (var i = 0; i < n; ++i) {
		matrix[i] = new Array(n);
		for (var j = 0; j < n; ++j) {
			matrix[i][j] = 0;
		}
	}

	this.addEdge = function(n1, n2, e) {
		matrix[n1.getID()][n2.getID()] = matrix[n2.getID()][n1.getID()] =  e.getWeight();
		e.addNode(n1).addNode(n2);
	};

	this.addNode = function(n) {
		nodes.push(n);
	};

	this.print = function() {
		for (var i = 0; i < matrix.length; ++i) {
			console.log("["+matrix[i].join("\t")+"]\n");
		}
	};

	this.getMatrix = function() {
		return matrix;
	};

	this.traverse = function(start, nodeFunc, edgeFunc) {

	};
};

function Node(l) {
	var label = l;
	var edges = new Array();
	var that = this;

	this.getLabel = function() {
		return label;
	};

	this.addEdge = function(e) {
		edges.push(e);
		return that;
	};

	this.getEdges = function() {
		return edges;
	};
}

function Edge(w) {
	var weight = w;
	var nodes = new Array();
	var that = this;

	this.getWeight = function() {
		return w;
	};

	this.addNode = function(n) {
		nodes.push(n);
		return that;
	};

	this.getNodes = function() {
		return nodes;
	};

exports.MyGraph = Graph;
