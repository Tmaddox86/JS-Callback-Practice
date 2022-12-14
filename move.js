const character = newImage('assets/green-character/static.gif')
let directions = null;
let x = 100;
let y = 250;


function move(element) {
    element.style.position = 'fixed'


    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }
    function moveWithArrowKeys(left, bottom){
        let directions = null;
        let x = 100;
        let y = 250;
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        
        function moveWithArrowKeys(left, bottom, callback){
            let direction = null;
            let x = left;
            let y = bottom;
        
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            
            function moveCharacter(){ 
                if(direction === 'west'){
                    x-=1
                }
                if(direction === 'north'){
                    y+=1
                }
                if(direction === 'east'){
                    x+=1
                }
                if(direction === 'south'){
                    y-=1
                }
                element.style.left = x + 'px'
                element.style.bottom = y + 'px'
            }
            
            setInterval(moveCharacter, 1)
            
            document.addEventListener('keydown', function(e){
                if(e.repeat) return;
            
                if(e.key === 'ArrowLeft'){
                    direction = 'west'
                }
                if(e.key === 'ArrowUp'){
                    direction = 'north'
                }
                if(e.key === 'ArrowRight'){
                    direction = 'east'
                }
                if(e.key === 'ArrowDown'){
                    direction = 'south'
                }
                callback()
            })
            
            document.addEventListener('keyup', function(e){
                direction = null
                callback()
            })
        }
        
    }
    const character = newImage('assets/green-character/static.gif')

    function handleDirectionChange(direction){
        if(direction === null){
            character.src = 'assets/green-character/static.gif'
        }
        if(direction === 'west'){
            character.src = 'assets/green-character/west.gif'
        }
        if(direction === 'north'){
            character.src = 'assets/green-character/north.gif'
        }
        if(direction === 'east'){
            character.src = 'assets/green-character/east.gif'
        }
        if(direction === 'south'){
            character.src = 'assets/green-character/south.gif'
        }
    }
    
    move(character).withArrowKeys(100, 250, handleDirectionChange)
    
    
    return {
        to: moveToCoordinates, witharrowKeys:
    }
}
