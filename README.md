# Bouncing Ball Game

This simple web-based Bouncing Ball Game showcases a ball bouncing within a canvas, with the ability to dynamically adjust its speed. The game provides buttons to increase or decrease the speed of the bouncing ball, and it displays the current speed on wall hit in kilometers per hour.

## How to Play

1. Open the HTML file (`index.html`) in a web browser.
2. The canvas will display a bouncing ball with an initial speed.
3. Use the "Increase Speed" and "Decrease Speed" buttons to adjust the ball's speed.
4. Observe the ball bouncing off the walls, changing color on each collision.
5. The "Speed on Ball" display shows the current speed of the ball in kilometers per hour.

## Code Structure

### HTML (`index.html`)

- The HTML file defines the structure of the game, including a canvas, buttons to control speed, and a speed display.
- It links to an external stylesheet (`styles.css`) for styling.
- The JavaScript logic is included in an external script file (`script.js`).

### CSS (`styles.css`)

- The CSS file styles the layout, canvas, buttons, and speed display for a visually appealing game interface.

### JavaScript (`script.js`)

- The JavaScript file contains the game logic.
- It initializes the canvas and ball properties, handles ball movement, wall collisions, and color changes on wall hits.
- The speed of the ball can be adjusted using the "Increase Speed" and "Decrease Speed" buttons.
- The game continuously updates and redraws the canvas using the `draw` function.
- The `updateSpeedDisplay` function calculates and displays the ball's speed on wall hit in kilometers per hour.

## Game Controls

- **Increase Speed Button:** Click to increase the speed of the bouncing ball.
- **Decrease Speed Button:** Click to decrease the speed of the bouncing ball.

## Important Functions

- `drawBall`: Draws the bouncing ball on the canvas.
- `draw`: Handles the main game loop, including ball movement and wall collisions.
- `updateSpeedDisplay`: Calculates and updates the displayed speed on wall hit.
- `increaseSpeed` and `decreaseSpeed`: Functions to adjust the speed of the ball.

## Notes

- The ball changes color on each wall collision, providing a visually dynamic experience.
- The speed is displayed in kilometers per hour on each wall hit.

Enjoy playing with the Bouncing Ball Game!
