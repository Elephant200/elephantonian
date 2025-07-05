# [Elephantonian](https://elephantonian.replit.app)

Welcome to **Elephantonian**, a vibrant project celebrating elephants, featuring a collection of elephant images, fun interactive games, and an engaging gallery. Explore and enjoy the majesty of elephants and some exciting games!

---

## 🐘 **About Elephantonian**
Elephantonian is a unique platform dedicated to:
- Highlighting the beauty and significance of elephants.
- Offering fun and interactive games like **Space Invaders**, **Ping Pong**, **Balloon Pop**, **Pacman**, **Brick Breaker**, and more.
- Spreading awareness and appreciation for these magnificent creatures.

The project showcases:
- A **Gallery** with beautiful elephant images.
- Games to engage users in creative and fun ways.

---

## 🎮 **Games Available**

### 1. **Space Invaders**
A classic arcade-style space shooting game with modern features and competitive elements!
- **How to Play:** Use arrow keys to move your ship left and right, spacebar to shoot, and defend Earth from alien invaders.
- **Features:**
  - User feature with personal and global leaderboards
  - Multiple alien types with different point values (10, 20, 40 points)
  - Special UFO enemies for high bonus points (150 points)
  - Wave progression with increasing difficulty and speed
  - Pause functionality (P or Escape key)
  - Accuracy tracking and detailed statistics
  - Lives system with respawn mechanics
  - Real-time score tracking with wave bonuses
- **Advanced Mechanics:** Aliens fire back, increasing fire rate each wave, special UFOs appear randomly, and you gain bonus lives for surviving waves.

### 2. **Ping Pong**
A feature-rich table tennis game with both single and multiplayer modes!
- **Game Modes:**
  - **Single Player:** Challenge AI opponents with three difficulty levels (Easy, Medium, Hard)
  - **Two Player:** Local multiplayer for head-to-head matches
- **Advanced Features:**
  - Realistic ball physics with spin mechanics based on paddle movement
  - Ball speed increases with each hit for dynamic gameplay
  - Pause functionality (Spacebar) and quick restart (R key)
  - Score tracking up to 11 points (standard table tennis rules)
  - Responsive paddle controls with smooth movement
- **Controls:** Player 1 uses W/S keys, Player 2 uses arrow keys, ESC returns to menu.

### 3. **Balloon Pop**
A fast-paced environmental action game with a 30-second time limit!
- **Objective:** Pop as many colorful balloons as possible to "save the atmosphere" before time runs out.
- **Gameplay Features:**
  - Balloons continuously spawn and rise up the screen at different speeds
  - Wide variety of balloon colors (over 140 different colors!)
  - Click-based interaction with immediate visual feedback
  - Real-time score tracking and countdown timer
  - Balloons have different spawn positions and rise at varying speeds
- **Challenge:** Balance speed and accuracy as balloons move faster and appear more frequently as you play.

### 4. **Drawer**
An artistic digital canvas with advanced particle effects and creative tools!
- **Creative Features:**
  - Interactive particle-based drawing system using p5.js
  - Dynamic particle effects that respond to mouse movement and speed
  - Colorful particles with lifespan-based transparency effects
  - Connected particle trails for flowing artistic lines
  - Responsive canvas that adapts to different screen sizes
- **How to Use:** Click and drag to create flowing particle art. Each stroke generates unique particles with random colors and physics-based movement.

### 5. **Pacman**
A faithful recreation of the classic maze arcade game with all the essential features!
- **Classic Gameplay:** Navigate through mazes, collect dots, and avoid colorful ghosts.
- **Features:**
  - All traditional Pacman elements: maze navigation, dot collection, and ghost AI
  - Power pellets that allow you to chase and eat ghosts for bonus points
  - Progressive difficulty
  - Score tracking and multiple lives system
  - Authentic arcade-style gameplay mechanics

