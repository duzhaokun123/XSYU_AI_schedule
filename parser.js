/**
 * 
 * @param {string} text 
 * @returns {Array<JSON>}
 */
function scheduleHtmlParser(text) {
    let result = []
    let classes = text.split('var teachers =')
    classes.shift()
    classes.forEach(function (item) {
        let lines = item.split('\n')
        let teacher = lines[0].substring(lines[0].indexOf(':"') + 2, lines[0].indexOf('",'))
        console.log(teacher)
        let activity = lines.find(function (a) {
            return a.includes('new TaskActivity')
        })
        console.log(activity)
        var name = activity.substring(activity.indexOf(')","') + 4, activity.lastIndexOf(')","'))
        name = name.substring(0, name.indexOf('('))
        console.log(name)
        let position = activity.substring(activity.lastIndexOf(')+"') + 4, activity.lastIndexOf('","'))
        console.log(position)
        let weeksString = activity.substring(activity.lastIndexOf('","') + 3, activity.lastIndexOf('",'))
        console.log(weeksString)
        let weeks = []
        let e = weeksString.lastIndexOf('1')
        for (var i = weeksString.indexOf('1'); i <= e; i++) {
            weeks.push(i)
        }
        console.log(weeks)
        let times = lines.filter(line => line.includes('index '))
        var day = 0
        let sections = []
        times.forEach(function (aTime) {
            day = parseInt(aTime.charAt(aTime.indexOf('=') + 1)) + 1
            sections.push(parseInt(aTime.charAt(aTime.lastIndexOf(';') - 1)) + 1)
        })
        console.log(day)
        console.log(sections)

        let aClass = {}
        aClass.name = name
        aClass.position = position
        aClass.teacher = teacher
        aClass.weeks = weeks
        aClass.day = day
        aClass.sections = sections

        console.log(aClass)
        result.push(aClass)
    })
    return result
}