import { X } from "lucide-react";

import BlogCommentCard from "./BlogCommentCard";
import { useComments } from "@/src/hooks/useComments";

export interface GetCommentsResponse {
  success: boolean;
  comments: Comment[];
}

type CommentsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  blogTitle: string;
  blogId: string;
};

export default function CommentsModal({
  isOpen,
  onClose,
  blogTitle,
  blogId,
}: CommentsModalProps) {
  const { data, isPending, isError } = useComments(blogId, isOpen);

  if (!isOpen) return null;
<<<<<<< HEAD

  const blog = insights.find(
    (item) => item._id === blogId
  );

=======
>>>>>>> 9cab791f4b6b1f777870548cf53ecbf502be2231

  return (
    <div className="fixed inset-0 z-[999] bg-black/50 flex items-center justify-center p-4">
      <div className="w-full max-w-[760px] bg-white rounded-[8px] overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#DCE7D4]">
          <h2 className="text-[18px] font-medium">
            Comments
          </h2>

          <button onClick={onClose}>
            <X className="w-4 h-4 text-[#666]" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">

          {/* Blog Title */}
          <div className="mb-6">
            <p className="text-[14px] text-[#999] mb-2">
              Blog Title
            </p>

            <div className="h-[44px] border border-[#DCE7D4] rounded-[4px] px-4 flex items-center text-[14px]">
              {blogTitle}
            </div>
          </div>

          {/* Comments Area */}
<<<<<<< HEAD
          {/* Comments Area */}
          <div className="h-[300px] overflow-y-auto border-b border-[#DCE7D4] pr-2">



            {blog?.commentsData?.map((comment) => (
              <BlogCommentCard
                key={comment._id}
                {...comment}
              />
            ))}

          </div>

          {/* Input */}
          <div className="mt-6">
            <input type="text"
              placeholder="Drop your comment"
              className="w-full h-[44px] border border-[#DCE7D4] rounded-[4px] px-4 outline-none" />
          </div>
          {/* Actions */}
          <div className="flex justify-end gap-4 mt-6">
            <button onClick={onClose} className="px-6 h-[40px] border border-[#519A09] rounded-[4px] text-[#519A09]" >
              Cancel
            </button>
            <button className="px-6 h-[40px] bg-[#519A09] text-white rounded-[4px]" >
              Comment
            </button>
          </div>

=======
          <div className="h-[300px] overflow-y-auto border-b border-[#DCE7D4] pr-2">

           {isPending ? (
  <p className="py-8 text-center text-sm text-[#666]">
    Loading comments...
  </p>
) : isError ? (
  <p className="py-8 text-center text-sm text-red-500">
    Failed to load comments.
  </p>
) : data?.comments.length ? (
  data.comments.map((comment) => (
    <BlogCommentCard
      key={comment._id}
      {...comment}
    />
  ))
) : (
  <p className="py-8 text-center text-sm text-[#666]">
    No comments yet.
  </p>
)}
          </div>

          {/* Input */}
          <div className="mt-6">
            <input
              type="text"
              placeholder="Drop your comment"
              className="w-full h-[44px] border border-[#DCE7D4] rounded-[4px] px-4 outline-none"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              onClick={onClose}
              className="px-6 h-[40px] border border-[#519A09] rounded-[4px] text-[#519A09]"
            >
              Cancel
            </button>
>>>>>>> 9cab791f4b6b1f777870548cf53ecbf502be2231

            <button className="px-6 h-[40px] bg-[#519A09] text-white rounded-[4px]">
              Comment
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}