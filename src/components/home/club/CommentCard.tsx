'use client';

import { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import acd from "@/public/home/club/Arrow_Circle_Down.png";
import acu from "@/public/home/club/Arrow_Circle_Up (1).png";
import message from "@/public/home/club/message-2.png";

interface Reply {
  id: number;
  author: string;
  time: string;
  content: string;
}

interface CommentCardProps {
  author: string;
  time: string;
  content: string;
  replies: Reply[];
}

export default function CommentCard({
  author,
  time,
  content,
  replies,
}: CommentCardProps) {
  const [showReplies, setShowReplies] = useState(false);

  return (
    <section className="border-b border-gray-200 pb-4">
      <div className="relative mt-8 ">
      {/* Thread Line */}
      {showReplies && replies.length > 0 && (
        <div className="absolute left-[6px] top-[22px] bottom-[30px] w-[1px] bg-[#519A09]" />
      )}

      {/* Main Comment */}
      <div className="flex gap-4 ">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            {replies.length > 0 && (
              <div className="text-[#519A09]">
                {showReplies ? (
                    <ChevronDown size={14} />
                ) : (
                    <ChevronRight size={14} />
                )}
                </div>
            )}

            <h4 className="font-semibold text-[#519A09]">
              {author}
            </h4>

            <span className="text-sm text-[#519A09]">
              •&nbsp;&nbsp;{time}
            </span>
          </div>

          <p className="mt-3 pl-7 text-[15px] leading-7 text-[#525252]">
            {content}
          </p>

          <div className="mt-4 flex items-center gap-3 pl-7 text-[#519A09]">
            <div className="flex gap-2 bg-[#EDF2EE] px-2 py-2">
              <button className="flex items-center gap-2">
              <img src={acu.src} alt="down" className="w-5 h-5" />
              <span>22</span>
            </button>
            <div className=" w-[2px] bg-[#519A09] gap-3 ml-1" />
             <button className="flex items-center gap-3 pl-1">
              <img src={acd.src} alt="down" className="w-5 h-5" />
            
            </button>
            </div>
            <div className="bg-[#EDF2EE] px-2 py-2">
            <button
           
            className="flex items-center gap-2">
              <img src={message.src} alt="down" className="w-5 h-5" />
            </button>
          </div>
          </div>
          
        </div>
      </div>

      {!showReplies && replies.length > 0 && (
  <div className="ml-7 mt-4">
    <button
      onClick={() => setShowReplies(true)}
      className="flex items-center gap-2 font-medium text-[#519A09]"
    >
      
      Show {replies.length} replies
    </button>
  </div>
)}

      {/* Replies */}
      {showReplies && replies.length > 0 && (
        <div className="mt-6 ml-8 space-y-8">
          {replies.map((reply) => (
            <div key={reply.id} className="relative">
              {/* Curved Connector */}
              <div className="absolute -left-[26px] -top-2 flex items-end ">
                <div className="h-5 w-5 border-b-2 border-l-2 border-[#519A09] rounded-bl-[16px]" />

                <ChevronRight size={12} className="-ml-[2px] mb-[-5px] text-[#519A09]" />
                </div>
              

              <div className="ml-3 ">
                <div className="flex items-center gap space-x-2">
                  <h5 className="font-medium text-[#519A09]">
                    {reply.author}
                  </h5>

                  <span className="text-sm text-[#519A09]">
                    •&nbsp;&nbsp;{reply.time}
                  </span>
                </div>

                <p className="mt-3 text-[15px] leading-7 text-[#525252]">
                  {reply.content}
                </p>

               <div className="mt-4 flex items-center gap-3  text-[#519A09]">
            <div className="flex gap-2 bg-[#EDF2EE] px-2 py-2">
              <button className="flex items-center gap-2">
              <img src={acu.src} alt="down" className="w-5 h-5" />
              <span>22</span>
            </button>
            <div className=" w-[2px] bg-[#519A09] gap-3 ml-1" />
             <button className="flex items-center gap-3 pl-1">
              <img src={acd.src} alt="down" className="w-5 h-5" />
            
            </button>
            </div>
            <div className="bg-[#EDF2EE] px-2 py-2">
            <button className="flex items-center gap-2">
              <img src={message.src} alt="down" className="w-5 h-5" />
            </button>
          </div>
          </div>
              </div>
              
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