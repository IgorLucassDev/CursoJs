var time = new Date()
var day = time.getDay()

/*
    Sunday = 0 
    Monday = 1
    Tuesday = 2
    Wednesday = 3
    Thursday = 4
    Friday = 5
    Saturday = 6
*/

switch (day) {
    case 0:
        console.log('Sunday')
        break;
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;   
    case 3:
        console.log('Wednesday')
        break
    case 4:
        console.log('Thursday')
        break
    case 5:
        console.log('Friday')
        break
    case 6:
        console.log('Saturday')
        break
    default:
        console.log('[ERROR] Invalid argument!')
        break;
}