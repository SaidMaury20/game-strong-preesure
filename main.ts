namespace SpriteKind {
    export const Enemy2 = SpriteKind.create()
}
info.onCountdownEnd(function () {
    music.play(music.createSong(assets.song`You Win`), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    pause(500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    pause(500)
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    music.play(music.createSong(assets.song`Game Over`), music.PlaybackMode.UntilDone)
})
info.setScore(0)
info.setLife(200)
info.startCountdown(100)
scene.setBackgroundImage(assets.image`BG`)
let Playerexte = sprites.create(assets.image`dedede1`, SpriteKind.Player)
let myEnemy = sprites.create(assets.image`Enemy`, SpriteKind.Enemy)
let Myenemy2 = sprites.create(assets.image`Enemy 2`, SpriteKind.Enemy2)
controller.moveSprite(Playerexte)
music.play(music.createSong(assets.song`Song`), music.PlaybackMode.UntilDone)
myEnemy.follow(Playerexte, 32)
Myenemy2.follow(Playerexte, 29)
animation.runImageAnimation(
Playerexte,
assets.animation`DEDEDE`,
100,
true
)
music.play(music.createSong(assets.song`LoopSong`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    pause(2000)
    info.changeScoreBy(1)
})
forever(function () {
	
})
