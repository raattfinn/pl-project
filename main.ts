namespace SpriteKind {
    export const bounce_tile = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.vy = -150
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.bounce_tile, function (sprite, otherSprite) {
    sprite.vx = sprite.vx * -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e e . . . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . e 5 5 5 5 5 5 5 5 5 e . . . 
        . . e 5 5 5 5 5 5 5 5 5 e . . . 
        . . 8 8 5 8 8 8 5 5 5 5 e . . . 
        . . 8 5 5 8 5 5 5 5 5 5 e . . . 
        . . e 5 5 5 5 5 5 5 5 5 e . . . 
        . . e 8 8 5 5 5 5 5 5 5 e . . . 
        . . e 5 5 5 5 5 5 5 5 e . . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . . e 5 e e e 5 5 5 e . . . . 
        . . . e 5 5 5 e 5 5 5 e . . . . 
        . . . . e e e . e e e . . . . . 
        `)
})
function enemies (enemyList: any[]) {
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthWest1)) {
        enemyOne = sprites.create(enemyList2._pickRandom(), SpriteKind.Enemy)
        tiles.setTileAt(value, sprites.dungeon.darkGroundCenter)
        tiles.placeOnTile(enemyOne, value)
        if (Math.percentChance(50)) {
            enemyOne.vx = 50
        } else {
            enemyOne.vx = -50
        }
    }
    for (let value of tiles.getTilesByType(sprites.dungeon.darkGroundNorthEast1)) {
        direction_change = sprites.create(img`
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
            `, SpriteKind.bounce_tile)
        tiles.placeOnTile(direction_change, value)
        tiles.setTileAt(value, sprites.dungeon.darkGroundCenter)
        direction_change.setFlag(SpriteFlag.Invisible, true)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite) {
    music.play(music.createSoundEffect(WaveShape.Noise, 1, 4391, 255, 86, 500, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    sprites.destroy(key, effects.confetti, 500)
    tiles.setTileAt(tiles.getTileLocation(2, 0), assets.tile`myTile1`)
    info.setLife(3)
    enemies(enemyList2)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . e e e e e e e . . . . 
        . . . . e 5 5 5 5 5 5 5 e . . . 
        . . . e 5 5 5 5 5 5 5 5 5 e . . 
        . . . e 5 5 5 5 5 5 5 5 5 e . . 
        . . . e 5 5 5 5 8 8 8 5 8 8 . . 
        . . . e 5 5 5 5 5 5 8 5 5 8 . . 
        . . . e 5 5 5 5 5 5 5 5 5 e . . 
        . . . e 5 5 5 5 5 5 5 8 8 e . . 
        . . . . e 5 5 5 5 5 5 5 5 e . . 
        . . . . e 5 5 5 5 5 5 5 e . . . 
        . . . . e 5 5 5 5 5 5 5 e . . . 
        . . . . e 5 5 5 e e e 5 e . . . 
        . . . . e 5 5 5 e 5 5 5 e . . . 
        . . . . . e e e . e e e . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (playerSprite.y < otherSprite.y) {
        sprites.destroy(otherSprite, effects.disintegrate, 500)
    } else {
        info.changeLifeBy(-1)
        tiles.placeOnTile(playerSprite, tiles.getTileLocation(17, 30))
    }
})
let direction_change: Sprite = null
let enemyOne: Sprite = null
let enemyList2: Image[] = []
let playerSprite: Sprite = null
let key: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
key = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . e e . . . . . 
    . . . . . . . . e . . . . . . . 
    . . . e e e e . e e e e e . . . 
    . . e e 5 5 5 e e e 5 5 e e . . 
    . . e 5 5 5 5 5 5 5 1 1 5 e e . 
    . . e 5 5 5 5 5 5 5 5 5 5 5 e . 
    . e 5 5 5 5 5 5 5 5 5 5 5 5 e . 
    . e 4 5 5 5 5 5 5 5 5 5 5 5 e . 
    . e 4 5 5 5 5 5 5 5 5 5 5 5 e . 
    . e 4 5 5 5 5 5 5 5 5 5 5 e e . 
    . e e 4 5 5 5 5 5 5 5 5 e e . . 
    . . e 4 5 5 5 5 5 5 5 e e . . . 
    . . . e 4 4 5 e e 4 4 e . . . . 
    . . . . e e e e . e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnTile(key, tiles.getTileLocation(1, 22))
playerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . e e e e e e e e . . . . 
    . . . e 5 5 5 5 5 5 5 5 e . . . 
    . . e 5 5 5 5 5 5 5 5 5 5 e . . 
    . . e 5 5 5 5 5 5 5 5 5 5 e . . 
    . . e 5 5 8 8 5 5 8 8 5 5 e . . 
    . . e 5 5 8 5 5 5 8 5 5 5 e . . 
    . . e 5 5 5 5 5 5 5 5 5 5 e . . 
    . . e 5 5 5 5 8 8 5 5 5 5 e . . 
    . . e 5 5 5 5 5 5 5 5 5 5 e . . 
    . . . e 5 5 5 5 5 5 5 5 e . . . 
    . . . e 5 5 5 5 5 5 5 5 e . . . 
    . . . e 5 5 5 e e e 5 5 e . . . 
    . . . e 5 5 5 e . e 5 5 e . . . 
    . . . . e e e . . e e e e . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(playerSprite, tiles.getTileLocation(17, 30))
controller.moveSprite(playerSprite, 100, 0)
scene.cameraFollowSprite(playerSprite)
playerSprite.ay = 300
enemyList2 = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f . 
    . . . . . f f f f f . . . f 5 f 
    . . f f f 8 8 8 8 f f f . f 5 f 
    . f 8 8 8 8 5 5 8 8 8 f f 5 5 f 
    . . f f f 8 8 8 8 8 8 f f 5 f . 
    . . . . f f c c c 8 8 f f 5 f . 
    . . . . . f f c 8 8 8 8 f 5 f . 
    . . . . . f f 8 8 8 8 8 f 5 5 f 
    . . . f f f 8 8 8 8 8 8 f 5 5 f 
    . . . f c 8 8 8 8 8 8 8 f 5 5 f 
    . . f f c 8 8 8 8 f f f f 5 5 f 
    . f f f f c 8 8 8 f c 8 8 f f . 
    . f c c f c c c f f c c c f . . 
    . f f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . f f . . . f f f . . . . . . 
    . f 7 1 f . f 7 7 f f . . . . . 
    . 7 2 2 f f 7 2 2 7 f . . . . . 
    f 7 2 2 7 7 7 2 2 7 f f . . . . 
    f 7 7 7 7 7 7 7 7 7 1 f f . . . 
    f 7 7 7 7 7 7 7 7 7 7 1 1 f . . 
    f f f f f f f f f 7 7 7 7 1 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f f 7 7 7 7 7 f f f 7 7 7 f 
    . . . . f 8 8 7 f f 7 7 7 7 7 f 
    . . . f f f 8 7 f 7 7 7 7 7 7 f 
    . . f 7 7 f f f f f f 7 7 7 8 f 
    . . f 7 7 7 f f 7 7 7 8 8 8 8 f 
    . . . f f f . f 7 8 8 f f f f . 
    . . . . . . . . f f f . . . . . 
    `, img`
    . . . f . f f . . . . . . . . . 
    . . f a f f a f . . . . . . . . 
    . . f 4 a a a f . . . . . . . . 
    . f a a a 4 a f . . . . . . . . 
    . f a a a a a f . . . . . . . . 
    . . f f f a a f . . . f f . . . 
    . . . f a a a f f f f a a f . . 
    . . . f a a a a a a a a f . . . 
    . . . f a a a a a a a a f . . . 
    . . f a a a a a a a a a f . . . 
    . . f a a a a a a f a a f . . . 
    . . f a a a a f f f a a f . . . 
    . . . f a a f . . . f a f . . . 
    . . . . f a f . . . f a f . . . 
    . . . . f a f . . . f a f . . . 
    . . . . f f . . . . . f f . . . 
    `]
