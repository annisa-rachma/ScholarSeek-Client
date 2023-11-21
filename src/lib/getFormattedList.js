export default function getFormattedList(arr) {
    const formatter = new Intl.ListFormat('id', { style: 'long', type: 'conjunction' });
    return formatter.format(arr)
}
