const moment = require('moment')
const m = moment()
console.log(m.format())
console.log(m.subtract(2,"days"))
console.log(m.format("DDTHH:mm:ss:SSS"))
console.log(m.format("DD:MMMM:Y"))
console.log( m.add(10,"M").format("GG[W]W"))

//object
console.log(moment({D:10,M:3,y:2050,h:5,m:40,s:55}))

console.log(moment.unix(1318781876406).utc())
console.log(moment([2023,4,6,4,45,45,345]).format())

console.log(moment([2010]))
console.log(moment().milliseconds())
console.log(moment().minute())
console.log(moment().minutes())
console.log(moment().second())
console.log(moment().weekday())
console.log(moment().isoWeekday(1).format( ))
console.log(moment().dayOfYear())
console.log(moment().week())
console.log(moment().month())
console.log(moment().year())
console.log(moment().isoWeekYear())
console.log(moment().set("year",2013))

console.log(moment().format("NNNN"))
console.log(moment().format("HH:mm:ss A"))
console.log(moment().format("llll"))
console.log(moment().format("LTS"))
console.log(moment([2017, 0, 29]).fromNow())
var a = moment([2007, 0, 29])
var b =moment([2007, 0, 28])
console.log(a.to(b))
console.log(a.diff(b))


console.log(moment([2017,0,28]).toNow())

// console.log(moment("10-10-2001").isBetween("09-10-2001","11-10-2001"))
console.log(moment('2010-10-20').isBetween('2010-01-01', '2012-01-01', 'year'))
console.log(moment([2010]).isLeapYear())
console.log(moment.locales(moment().month()))
console.log(moment().month())


