export default function buildCalendar(value) {
    const startDay = value.clone().startOf("month").startOf("week"); // 추출하려는 달의 시작일
    const endDay = value.clone().endOf("month").endOf("week"); // 추출하려는 달의 마지막 일
    const day = startDay.clone().subtract(1, "day");
    const calendar = [];
    while (day.isBefore(endDay, "day")) {
        calendar.push(
            Array(7).fill(0).map(() => day.add(1, "day").clone())
        )
    }
    return calendar;
}
