'use strict';

// DATASETS //

var datasets = {};

datasets[ 'male-first-names-en' ] = require( 'datasets-male-first-names-en' );
datasets[ 'female-first-names-en' ] = require( 'datasets-female-first-names-en' );

datasets[ 'anscombes-quartet' ] = require( 'datasets-anscombes-quartet' );


// EXPORTS //

module.exports = datasets;
