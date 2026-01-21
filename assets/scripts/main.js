let scene = new Phaser.Scene("Game");

scene.preload = function () {
  // 1. загрузить бэкгроунд
  this.load.image("bg", "assets/sprites/background.jpg");
};

scene.create = function () {
  // 2. вывести бэкгроунд на сцену
  this.add.sprite(config.width / 2, config.height / 2, "bg");
};

let config = {
  type: Phaser.AUTO, //webgl or canvas
  width: 1280,
  height: 720,
  scene: scene,
};

let game = new Phaser.Game(config);
 