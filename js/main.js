//<!--contact-->

function contact_us() {
  var x = document.getElementById('contact');
  var op = document.getElementById('toggle_contact');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.color = 'black';
  } else {
    x.style.display = 'block';
    window.scrollTo(0, 30000);
    op.style.color = 'blue';
  }
}
//<!--end of contact-->


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
  } 
  else {
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


//<!--lightbox vios agiou-->

function lightbox_vios() {
  var x = document.getElementById('lightbox_vios');
  var op = document.getElementById('btn_vios');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}
//<!--end of lightbox vios agiou-->



//lightbox activities photo 
function lightbox_activities() {
  var x = document.getElementById('lightbox_activities');
  var y = document.getElementById('lightbox_activities_vid');
  var op = document.getElementById('btn_activities');
  var op2 = document.getElementById('btn_activities_vid');
  y.style.display = "none";
  op2.style.opacity = 1;

  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } 
  else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}

//end of lightbox activities photo

//lightbox activities video
function lightbox_activities_vid() {
  var x = document.getElementById('lightbox_activities_vid');
  var y = document.getElementById('lightbox_activities');
  var op = document.getElementById('btn_activities_vid');
  var op2 = document.getElementById('btn_activities');
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

//end of lightbox activities video

//lightbox archin photo 
function lightbox_archin() {
  var x = document.getElementById('lightbox_archin');
  var y = document.getElementById('lightbox_archin_vid');
  var op = document.getElementById('btn_archin');
  var op2 = document.getElementById('btn_archin_vid');
  y.style.display = "none";
  op2.style.opacity = 1;

  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } 
  else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}

//end of lightbox archin photo

//lightbox archin video
function lightbox_archin_vid() {
  var x = document.getElementById('lightbox_archin_vid');
  var y = document.getElementById('lightbox_archin');
  var op = document.getElementById('btn_archin_vid');
  var op2 = document.getElementById('btn_archin');
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

//end of lightbox archin video

//lightbox archout photo 
function lightbox_archout() {
  var x = document.getElementById('lightbox_archout');
  var y = document.getElementById('lightbox_archout_vid');
  var op = document.getElementById('btn_archout');
  var op2 = document.getElementById('btn_archout_vid');
  y.style.display = "none";
  op2.style.opacity = 1;

  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.opacity = 1;
  } 
  else {
    x.style.display = 'block';
    op.style.opacity = 0.3;
  }
}

//end of lightbox archout photo

//lightbox archout video
function lightbox_archout_vid() {
  var x = document.getElementById('lightbox_archout_vid');
  var y = document.getElementById('lightbox_archout');
  var op = document.getElementById('btn_archout_vid');
  var op2 = document.getElementById('btn_archout');
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

//end of lightbox archout video