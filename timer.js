async function scheduleTimer({
    providerRes,
    parserRes
} = {}) {
    await loadTool('AIScheduleTools')

    const userInput = await AISchedulePrompt({
        titleText: '开学时间',
        tipText: 'YYYY MM DD',
        defaultText: '',
        validator: value => {
            console.log(value)
            let date = new Date(value)
            if (date == 'Invalid Date') {
                return '格式错误'
            }
            return false
        }
    })

    return { //一些固定值 但愿不会变
        startSemester: new Date(userInput).getTime(),
        totalWeek: 20,
        forenoon: 4,
        afternoon: 4,
        night: 2,
        sections: [
            {
                section: 1,
                startTime: '08:20',
                endTime: '09:05',
            },
            {
                section: 2,
                startTime: '09:15',
                endTime: '10:00',
            },
            {
                section: 3,
                startTime: '10:20',
                endTime: '11:05',
            },
            {
                section: 4,
                startTime: '11:15',
                endTime: '12:00',
            },
            {
                section: 5,
                startTime: '14:00',
                endTime: '14:45',
            },
            {
                section: 6,
                startTime: '14:55',
                endTime: '15:40',
            },
            {
                section: 7,
                startTime: '16:00',
                endTime: '16:45',
            },
            {
                section: 8,
                startTime: '16:55',
                endTime: '17:40',
            },
            {
                section: 9,
                startTime: '19:00',
                endTime: '19:45',
            },
            {
                section: 10,
                startTime: '19:55',
                endTime: '20:40',
            },
        ],
    }
}