import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LiaWindowCloseSolid } from "react-icons/lia";
import Button from "./Button";
import axios from 'axios'
import { fetchBookmarkMentoring } from "../stores/actions/actionBookmark";
import { handleAddThread } from "../stores/actions/actionForum";

export default function AddThreadPopup({refetch, visible, onClose }) {
  const [input, setInput] = useState({
    title: "",
    content:""
  });
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

      dispatch(handleAddThread(input))
      refetch()

      setInput({
        title: "",
        content:""
      });

      toast.success("Successfully added a new thread", {
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
              Buat Thread 
            </h1>
            <div className="">
              <LiaWindowCloseSolid onClick={onClose} size="25px" className="cursor-pointer hover:bg-slate-100"/>
            </div>

          </div>

          <form onSubmit={handleSubmit} id="form-login" enctype="multipart/form-data">
            <div className="flex flex-col mt-2">
              <label className="text-primary text-md ">Title</label>
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
              <label className="text-primary text-md ">Konten</label>
              <textarea
                type="text"
                value={input.content}
                name="content"
                onChange={handleChange}
                placeholder="Input content..."
                className="w-[100%] rounded-lg h-[100px] pl-4 pt-4 mt-2 bg-white border border-primary text-slate-600 text-md"
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
