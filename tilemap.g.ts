// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`14002000060b0d0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0c040303030303030303030302030303030303030804030303030303030303030202020203030302080a020202020303030303030303030303030203080a020202020203030303030303030303020303080a030303030303030303030202020202020303080a030303030303030303030303030303030302080a030303030302030303030303030303020203080a030303030303020202030303030202030303080a020203030303030303030303030303030303080a030303030203030303030303030303030303080a030303030303030303030303030303030202080a030303030303030302020202020303030303080a020202020203030303030303030303030303080a030303030203030202020303030303030303080a030303030302020303030303030303030202080a030203030303030303030303030302020303080a030302030303030303030303030303030303080a030303030303030302020203030303030303080a030302020303030303030302030303030303080a030303020202030303030303030303030303080a030203030203030302020203030302020202080a030303030203030303030303030303030303080a030303020203030303030303030303030303080a030302030303030202020203030303030303080a020202030303030303030303020203030303080a030303030303030303030303030303020202080a030303030202030303030303030303030303080a030303030303030302020203020203030303080a030202020303030303030303030202030303080a030303030303030303030203030302020303080509090909090909090909090909090909090107`, img`
22222222222222222222
...........2.......2
...........2222...22
22222............2.2
222222..........2..2
2..........222222..2
2.................22
2.....2.........22.2
2......222....22...2
222................2
2....2.............2
2................222
2........22222.....2
222222.............2
2....2..222........2
2.....22.........222
2.2............22..2
2..2...............2
2........222.......2
2..22.......2......2
2...222............2
2.2..2...222...22222
2....2.............2
2...22.............2
2..2....2222.......2
2222.........22....2
2...............2222
2....22............2
2........222.22....2
2.222.........22...2
2..........2...22..2
222222222222222222.2
`, [myTiles.transparency16,sprites.dungeon.doorOpenSouth,sprites.dungeon.floorLight1,sprites.dungeon.darkGroundCenter,sprites.dungeon.stairWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenSwitchUp,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
