// 别忘了加async
async function scheduleHtmlProvider() {
    // 此步为必须，用于加载这个工具，后续会增加更多方法
    await loadTool('AIScheduleTools')
    var table = document.getElementById('manualArrangeCourseTable')
    return table.outerHTML
}
