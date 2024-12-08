export const dateFormatting = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU')
}
