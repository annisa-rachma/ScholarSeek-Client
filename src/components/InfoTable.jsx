const obj = {
    About: [
        {
            Description:
                "Beasiswa Integrated Science Program, Undergraduate Program - Hokkaido University untuk jenjang S1 dengan tipe partial di Jepang",
        },
        {
            University: [
                "Université de Bordeaux",
                "GEORG-AUGUST-UNIVERSITAT GOTTINGEN STIFTUNG OFFENTLICHEN RECHTS",
                "UNIVERSIDADE DE COIMBRA",
                "UNIVERSITE LAVAL",
                "HUMBOLDT-UNIVERSITAET ZU BERLIN",
            ],
        },
        {
            Major: ["Health", "Medical Science"],
        },
        {
            Benefit: [
                "Monthly allowance: 1,000€/month",
                "Contribution to travel: 2,000€/year scholarship holder resident in a Partner Country whose location is situated at less than 4,000 km from Bordeaux, France OR 3,000€/year scholarship holder resident in a Partner Country whose location is situated at more than 4,000 km from Bordeaux, France",
                "Contribution to installation: 1,000€/2-years",
                "In addition, the Scholarship includes a contribution to the EMJMD participation costs, i.e. 4,500€/semester corresponding to the mandatory contribution to the NEURASMUS tuition fees and insurance coverage",
            ],
        },
    ],
    Requirement: [
        { Age: "No age requirement" },
        { GPA: "No GPA requirement" },
        {
            "English Test": [
                "IELTS (6.5)",
                "TOEFL iBT (93)",
                "TOEFL PBT (580)",
                "TOEFL CBT (237)",
            ],
        },
        {
            Documents: [
                "Recent Photo (portrait)",
                "GRE",
                "Passport",
                "Motivation Letter",
                "Curriculum Vitae",
                "Degree Certificate",
                "Recommendation Letters",
                "Proof of English Proficiency",
                "Academic Transcript",
                "Financial certification",
            ],
        },
        {
            "Other Language Test": "Not required",
        },
        {
            "Standarized Test": "No age requirement",
        },
    ],
}

export default function InfoTable({className}) {
    return (
        <div className={`border border-primary p-6 rounded-xl flex flex-col gap-4 ${className}`}>
            {Object.keys(obj).map((key) => (
                <div key={key} className="flex flex-col gap-4">
                    {/* title */}
                    <h3 className="text-primary font-extrabold">{key}</h3>
                    {Array.isArray(obj[key])
                        ? obj[key].map((item, i) => (
                              <div key={i}>
                                  {Object.keys(item).map((subKey) => (
                                      <div key={subKey} className="grid grid-cols-1 md:grid-cols-3">
                                          {/* Sub Title */}
                                          <p className="text-primary font-bold col-span-1">
                                              {subKey}:
                                          </p>
                                          <>
                                              {Array.isArray(item[subKey]) ? (
                                                  //   if array
                                                  <ul className="list-disc pl-6 md:pl-4 text-slate-500 md:col-span-2">
                                                      {item[subKey].map(
                                                          (el) => (
                                                              <li key={el}>
                                                                  {el}
                                                              </li>
                                                          )
                                                      )}
                                                  </ul>
                                              ) : (
                                                  //   if not array
                                                  <p className="text-slate-500 md:col-span-2">
                                                      {item[subKey]}
                                                  </p>
                                              )}
                                          </>
                                      </div>
                                  ))}
                              </div>
                          ))
                        : Array.isArray(obj[key])
                        ? obj[key].join(", ")
                        : obj[key]}
                </div>
            ))}
        </div>
    )
}