### 6. **Brick Breaker**
A classic paddle-and-ball game with satisfying block-breaking action!
- **Gameplay:** Control a paddle to bounce a ball and break colored bricks arranged in patterns.
- **Features:**
  - Multiple levels with different brick arrangements
  - Paddle control with responsive movement
- **Challenge:** Keep the ball in play while strategically breaking all bricks to advance to the next level.

---

## 📸 **Gallery**
Explore a curated selection of elephant images in the **Gallery** section. Click on images to zoom in and appreciate their beauty.

---

## 🌟 **Features**
- **Interactive Navbar:** Navigate seamlessly between pages (Home, About Us, Gallery, Games).
- **Custom Design:** Styled with Bootstrap and custom CSS for a polished, responsive design.
- **Dynamic Content:** Powered by jQuery and JavaScript for engaging user experiences.
- **Multiple Game Modes:** Interactive and visually rich games for all ages.
- **Data Persistence:** Space Invaders features cloud-based leaderboards with JSONBin integration.
- **Responsive Design:** Games adapt to different screen sizes and devices.
- **Creative Tools:** From competitive arcade games to artistic expression platforms.

---

Open index.html in your browser to start exploring Elephantonian.

## 📂 Project Structure

The project is organized as follows:

- **`index.html`**: The homepage featuring a carousel of elephant images and links to other sections.
- **`gallery.html`**: A photo gallery showcasing beautiful elephant images with zoom functionality.
- **`about.html`**: The "About Us" page, detailing the project's mission and its founder.
- **`games.html`**: Main games hub with thumbnails and links to all available games.
- **`navbar.html`**: A reusable navigation bar included across all pages.
- **`custom.css`**: The main CSS file for custom styles.
- **`games/`**: A folder containing interactive games:
  - **`spaceinvaders.html`**: Full-featured Space Invaders game with leaderboards
  - **`balloonpop.html`**: A game where you pop balloons to save the atmosphere
  - **`pingpong.html`**: A two-player Ping Pong game with responsive design
  - **`drawer.html`**: An interactive drawing canvas for creative exploration
  - **`custom.css`**: Game-specific styling
  - **`navbar.html`**: Game section navigation
  - **`random.js`**: Utility JavaScript file with helper functions
  - **`PingPongCSS/`**: Specific CSS files for the Ping Pong game:
    - **`smallPingPong.css`**: Styles for smaller screens
    - **`largePingPong.css`**: Styles for larger screens
- **`static/`**: Static assets directory:
  - **`elephants/`**: Collection of elephant images (22 high-quality images)
  - **`games/spaceinvaders/`**: Space Invaders game sprites
  - **`games/thumbnails/`**: Game thumbnail images
  - **`logo.png`**: Site logo and favicon
  - **`about-image.jpg`**: About page image
  - **`elephantonian-text.png`**: Site branding image

---

## 🌐 Live Preview
Experience Elephantonian live at: https://elephantonian.replit.app

---

## 🤝 Contributing
Contributions are welcome! If you'd like to improve the project or add new features, feel free to:

1. Clone the repository:
   ```bash
   git clone https://github.com/Elephant200/elephantonian.git
   ```
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeatureName
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your detailed description here"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/YourFeatureName
   ```
5. Open a pull request for review.

---

## 💬 Acknowledgements

A special thanks to the following resources and inspirations that made this project possible:

- **Bootstrap**: For providing a responsive and visually appealing design framework.
- **p5.js**: For enabling the creative and interactive drawing experience in the Drawer game.
- **jQuery**: For simplifying dynamic interactions and DOM manipulations.
- **JSONBin.io**: For providing cloud-based data storage for game leaderboards.
- **Font Awesome**: For beautiful icons throughout the interface.
- The classic games **Space Invaders**, **Pacman**, and **Brick Breaker**, which inspired the game implementations.
- The countless online resources and communities that share knowledge about web development and design.

Thank you to everyone who contributed inspiration and support to Elephantonian! 🐘

---

Enjoy exploring Elephantonian and the wonders of elephants! 🐘
