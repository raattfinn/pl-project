def on_up_pressed():
    playerSprite.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile(sprite, location):
    game.splash("It's too late to go back now")
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.door_open_south,
    on_overlap_tile)

def on_a_pressed():
    global playerShot
    playerShot = sprites.create_projectile_from_sprite(img("""
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
        """),
        playerSprite,
        50,
        0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_left_pressed():
    playerSprite.set_image(img("""
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
    """))
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def enemies(enemyList: List[Image]):
    global enemyOne, enemyTwo, enemyThree
    enemyOne = sprites.create(enemyList._pick_random(), SpriteKind.enemy)
    enemyTwo = sprites.create(enemyList._pick_random(), SpriteKind.enemy)
    enemyThree = sprites.create(enemyList._pick_random(), SpriteKind.enemy)
    tiles.place_on_tile(enemyOne, tiles.get_tile_location(2, 12))
    tiles.place_on_tile(enemyThree, tiles.get_tile_location(15, 4))
    tiles.place_on_tile(enemyTwo, tiles.get_tile_location(17, 20))

def on_right_pressed():
    playerSprite.set_image(img("""
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
    """))
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_on_overlap(sprite2, otherSprite):
    sprites.destroy(key, effects.confetti, 500)
    tiles.set_tile_at(tiles.get_tile_location(2, 0),
        assets.tile("""
            myTile1
        """))
    info.set_life(3)
    enemies(enemyList2)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite3, otherSprite2):
    info.change_life_by(-1)
    tiles.place_on_tile(playerSprite, tiles.get_tile_location(17, 30))
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

enemyThree: Sprite = None
enemyTwo: Sprite = None
enemyOne: Sprite = None
playerShot: Sprite = None
enemyList2: List[Image] = []
playerSprite: Sprite = None
key: Sprite = None
tiles.set_current_tilemap(tilemap("""
    level1
"""))
key = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_tile(key, tiles.get_tile_location(1, 22))
playerSprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.place_on_tile(playerSprite, tiles.get_tile_location(17, 30))
controller.move_sprite(playerSprite, 100, 0)
scene.camera_follow_sprite(playerSprite)
playerSprite.ay = 300
enemyList2 = [img("""
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
    """),
    img("""
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
    """),
    img("""
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
    """)]