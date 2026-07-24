'use client';

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import acd from "@/public/home/unlike.png";
import acu from "@/public/home/Like.png";
import message from "@/public/home/club/message-2.png";

interface Reply {
  _id: string;
  name: string;
  time: string;
  likes: number;
  content: string;
}

interface BlogCommentCardProps {
  name: string;
  time: string;
  content: string;
  likes: number;
  replies?: Reply[];
}

export default function CommentCard({
  name,
  time,
  content,
  likes,
  replies = [],
}: BlogCommentCardProps) {
  const [showReplies, setShowReplies] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [activeReplyInput, setActiveReplyInput] = useState<string | null>(null);

  return (
    <section className="border-b border-gray-200 pb-4">
      <div className="relative mt-3 ">
      {/* Thread Line */}
      {showReplies && replies.length > 0 && (
        <div className="absolute left-[6px] top-[22px] bottom-[30px] w-[1px] bg-[#519A09]" />
      )}

      {/* Main Comment */}
      <div className="flex gap-4 ">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="w-[14px] flex justify-center">
              <div className="text-[#519A09]">
            {showReplies ? (
              <ChevronDown size={14} />
            ) : (
              <ChevronRight size={14} />
            )}
          </div>
            </div>

            <p className="text-sm text-[#519A09]">
              {name}
            </p>

            <span className="text-sm text-[#519A09]">
              • {time}
            </span>
          </div>

          <p className="mt-3 pl-7 text-sm leading-7 text-[#525252]">
            {content}
          </p>

          <div className="mt-4 flex items-center gap-3 pl-7 text-[#519A09]">
            <div className="flex gap-2 bg-[#EDF2EE] px-2 py-2">
              <button className="flex items-center gap-2">
              <img src={acu.src} alt="down" className="w-5 h-5" />
              <span>{likes}</span>
            </button>

            <div className=" w-[2px] bg-[#519A09] gap-3 ml-1" />
             <button className="flex items-center gap-3 pl-1">
              <img src={acd.src} alt="down" className="w-3 h-4" />
            </button>
            </div>

            <div className="bg-[#EDF2EE] px-2 py-2">
            <button
              onClick={() =>
                setShowComment((prev) => !prev)
              }
              className="flex items-center gap-2"
            >
              <img
                src={message.src}
                alt="comment"
                className="w-5 h-5"
              />
            </button>
          </div>
          
          </div>
          
        </div>
      </div>

      {showComment && (
        <div className="mt-4 pl-7">
          <input
            type="text"
            placeholder="Drop your comment"
            className="w-full h-[44px] border border-[#DCE7D4] rounded-[4px] px-4 outline-none"
          />

          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() =>
                setShowComment(false)
              }
              className="px-6 h-[40px] border border-[#519A09] rounded-[4px] text-[#519A09]"
            >
              Cancel
            </button>

            <button className="px-6 h-[40px] bg-[#519A09] text-white rounded-[4px]">
              Comment
            </button>
          </div>
        </div>
      )}

      {!showReplies && replies.length > 0 && (
        <div className="ml-7 mt-4">
          <button
            onClick={() => setShowReplies(true)}
            className="flex items-center gap-2 text-md font-medium text-[#519A09]"
          >
            
            Show {replies.length} replies
          </button>
        </div>
      )}

      {/* Replies */}
      {showReplies && replies.length > 0 && (
        <div className="mt-6 ml-8 space-y-8">
          {replies.map((reply) => (
            <div key={reply._id} className="relative">
              {/* Curved Connector */}
              <div className="absolute -left-[26px] -top-2 flex items-end ">
                <div className="h-5 w-5 border-b-2 border-l-2 border-[#519A09] rounded-bl-[16px]" />

                <ChevronRight size={12} className="-ml-[2px] mb-[-5px] text-[#519A09]" />
                </div>
              

              <div className="ml-3 ">
                <div className="flex items-center gap-2">
                  <h5 className="font-medium text-sm text-[#519A09]">
                    {reply.name}
                  </h5>

                  <span className="text-sm text-[#519A09]">
                    •&nbsp;&nbsp;{reply.time}
                  </span>
                </div>

                <p className="mt-3 text-sm leading-7 text-[#525252]">
                  {reply.content}
                </p>

               <div className="mt-4 flex items-center gap-3  text-[#519A09]">
            <div className="flex gap-2 bg-[#EDF2EE] px-2 py-2">
              <button className="flex items-center gap-2">
              <img src={acu.src} alt="down" className="w-5 h-5" />
              <span>{reply.likes}</span>
            </button>
            <div className=" w-[2px] bg-[#519A09] gap-3 ml-1" />
             <button className="flex items-center gap-3 pl-1">
              <img src={acd.src} alt="down" className="w-3 h-3" />
            
            </button>
            </div>

            <div className="bg-[#EDF2EE] px-2 py-2">
           <button
              onClick={() =>
                setActiveReplyInput(
                  activeReplyInput === reply._id
                    ? null
                    : reply._id
                )
              }
              className="flex items-center gap-2"
            >
              <img
                src={message.src}
                alt="comment"
                className="w-5 h-5"
              />
            </button>
          </div>

          </div>
              </div>

              {activeReplyInput === reply._id && (
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Drop your comment"
                    className="w-full h-[44px] border border-[#DCE7D4] rounded-[4px] px-4 outline-none"
                  />

                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() =>
                        setActiveReplyInput(null)
                      }
                      className="px-6 h-[40px] border border-[#519A09] rounded-[4px] text-[#519A09]"
                    >
                      Cancel
                    </button>

                    <button className="px-6 h-[40px] bg-[#519A09] text-white rounded-[4px]">
                      Comment
                    </button>
                  </div>
                </div>
              )}
              
            </div>
          ))}

          {/* Hide Replies */}
          {/* Hide Replies */}
          <div className="relative ">
            <div className="absolute -left-[26px] -top-2 flex items-end">
              <div className="h-5 w-5 border-b-2 border-l-2 border-[#519A09] rounded-bl-[16px]" />

              <ChevronRight
                size={12}
                className="-ml-[2px] mb-[-5px] text-[#519A09]"
              />
            </div>

            <button
              onClick={() => setShowReplies(false)}
              className="ml-3 font-medium text-[#519A09]"
            >
              Hide replies —
            </button>
          </div>
        </div>
      )}
    </div>

    </section>
    
  );
}