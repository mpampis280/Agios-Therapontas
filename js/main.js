

//<!--lightbox palios naos toggle-->

  function lightbox_palios() {
    var x = document.getElementById('lightbox_palios');
    var op = document.getElementById('btn_palios');
    if (x.style.display === 'block') {
      x.style.display = 'none';
      op.style.opacity = 1;
    } else {
      x.style.display = 'block';
      op.style.opacity = 0.3;
    }
  }
//<!--end of lightbox palios naos toggle-->

//lightbox neos photo 
function lightbox_neos() {
  var x = document.getElementById('lightbox_neos');
  var y = document.getElementById('lightbox_neos_vid');
  var op = document.getElementById('btn_neos');
  var op2 = document.getElementById('btn_neos_vid');
  y.style.display = 'none';
  op2.style.opacity = 1;

  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}

//end of lightbox neos photo

//lightbox neos video
function lightbox_neos_vid() {
  var x = document.getElementById('lightbox_neos_vid');
  var y = document.getElementById('lightbox_neos');
  var op = document.getElementById('btn_neos_vid');
  var op2 = document.getElementById('btn_neos');
  y.style.display = 'none';
  op2.style.opacity = 1;
  
  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}




//end of lightbox neos video