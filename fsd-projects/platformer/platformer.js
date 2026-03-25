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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
createPlatform(-50, -50, 50, canvas.height + 500); // left wall
createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //createPlatform(xPos, yPos, Width, Height, "Color")

    toggleGrid();


    // TODO 2 - Create Platforms
     createPlatform(300, 650, 100, 25, "white");
createPlatform(500, 575, 100, 25, "white");
createPlatform (700, 500, 200, 25, "green")
createPlatform(775, 270, 50, 150, "dark brown" )
createPlatform(750, 700, 100, 25, "green")
createPlatform(1000, 550, 100, 30, "white", 0, canvas.width, 0, 200, 550, 2);
createPlatform(200, 300, 200, 25, "green")
createPlatform(500, 200, 300, 25, "white")
    // TODO 3 - Create Collectables
createCollectable("steve", 800,600 );
createCollectable("steve", 200, 170 );
  createCollectable("steve", 650, 150)

    
    // TODO 4 - Create Cannons
//createCannon("top / right / bottom / left", position, Speed);
createCannon("top", 700, 3000);
createCannon("right", 450, 3000);
createCannon("right", 700, 3000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
