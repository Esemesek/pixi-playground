import React from 'react';
import * as PIXI from 'pixi.js';
import characters from './images/characters.png';
import { Sprite, Stage } from 'react-pixi-fiber';

const TILE_SIZE = 32;

const charactersBaseTexture = PIXI.Texture.fromImage(characters);

const App = () => (
  <Stage width={800} height={600} options={{ backgroundColor: 0x10bb99 }}>
    <Sprite
      scale={4}
      texture={new PIXI.Texture(charactersBaseTexture, new PIXI.Rectangle(TILE_SIZE, TILE_SIZE, TILE_SIZE, TILE_SIZE))}
    />
  </Stage>
);

export default App;
