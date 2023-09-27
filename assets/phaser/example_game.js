var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

var player = game.add.sprite(400, 300, 'player');

game.update = function() {
  player.x += 1;
};

game.start();