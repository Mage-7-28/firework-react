

# Firework Animation Component

This is a Firework (fireworks) animation component project implemented using React, providing a particle animation display with visual effects.

## Project Introduction

This project is primarily used to demonstrate fireworks animation effects and is built using React and TypeScript. The animation simulates the trajectory and behavior of particles to create a realistic fireworks display.

## Key Features

- **Fireworks Animation**: Displays dynamic particle animation effects by defining a `Particle` interface and implementing the `Firework` React component.
- **TypeScript Support**: The entire project is written in TypeScript, ensuring type safety and an improved development experience.

## Installation and Usage

1. **Install Dependencies**

   Make sure to install the required dependencies for the project:
   ```bash
   npm install
   ```

2. **Import Component**

   Import and use the `Firework` component in your React project:
   ```tsx
   import { Firework } from './src/Firework';

   function App() {
     return (
       <div>
         <Firework />
       </div>
     );
   }
   ```

## Animation Implementation Details

- **Particle Interface**: Defines the properties and behaviors of each particle in the animation.
- **Firework Component**: Implemented using `React.FC`, it drives the animation using a particle system.

## Development and Build

- The TypeScript compilation configuration is managed through `tsconfig.json`.
- Source code is located in the `src` directory and includes `Firework.tsx` and `index.ts`.

## Notes

- The external modules `undici-types` and `csstype` are declared in the project; ensure these dependencies are installed.
- Animation performance can be further optimized by adjusting the number of particles and their lifespans based on specific requirements.

## License

This project follows standard open-source licensing practices. Please refer to the license file in the project root directory for details.