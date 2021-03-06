"use strict";

let FPS = 60;
let FRAME_CAP = false;

let DEFAULT_SPEED = 0.9;
let SPEED = DEFAULT_SPEED;

let SLOWMOTION = 0.075;
let SLOWMOTION_MIN = 99;
let SLOWMOTION_INCREASE = 0.25;
let SLOWMOTION_DECREASE = 0.5;

let SHOW_COLLISIONS = false;

let FALLING_SPEED = 2;

let STAR_AMOUNT = 0;
let ASTEROID_AMOUNT = 0;

let GRID_STYLE_WIDTH = 0.2;
let GRID_STYLE_COLOR = "rgba(0,0,0,0.45)";

let HEALTH_OVERLAY_COLOR = "#059b0a";
let DAMAGE_OVERLAY_COLOR = "#FF0000";

let HUNTER_FIRE_RATE = 0.01;

let LOCAL_SHIP_VELOCITY = 0.8;
let LOCAL_SHIP_DEFAULT_HEALTH = 100;

let MAGNET_RADIUS = 7.5;
let MAGNET_DURATION = 5e3;

let SHIELD_BRONZE_DURATION = 5e3;
let SHIELD_BRONZE_DECREASE_FACTOR = 2.5;

/** SPAWNS */
let SPAWN_RATE = 1;

let SPAWN_RATE_PILL = 0.04 * SPAWN_RATE;
let SPAWN_RATE_HEAL_PACKAGE = 0.065 * SPAWN_RATE;
let SPAWN_RATE_MAGNET = 0.05 * SPAWN_RATE;

let SPAWN_RATE_COINS_GOLD = 0.1 * SPAWN_RATE;
let SPAWN_RATE_COINS_SILVER = 0.12 * SPAWN_RATE;

let SPAWN_RATE_HUNTERS = 0.05 * SPAWN_RATE;
let SPAWN_MAX_HUNTER_COUNT = 6;

let SPAWN_RATE_SHIELD = 0.05 * SPAWN_RATE;

/** WAT */
let DIM = 8;

let SCALE = 1;

let MIN_SCALE = 0.2;
let MAX_SCALE = 1.8;

let GRID_SIZE = 48;

let RECOIL = 225;
let FRICTION = 0.125;
let CAMERA_SPEED = 3;

let COLOR_RED = "rgba(244,67,54,0.6)";
let COLOR_GREEN = "rgba(76,175,80,0.75)";
let COLOR_YELLOW = "rgba(255,235,59,0.6)";
let COLOR_ORANGE = "rgba(255,193,7,0.6)";