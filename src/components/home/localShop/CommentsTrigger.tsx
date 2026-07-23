"use client";

import { useState } from "react";
import CommentsModal from "./CommentsModal";

type CommentsTriggerProps = {
  comments: number;
  blogTitle: string;
  icon: string;
  blogId: string;
};

export default function CommentsTrigger({
  comments,
  blogTitle,
  icon,
  blogId,
}: CommentsTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center"
      >
        <img
          src={icon}
          alt="Comments"
          className="w-5 h-5 mr-3"
        />

        <span>
          {comments} comments
        </span>
      </button>

      <CommentsModal
        isOpen={open}
        onClose={() => setOpen(false)}
        blogTitle={blogTitle}
        blogId={blogId}
      />
    </>
  );
}