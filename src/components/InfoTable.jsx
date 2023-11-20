import { useEffect, useState } from "react";
import Loading from "./Loading";

export default function InfoTable({ className, obj }) {
//   const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchDataFromProps();
        // setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchDataFromProps = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(obj);
      }, 1000);
    });
  };

  if (loading) {
    return <Loading className="flex-[1]" />; 
  }
  return (
    <div
      className={`border border-primary p-6 rounded-xl flex flex-col gap-4 ${className}`}
    >
      {Object.keys(obj).map((key) => (
        <div key={key} className="flex flex-col gap-4">
          {/* title */}
          <h3 className="text-primary font-extrabold">{key}</h3>
          {Array.isArray(obj[key])
            ? obj[key].map((item, i) => (
                <div key={i}>
                  {Object.keys(item).map((subKey) => (
                    <div
                      key={subKey}
                      className="grid grid-cols-1 md:grid-cols-3"
                    >
                      {/* Sub Title */}
                      <p className="text-primary font-bold col-span-1">
                        {subKey}:
                      </p>
                      <>
                        {Array.isArray(item[subKey]) ? (
                          //   if array
                          <ul className="list-disc pl-6 md:pl-4 text-slate-500 md:col-span-2">
                            {item[subKey].map((el) => (
                              <li key={el}>{el}</li>
                            ))}
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
  );
}
