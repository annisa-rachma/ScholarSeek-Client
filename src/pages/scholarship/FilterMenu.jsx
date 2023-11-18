import { useState } from "react"
import CheckBox from "../../components/form/checkBox"
import SearchInput from "./SearchInput"
import Button from "../../components/Button"

export default function FilterMenu({ className }) {
    const [form, setForm] = useState({
        degree: [],
        funding: [],
        country: "",
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
    console.log(form)

    const degrees = [
        { id: "degree", name: "S1", value: "s1" },
        { id: "degree", name: "S2", value: "s2" },
        { id: "degree", name: "S3", value: "s3" },
        { id: "degree", name: "Diploma", value: "diploma" },
    ]

    const fundings = [
        { id: "funding", name: "Fully Funded", value: "full" },
        { id: "funding", name: "Partially Funded", value: "partial" },
    ]

    return (
        <form className={`md:col-span-1 flex flex-col ${className}`}>
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
                        id="country"
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
