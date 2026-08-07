const accountId = 1234
let accEmail = "samaysarthak$@gmail.com"
var accPass = "12345"
accCity = "jaipur"// ho ta jata but acha tarika nahi
let accState
console.table([accountId,accEmail,accPass,accCity,accState])
/*
var is not used because of issue in block scope by the way it is functional scope means koi variable jo var se declare hua hai us function tak me valid rahegaa uske bahar toh isme bhi nahi hoga samjha agar function andar block hai fir bhi woh us scope ko nahi manta eg for ,while loops etc
*/