const users =[{"id":1,"first_name":"Dolf","last_name":"Pimbley","email":"dpimbley0@time.com","ip_address":"221.159.248.243"},
{"id":2,"first_name":"Marcelia","last_name":"Bowstead","email":"mbowstead1@biblegateway.com","ip_address":"196.254.9.35"},
{"id":3,"first_name":"Tades","last_name":"Stringfellow","email":"tstringfellow2@chron.com","ip_address":"145.23.133.50"},
{"id":4,"first_name":"Elene","last_name":"McFarland","email":"emcfarland3@about.me","ip_address":"151.41.82.166"},
{"id":5,"first_name":"Chester","last_name":"Horney","email":"chorney4@fc2.com","ip_address":"225.242.198.120"},
{"id":6,"first_name":"Berkly","last_name":"Boykett","email":"bboykett5@nytimes.com","ip_address":"153.102.188.74"},
{"id":7,"first_name":"Tatiana","last_name":"Osgerby","email":"tosgerby6@reference.com","ip_address":"106.63.50.97"},
{"id":8,"first_name":"Towney","last_name":"Rioch","email":"trioch7@sourceforge.net","ip_address":"128.24.139.49"},
{"id":9,"first_name":"Florenza","last_name":"Idel","email":"fidel8@cmu.edu","ip_address":"190.171.49.143"},
{"id":10,"first_name":"Felipe","last_name":"Lamb","email":"flamb9@netlog.com","ip_address":"126.180.132.27"}]

// using map method
const usersName = users.map((user)=>user.first_name + user.last_name)
console.log(usersName)

//using for each
const NewUsers = [];
users.forEach((user)=>{
    NewUsers.push(user.first_name)
})
console.log("user", NewUsers);