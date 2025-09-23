$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -40, canvas.width + 100, 50, "blue"); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "blue"); // bottom wall
    createPlatform(-40, -50, 50, canvas.height + 500, "blue"); // left wall
    createPlatform(canvas.width,-5, -50, 50, canvas.height + 100, "blue"); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
//createPlatform(x, y, width, height)
createPlatform(600,650, 100,10, " blue")
 createPlatform(800, 570, 100, 10,"white")
 createPlatform(1000,470, 100, 10," blue")
 createPlatform(970, 250, 100, 10, "black")
 createPlatform(700, 300, 100, 10, " blue")
 createPlatform(1200,350,200,10, "black")
 createPlatform(500, 200, 100, 10,"white")
 createPlatform(300, 100, 100, 10, "blue")
 createPlatform(200, 300, 100, 100, "white")
    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons
//createCannon(wallLocation, position, timeBetweenShots, width, height)

    createCannon("top", 1300, 2000, 50,50)
    createCannon("left", 200, 2000, 50, 50)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
