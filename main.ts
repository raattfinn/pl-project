controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    playerSprite.vy = -150
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.doorOpenSouth, function (sprite, location) {
    game.splash("It's too late to go back now")
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    playerShot = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 3 . . . . . . 
        . . . . . 3 3 3 3 3 . . . . . . 
        . . . . 3 3 3 3 3 3 3 3 . . . . 
        . . . 3 3 3 3 3 3 3 3 3 . . . . 
        . . 3 3 3 3 3 3 3 3 3 2 2 . . . 
        . . . 2 2 2 3 3 3 3 3 2 . . . . 
        . . . 2 2 2 3 2 2 3 3 2 . . . . 
        . . 2 . 2 . 2 2 2 2 2 . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, playerSprite, 50, 0)
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
function enemies (enemyList: Image[]) {
    enemyOne = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
    enemyTwo = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
    enemyThree = sprites.create(enemyList._pickRandom(), SpriteKind.Enemy)
    tiles.placeOnTile(enemyOne, tiles.getTileLocation(2, 12))
    tiles.placeOnTile(enemyThree, tiles.getTileLocation(15, 4))
    tiles.placeOnTile(enemyTwo, tiles.getTileLocation(17, 20))
}
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
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(key, effects.confetti, 500)
    tiles.setTileAt(tiles.getTileLocation(2, 0), assets.tile`myTile1`)
    info.setLife(3)
    enemies(enemyList)
})
let enemyThree: Sprite = null
let enemyTwo: Sprite = null
let enemyOne: Sprite = null
let playerShot: Sprite = null
let enemyList: Image[] = []
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
playerSprite.ay = 200
enemyList = [img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . f . 
    . . . . . f f f f f . . . f 5 f 
    . . f f f 8 8 8 8 f f f . f 5 f 
    . f 8 8 8 8 5 5 8 8 8 f f 5 5 f 
    . . f f f 8 8 8 8 8 8 f f 5 f . 
    . . . . f f 8 8 8 8 8 f f 5 f . 
    . . . . . f f 8 8 8 8 8 f 5 f . 
    . . . . . f f 8 8 8 8 8 f 5 5 f 
    . . . f f f 8 8 8 8 8 8 f 5 5 f 
    . . . f 8 8 8 8 8 8 8 8 f 5 5 f 
    . . f f 8 8 8 8 8 f f f f 5 5 f 
    . f f f f 8 8 8 8 f 8 8 8 f f . 
    . f 8 8 f 8 8 8 f f 8 8 8 f . . 
    . f f f f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . . . . . . . . . 
    . . f f . . . f f f . . . . . . 
    . f 7 7 f . f 7 7 f f . . . . . 
    . 7 2 2 f f 7 2 2 7 f . . . . . 
    f 7 2 2 7 7 7 2 2 7 f f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f f . . . 
    f 7 7 7 7 7 7 7 7 7 7 7 7 f . . 
    f f f f f f f f f 7 7 7 7 7 f . 
    . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
    . . f f 7 7 7 7 7 f f f 7 7 7 f 
    . . . . f 7 7 7 f f 7 7 7 7 7 f 
    . . . f f f 7 7 f 7 7 7 7 7 7 f 
    . . f 7 7 f f f f f f 7 7 7 7 f 
    . . f 7 7 7 f f 7 7 7 7 7 7 7 f 
    . . . f f f . f 7 7 7 f f f f . 
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
