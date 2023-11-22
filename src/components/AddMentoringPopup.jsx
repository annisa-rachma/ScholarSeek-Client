import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LiaWindowCloseSolid } from "react-icons/lia";
import Button from "./Button";
import axios from 'axios'

export default function AddMentoringPopup({ visible, onClose }) {
  const [input, setInput] = useState({
    title: "",
    description:"",
    schedule: "",
    hour: "",
    quota: "",
  });
  const [file, setFile] = useState()
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData()
      formData.append("image", file)
      formData.append("input", JSON.stringify(input))

      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/mentoring`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          access_token: localStorage.access_token,
        },
      });

      setInput({
        title: "",
      });
      toast.success("Successfully added a new mentoring session", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onClose();
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onClose();
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex mt-16 items-center justify-center">
        <div className="bg-white p-6 w-[500px] rounded-lg">
        <div className="flex flex-row justify-between">
            <h1 className=" text-center text-xl text-primary font-bold">
              Buat Sesi Mentoring
            </h1>
            <div className="">
              <LiaWindowCloseSolid onClick={onClose} size="25px" className="cursor-pointer hover:bg-slate-100"/>
            </div>

          </div>

          <form onSubmit={handleSubmit} id="form-login" enctype="multipart/form-data">
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Judul Acara</label>
              <input
                type="text"
                value={input.title}
                name="title"
                onChange={handleChange}
                placeholder="Input title..."
                className="w-[100%] rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Deskripsi</label>
              <input
                type="text"
                value={input.description}
                name="description"
                onChange={handleChange}
                placeholder="Input description..."
                className="w-[100%] rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Jadwal</label>
              <input
                type="date"
                value={input.schedule}
                name="schedule"
                onChange={handleChange}
                placeholder="Input schedule..."
                className="w-[100%] pr-4 rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Waktu</label>
              <input
                type="time"
                value={input.hour}
                name="hour"
                onChange={handleChange}
                placeholder="Input time..."
                className="w-[100%] pr-4 rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Quota</label>
              <input
                type="number"
                value={input.quota}
                name="quota"
                onChange={handleChange}
                placeholder="Input quota..."
                className="w-[100%] pr-4 rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Poster</label>
              <input
                // type="file"
                // value={input.image}
                // name="image"
                // onChange={handleChange} 
                // placeholder="Input image..."
                // className="pr-4 rounded-lg h-10 pl-4 mt-1 bg-white border border-primary text-slate-600 text-md"
                path={file} 
                onChange={e => setFile(e.target.files[0])} 
                type="file" 
                accept="image/*"
              />
            </div>

            <div className="w-[100%] grid grid-cols-2 gap-2">
              <Button
                onClick={onClose}
                type="button"
                className="h-10 mt-6  bg-white text-md text-primary border border-primary grid content-center hover:bg-primary hover:text-white"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="h-10 mt-6  bg-primary text-md text-white border border-primary grid content-center hover:bg-[#2646c5] hover:text-white"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
