//if the login info is wrong,post request will be pending(when click repage button or F5 the wrong form will be resubmitted). We need the below code to clear old wrong form
if ( window.history.replaceState ) {

    window.history.replaceState( null, null, window.location.href );
  }
