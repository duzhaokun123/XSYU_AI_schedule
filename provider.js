// 别忘了加async
async function scheduleHtmlProvider() {
    // 此步为必须，用于加载这个工具，后续会增加更多方法
    await loadTool('AIScheduleTools')

    let courseTableForStd = (await (await fetch("http://jwxt.xsyu.edu.cn/eams/courseTableForStd.action")).text()).toString()
    courseTableForStd = courseTableForStd.substring(courseTableForStd.indexOf('if(jQuery("#courseTableType").val()=="std"){'), courseTableForStd.indexOf('bg.form.submit(form,"courseTableForStd!courseTable.action","contentDiv");'))
    let idsBegin = 'bg.form.addInput(form,"ids","'
    let idsEnd = '");'
    let studentIds = courseTableForStd.substring(courseTableForStd.indexOf(idsBegin) + idsBegin.length, courseTableForStd.indexOf(idsEnd))
    let classIds = courseTableForStd.substring(courseTableForStd.indexOf(idsBegin, courseTableForStd.indexOf(idsEnd)) + idsBegin.length, courseTableForStd.lastIndexOf(idsEnd))
    console.log(studentIds)
    console.log(classIds)

    let userSelect = await AIScheduleSelect({
        titleText: '课表类型',
        contentText: '学生 or 班级',
        selectList: [
            '学生课表',
            '班级课表',
        ],
    })
    let ids = userSelect == '学生课表' ? studentIds : classIds
    let setting_kind = userSelect == '学生课表' ? 'std' : 'class'
    console.log(ids)
    console.log(setting_kind)

    let calenderData = (await (await fetch("http://jwxt.xsyu.edu.cn/eams/dataQuery.action", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        "body": "dataType=semesterCalendar&empty=false",
        "method": "POST",
    })).text()).toString()
    calenderData = JSON.parse("{" + calenderData.substring(calenderData.indexOf('semesters'), calenderData.lastIndexOf('yearIndex') - 1).replace(/semesters|schoolYear|id|name|y[0-9]/g, function (x) { return '"' + x + '"' }) + "}").semesters
    console.log(calenderData)

    let calenders = []
    for (yn in calenderData) {
        calenderData[yn].forEach(function (aCalender) {
            calenders.push(aCalender.schoolYear + ' 学期' + aCalender.name + " (" + aCalender.id)
        })
    }
    calenders = calenders.reverse()
    userSelect = await AIScheduleSelect({
        titleText: '学年学期',
        contentText: '括号后的数对用户不重要',
        selectList: calenders,
    })
    let semester_id = userSelect.substring(userSelect.lastIndexOf('(') + 1)
    console.log(semester_id)

    let html = (await (await fetch("http://jwxt.xsyu.edu.cn/eams/courseTableForStd!courseTable.action", {
        "headers": {
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        "body": "ignoreHead=1&setting.kind=" + setting_kind + "&semester.id=" + semester_id + "&ids=" + ids,
        "method": "POST",
    })).text()).toString()
    let tasksBegin = 'function CourseTable in TaskActivity.js'
    let tasksEnd = 'fillTable('
    return html.substring(html.indexOf(tasksBegin) + tasksBegin.length + 1, html.lastIndexOf(tasksEnd))
}