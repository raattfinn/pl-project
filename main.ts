controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
	
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
let playerSprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
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
playerSprite.setPosition(146, 107)
controller.moveSprite(playerSprite, 100, 100)
scene.cameraFollowSprite(playerSprite)
