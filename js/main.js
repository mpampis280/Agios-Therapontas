//<!--contact-->
//<iframe class='responsive-iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10953.638376042767!2d26.554947270929674!3d39.10568384260895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ba670eaa255555%3A0xffc627be89a91314!2sGreek%20Orthodox%20Church%20of%20Saint%20Therapon!5e0!3m2!1sen!2sgr!4v1684434748420!5m2!1sen!2sgr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
function contact_us() {
  var x = document.getElementById('contact');
  var op = document.getElementById('toggle_contact');
  if (x.style.display === 'block') {
    x.style.display = 'none';
    op.style.color = 'black';
  } else {
    x.style.display = 'block';
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