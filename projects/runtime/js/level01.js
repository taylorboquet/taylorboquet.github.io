var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 30;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            var x = myObstacle.x;
            var y = myObstacle.y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        createSawBlade(400,385);
        createSawBlade(850,270);
        createSawBlade(1070,270);
        createSawBlade(1220,385);
        function createClock(x,y){
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/alarm clock.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -38;
            obstacleImage.y = -48;
            obstacleImage.scaleX = .15;
            obstacleImage.scaleY = .15;
        }
        createClock(2000,385);
        function createEnemy(x,y){
        var enemy = game.createGameItem('enemy', 25);
        var redSquare = draw.bitmap("img/bad guy clock.png");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);
        enemy.velocityX = -4;
        enemy.velocityY = 0;
        enemy.health = 25;
        redSquare.scaleX =.08;
        redSquare.scaleY = .08;
        enemy.x = x;
        enemy.y = groundY-y;
        game.addGameItem(enemy);
        enemy.onPlayerCollision = function(){
            console.log('The player got hit.');
            game.changeIntegrity(-25);
        };
        enemy.onProjectileCollision = function(){
            game.increaseScore(100);
            enemy.fadeout();
        };
    }
        createEnemy(600, 25);
          

            var coin =  game.createGameItem('coin',13);
            var money = draw.bitmap('img/coin.png');
            money.scaleX = .04;
            money.scaleY = .04;
            money.x = -12;
            money.y = -12;
            coin.addChild(money);
            coin.x = 700;
            coin.y = groundY -50;
            game.addGameItem(coin);
            coin.velocityX = -2;
            
            coin.onPlayerCollision = function() {
                game.increaseScore(75);
                coin.fadeout();
                console.log('something is broken');
        };
    };
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}