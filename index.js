const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
move(character).to(100, 250)


if (directions ==='west'){
    x = x -1
}
if (directions === 'east'){
    x = x + 1
}
if (directions === 'north'){
    y = y + 1
}
if (directions ==='south'){
    y = y - 1 
}

function moveCharacter(){
    if (directions === 'west'){
        x = x - 1
    }
    if (directions === 'east'){
        x = x + 1
    }
    if (directions === 'north'){
        y = y + 1
    }
    if (directions === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}

setInterval(function(){
    if (directions === 'west'){
        x = x - 1
    }
    if (directions === 'east'){
        x = x + 1
    }
    if (directions === 'north'){
        y = y + 1
    }
    if (directions === 'south'){
        y = y - 1
    }
    character.style.left = x + 'px'
    character.style.bottom = y + 'px'
}, 1)
setInterval(moveCharacter, 1)

document.addEventListener('keydown', function(e){
    
    if(e.repeat) return;

    if(e.key === 'ArrowLeft'){
        directions = 'west'
    }
    if(e.key === 'ArrowUp'){
        directions = 'north'
    }
    if(e.key === 'ArrowRight'){
        directions = 'east'
    }
    if(e.key === 'ArrowDown'){
        directions = 'south'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})
const character = newImage('assets/green-character/static.gif')
//move(character).withArrowKeys(100, 250)
//move(newImage('assets/tree.png')).withArrowKeys(200, 450)

const character = newImage('assets/green-character/static.gif')

character.style.left = x + 'px'
character.style.bottom = y + 'px'
move(character).to(100, 250)


move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)