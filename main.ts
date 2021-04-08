let projectile: Sprite = null
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 3 3 3 2 . . . . . . 
    . . . . . . 3 3 3 2 . . . . . . 
    . . . . . . 3 3 2 2 . . . . . . 
    . . . 3 3 3 5 5 5 5 3 3 3 . . . 
    . . . 3 3 3 5 4 4 5 3 3 3 . . . 
    . . . 3 3 3 5 4 4 5 3 3 3 . . . 
    . . . 3 3 3 5 5 5 5 3 3 3 . . . 
    . . . . . . 3 3 3 2 . . . . . . 
    . . . . . . 3 3 3 2 . . . . . . 
    . . . . . . 3 3 2 2 . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    . . . . . . . 7 7 . . . . . . . 
    `, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . 5 5 f 5 f 5 f 5 f 5 f . . . 
        . . 5 5 f 5 f 5 f 5 f 5 5 . . . 
        . . 5 5 f 5 f 5 f 5 f 5 5 . . . 
        . . 5 5 f 5 f 5 f 5 f 5 5 . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . 9 9 9 9 . . . . . . 
        . . . . . . . 9 9 9 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, randint(-25, 25), randint(-25, 25))
    projectile.lifespan = 3000
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
