import { useState } from "react"
import CheckBox from "../../../components/form/checkBox"
import SearchInput from "../../../components/form/SearchInput"
import Button from "../../../components/Button"
import { useNavigate } from "react-router"

export default function FilterMenu({ className }) {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        degrees: [],
        isFullyFunded: [],
        countries: "",
    })

    function handleToggle(e) {
        // if the checked input's value is not included in the form property array, then add!
        if (!form[e.target.name].includes(e.target.value)) {
            setForm((prev) => {
                return {
                    ...prev,
                    [e.target.name]: [...prev[e.target.name], e.target.value],
                }
            })
        } else {
            // if the checked input's value is included, then remove!
            setForm((prev) => {
                return {
                    ...prev,
                    [e.target.name]: prev[e.target.name].filter(
                        (el) => el !== e.target.value
                    ),
                }
            })
        }
    }

    function handleChange(e) {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }
    // console.log(form)

    function handleSubmit(e) {
        e.preventDefault()
        const degrees = form.degrees.join(',')
        const isFullyFunded = form.isFullyFunded.join(',')
        const query = `degrees=${degrees}&isFullyFunded=${isFullyFunded}&countries=${form.countries}`
        navigate(`/scholarships?${query}`)
    }

    const degrees = [
        { id: "degrees", name: "S1", value: "S1" },
        { id: "degrees", name: "S2", value: "S2" },
        { id: "degrees", name: "S3", value: "S3" },
        // { id: "degrees", name: "Diploma", value: "diploma" },
    ]

    const fundings = [
        { id: "isFullyFunded", name: "Fully Funded", value: 'true' },
        { id: "isFullyFunded", name: "Partially Funded", value: 'false' },
    ]

    return (
        <form className={`md:col-span-1 flex flex-col ${className}`} onSubmit={handleSubmit}>
            <h5 className="text-3xl text-primary font-bold py-3">Filter</h5>
            <section className="flex flex-col gap-4">
                <div className="border-t border-t-primary flex flex-col pt-4">
                    <p className="text-primary font-bold">Jenjang Beasiswa</p>
                    {degrees.map((degree) => (
                        <CheckBox
                            onChange={handleToggle}
                            id={degree.id}
                            key={degree.name}
                            value={degree.value}
                            label={degree.name}
                        />
                    ))}
                </div>
                <div className="border-t border-t-primary flex flex-col pt-4">
                    <p className="text-primary font-bold">Tipe Pendanaan</p>
                    {fundings.map((funding) => (
                        <CheckBox
                            onChange={handleToggle}
                            id={funding.id}
                            key={funding.name}
                            value={funding.value}
                            label={funding.name}
                        />
                    ))}
                </div>
                <div className="border-t border-t-primary flex flex-col gap-2 pt-4">
                    <p className="text-primary font-bold">Negara</p>
                    <SearchInput
                        id="countries"
                        onChange={handleChange}
                        placeholder="e.g Jepang"
                        secondary
                        reverse
                    />
                </div>
            </section>
            <Button type="submit" className="bg-primary text-white mt-4">
                Filter
            </Button>
        </form>
    )
}
