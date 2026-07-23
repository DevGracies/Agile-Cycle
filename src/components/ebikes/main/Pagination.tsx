"use client";

import { Pagination } from "../../dashboard/common/Dashboard";



interface Props {

  currentPage: number;

  totalPages: number;

  totalItems: number;

  limit: number;

  onPageChange: (page: number) => void;

}



export default function PaginationFooter({

  currentPage,

  totalPages,

  totalItems,

  limit,

  onPageChange,

}: Props) {


  const start =
    totalItems === 0
      ?
      0
      :
      (
        (currentPage - 1) * limit
      ) + 1;



  const end =
    Math.min(
      currentPage * limit,
      totalItems
    );



  return (

    <div
      className="
flex
flex-col
md:flex-row
items-center
justify-between
gap-6
rounded-xl
bg-white
p-5
"
    >


      <div
        className="
flex
items-center
justify-center
flex-1
"
      >


        <Pagination

          setCurrentPage={
            onPageChange
          }

          totalPages={
            totalPages
          }

          currentPage={
            currentPage
          }

        />


      </div>




      <div
        className="
text-sm
text-gray-600
"
      >


        {
          totalItems > 0
            ?
            `${start}-${end} of ${totalItems}`
            :
            "No products"
        }


        {" | "}

        Page {currentPage} of {totalPages}



      </div>


    </div>

  );


}