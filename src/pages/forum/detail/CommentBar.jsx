import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import PageContainer from "../../../components/PageContainer";
import { handleAddComment } from "../../../stores/actions/actionForum";

export default function CommentBar() {
  const [input, setInput] = useState({
    content: "",
  });
  const { slug } = useParams();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

//   console.log(input)
  const handleSubmit = async (event) => {
    try {
        event.preventDefault();
        await dispatch(handleAddComment(slug, input))
        setInput({
          content: "",
        });
      } catch (error) {
        console.log(error)
      }
  };
  return (
    <PageContainer className="flex flex-col gap-6 -mt-16">
      <form
        onSubmit={handleSubmit}
        className={`py-2 pl-4 pr-2 flex border rounded-lg border-primary `}
      >
        <input
          value={input.content}
          name="content"
          onChange={handleChange}
          type="text"
          className="flex-[1]  "
        />
        <button
          type="submit"
          className="py-2 px-5 rounded-md bg-primary text-white"
        >
          post
        </button>
      </form>
    </PageContainer>
  );
}
