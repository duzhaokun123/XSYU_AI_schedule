// 别忘了加async
async function scheduleHtmlProvider() {
    // 此步为必须，用于加载这个工具，后续会增加更多方法
    await loadTool('AIScheduleTools')

    await AIScheduleAlert({
        titleText: '警告',
        contentText: '累了 自己抓包搞数据吧',
        confirmText: '行吧',
    })


    let guideLink = "https://duzhaokun123.github.io/2023/02/18/new_XSYU_AI_schedule.html"
    const userSelect = await AIScheduleSelect({
        titleText: '准备',
        contentText: '你可以在 ' + guideLink + '学习如何使用 pc 浏览器抓取抓包获取需要的数据\n也可以直接开始',
        selectList: [
            '先学习',
            '输数据',
        ],
    })

    console.log(userSelect)
    if(userSelect == '先学习') {
        window.open(guideLink)
    }

    const source = await AISchedulePrompt({
        titleText: '输数据',
        tipText: '提供数据的地址\n可以是本地服务器',
        defaultText: '',
        validator: _value => {
            return false
        }
    })

    let html = (await ((await fetch(source)).text())).toString()

    let begin = 'function CourseTable in TaskActivity.js'
    let end = 'fillTable('
    return html.substring(html.indexOf(begin) + begin.length + 1, html.lastIndexOf(end))
}
