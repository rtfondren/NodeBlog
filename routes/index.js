
/*
 * GET home page.
 */
    exports.index = function(req, res){
        var graph = res.app.settings['view options'].Graph;
		var tf = new res.app.settings['view options'].TrackGraph();

        res.render('index', { title: 'MixPlan - Get Harmonic!', graph: []});
    };

