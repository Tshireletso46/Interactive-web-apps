const nickname = "";
const firstname = "";
const value = `${nickname || firstname}`

if (value == undefined) {
    console.log('Good morning!')
} else{ 
    console.log("Good morning,", value)
}
 
