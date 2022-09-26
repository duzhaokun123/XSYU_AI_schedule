function scheduleHtmlParser(html) {
    let result = []
    $(html)
    var classIndex = 0
    $('tbody tr').each(function (i, elem) {
        classIndex++
        // console.log("classIndex: " + classIndex)
        var day = 0
        elem.children.forEach(function (item2, i2) {
            if (i2 == 0 || i2 == 1) return
            if (item2.type == "text") return //排除奇怪的 text 项
            day++
            if (item2.children.length == 2) {
                // console.log("day: " + day)
                let aClass = { sections: [], weeks: [] }
                // 课表格式说明：教师姓名 课程名称(序号) (第n周-第m周,教室)
                let a = item2.children[0].data // 形势与政策（1）(A290001) 总学时 8 (理论学时:8 ) 
                var b = item2.children[1].children[0].data // 3-6 ,张晰 鄠邑校区B104
                // console.log(a)
                // console.log(b)
                // console.log("解析:")

                let length = item2.attribs.rowspan // 课长
                // console.log(length)

                let className = a.substring(0, a.indexOf("(")) // 课名
                // console.log(className)

                let bi1 = b.indexOf(" ,")
                let weekIndex = b.substring(0, bi1) // 持续周
                // console.log(weekIndex)

                b = b.substring(bi1 + 2)
                let bi2 = b.indexOf(" ")
                let teacher = b.substring(0, bi2) // 老师
                // console.log(teacher)

                b = b.substring(bi2 + 1) // 教室
                // console.log(b)

                aClass.name = className
                aClass.position = b
                aClass.teacher = teacher
                for (var i = 0; i < length;i++) {
                    aClass.sections.push(classIndex + i)
                }
                let begin = parseInt(weekIndex.substring(0, weekIndex.indexOf("-")))
                let end = weekIndex.substring(weekIndex.indexOf("-") + 1)
                for (var i = begin; i <= end; i++) {
                    aClass.weeks.push(i)
                }
                aClass.day = day
                // console.log(aClass)
                result.push(aClass)
            }
        })
    });
    // console.log(result)
    return result
}