const isSelected = (day, value) => {
    return value.isSame(day, "day");
}

const beforeToday = (day) => {
    return day.isBefore(new Date(), "day");
}

const isToday = (day) => {
    return day.isSame(new Date(), "day");
}

export default function dayStyles(day, value) {
    if (isSelected(day, value)) return "selected";
    if (beforeToday(day)) return "before";
    if (isToday(day)) return "today";
    return "";
}
