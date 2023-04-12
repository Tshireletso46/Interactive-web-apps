const nickname = "Timmy";
const firstname = "Timothy";
const value = `${nickname || firstname}`

if (value == undefined) {
    console.log('Good morning!')
} else{ 
    console.log("Good morning,", value)
}
 
/**
 * Created a new varible where to assign either the nickname or firstname
 * In the if statement should the value be undefined then the browser should log 'Good morning!'
 * Else log Good morning, with any of the values 
 */