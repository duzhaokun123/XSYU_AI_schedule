// 别忘了加async
async function scheduleHtmlProvider() {
    // 此步为必须，用于加载这个工具，后续会增加更多方法
    await loadTool('AIScheduleTools')

    await AIScheduleAlert({
        titleText: '警告',
        contentText: '需要先自己抓包获取部分参数\n别担心 这并不难 只需 pc 端浏览器就可以完成',
        confirmText: '行吧',
    })


    let guideLink = "https://duzhaokun123.github.io/2022/09/27/XSYU_AI_schedule.html"
    const userSelect = await AIScheduleSelect({
        titleText: '准备',
        contentText: '你可以在 ' + guideLink + '学习如何使用 pc 浏览器抓取需要的参数\n也可以直接开始',
        selectList: [
            '先学习',
            '输入参数',
        ],
    })

    console.log(userSelect)
    if(userSelect == '先学习') {
        window.open(guideLink)
    }

    const body = await AISchedulePrompt({
        titleText: '输入参数',
        tipText: 'ignoreHead=x&setting.kind=xxx&semester.id=xxx&ids=xxx',
        defaultText: '',
        validator: value => {
            if (value.indexOf('ignoreHead') == -1) return '缺少 ignoreHead'
            if (value.indexOf('setting.kind') == -1) return '缺少 setting.kind'
            if (value.indexOf('semester.id') == -1) return '缺少 semester.id'
            if (value.indexOf('ids') == -1) return '缺少 ids'
            return false
        }
    })

    let r = await fetch("http://jwxt.xsyu.edu.cn/eams/courseTableForStd!courseTable.action", {
        "headers": {
            "accept": "*/*",
            "accept-language": "zh-CN,zh-TW;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6,ja-JP;q=0.5,ja;q=0.4",
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
            "x-requested-with": "XMLHttpRequest"
        },
        "referrer": "http://jwxt.xsyu.edu.cn/eams/courseTableForStd!courseTable.action",
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": body,
        "method": "POST",
        "mode": "cors",
        "credentials": "include"
    })
    // ignoreHead=1&setting.kind=std&project.id=1&semester.id=182&ids=313183
    let html = (await r.text()).toString()
    let begin = 'function CourseTable in TaskActivity.js'
    let end = 'fillTable('
    return html.substring(html.indexOf(begin) + begin.length + 1, html.lastIndexOf(end))
}
