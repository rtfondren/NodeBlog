
/*
 * GET home page.
 */
    exports.index = function(req, res){
        var graph = res.app.settings['view options'].Graph;
        var g = new graph(5);
        g.addEdge(0, 1, .1);
        g.addEdge(0, 2, .2);
        g.addEdge(0, 3, .3);
        g.addEdge(0, 4, .4);
        g.addEdge(1, 2, .25);
        g.addEdge(1, 3, .35);
        g.addEdge(1, 4, .45);
        g.addEdge(2, 3, 3.5);
        g.addEdge(2, 4, 4.5);
        g.addEdge(3, 4, 5.05);

        res.render('index', { title: 'Express', graph: g.getMatrix()});
    };

