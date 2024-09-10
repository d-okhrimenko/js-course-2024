function process() {
    var template, data, html;
    template = $('#template').val();
    eval( $('#data').val() );
    html = Mustache.render( template, data );
    $('#html').text( html );
    $('#result').html( html );
  }