document.querySelectorAll('.parallelogram').forEach(function(parallelogram) {
    parallelogram.addEventListener('click', function() {
      this.style.width = this.style.width === '200px' ? '100px' : '200px';
    });
  });