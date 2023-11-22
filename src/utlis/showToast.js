import { toast } from "react-toastify"

export default function showToast(type, message) {
    const options = {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    switch (type) {
        case "success":
            toast.success(message, options)
            break
        case "info":
            toast.info(message, options)
            break
        case "error":
            toast.error(message, options)
            break
        case "warning":
            toast.warning(message, options)
            break
    }
}
