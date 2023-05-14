

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