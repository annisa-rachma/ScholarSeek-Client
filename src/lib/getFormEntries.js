export default function getFormEntries(e) {
    const myFormData = new FormData(e.target)
    const formDataObj = {}
    myFormData.forEach((value, key) => (formDataObj[key] = value))
    return formDataObj
}
