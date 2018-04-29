function randomBoard (grid) {
  for (var i = 0; i < grid*grid; i++) {
      var check = document.createElement('div');
      check.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
      check.style.width = 100/grid +'%';
      check.style.paddingBottom = 100/grid + '%';
      check.style.float = 'left';
      document.body.appendChild(check);
    }
  }

randomBoard(9);
