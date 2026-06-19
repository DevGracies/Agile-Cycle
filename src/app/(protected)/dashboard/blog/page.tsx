"use client";

import React from "react";

import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import { Box, IconButton } from "@mui/material";
import { Plus } from "lucide-react";

import BlogKPIMetrics from "@/src/components/dashboard/blog/BlogKPIMetrics";

import {
  Pagination,
  StatusBadge,
  ToggleSwitch,
} from "@/src/components/dashboard/common/Dashboard";

import { useBlog } from "@/src/hooks/useBlog";

import {
  blogTabs,
  blogChartData,
  approvalMethods,
} from "@/src/mocks/index.mock";

import { BlogLog, BlogToggleState } from "@/src/types/blog";
import Loader from "@/src/components/ui/Loader";
import BlogDetailsModal from "@/src/components/dashboard/blog/BlogDetailsModal";
import { Trash } from "lucide-react";
import toast from "react-hot-toast";

const AdminBlogPage = () => {
  const {
    loading,
    enabled,
    metrics,
    toggleBlogSetting,

    selectedTab,
    setSelectedTab,

    currentPage,
    setCurrentPage,

    paginatedBlogLogs,
    filteredBlogs,

    totalPages,
    itemsPerPage,

    // fetchSelectedLogDetails,

    isFetchingLogDetails,

    openModal,
    setOpenModal,

    selectedLog,
    modalMode,
    openCreateModal,
    openEditModal,
  } = useBlog();

  if (loading) {
    return (
      <Box
        className={`rounded-3xl bg-[#F8F9F7] p-6 shadow-sm flex items-center justify-center`}
      >
        <Loader text="Loading Blog Settings..." />
      </Box>
    );
  }

  return (
    <section className='px-10 space-y-8'>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <BlogKPIMetrics
          title="Total Blogs"
          amount={
            metrics?.totalBlogs?.toLocaleString() ??
            "0"
          }
          percentage="22"
          sign="+"
          data={blogChartData.blogs}
        />

        <BlogKPIMetrics
          title="Total Comments"
          amount={
            metrics?.totalComments?.toLocaleString() ??
            "0"
          }
          percentage="22"
          sign="+"
          data={blogChartData.comments}
        />

        <BlogKPIMetrics
          title="Visitors"
          amount={
            metrics?.totalVisitors?.toLocaleString() ??
            "0"
          }
          percentage="18"
          sign="+"
          data={blogChartData.visitors}
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 bg-white ">
        {/* Left CTA */}
        <div className="max-sm:mx-4 bg-white rounded-xl flex items-center h-[72px] sm:h-20 overflow-hidden pr-8 w-full lg:w-fit">
          <div
            className="h-full flex items-center pl-5 sm:pl-8 pr-10 sm:pr-12 bg-gradient-to-r from-secondary to-primary text-white font-semibold text-sm sm:text-base"
            style={{
              clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)",
              minWidth: "280px",
            }}
          >
            Add a new blog
          </div>

          {/* Plus Icon */}
          <button
            onClick={openCreateModal}
            className="w-12 h-12 sm:w-16 sm:h-12 bg-primary rounded-tl-lg rounded-br-lg flex items-center justify-center text-white text-lg sm:text-xl font-bold shadow-md"
            style={{ transform: "skewX(-40deg)" }}
          >
            <span style={{ transform: "skewX(36deg)" }}><Plus size={18} /></span>
          </button>
        </div>

        {/* Right Text */}
        <p className="max-sm:px-4 text-gray-500 text-sm sm:text-base font-medium lg:pr-10">
          Create a new blog entry in the system
        </p>
      </div>


      <div className="bg-white rounded-[28px] border border-[#EEF1EC] shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden p-6 ">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-[26px] text-[#1F1F1F]">All Blogs</h2>

          <div className="overflow-x-auto">
            <div className="inline-flex min-w-full rounded-2xl bg-[#01430D14] p-1.5 sm:p-2 gap-1">
              {blogTabs.map((tab) => {
                const isActive =
                  selectedTab === tab.key;

                return (
                  <button
                    key={tab.key}
                    onClick={() =>
                      setSelectedTab(tab.key)
                    }
                    className={`relative whitespace-nowrap rounded-xl px-4 sm:px-5 lg:px-6 py-3 text-sm sm:text-[15px] font-medium transition-all duration-300
      ${isActive
                        ? "bg-white text-primary shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                        : "text-[#374151] hover:bg-white/60 hover:text-[#111827]"
                      }`}
                  >
                    <span className="flex items-center gap-2">
                      {tab.label}

                      <span
                        className={`rounded-full px-2 py-[2px] text-xs transition-all duration-300
          ${isActive
                            ? "bg-primary text-white"
                            : "bg-white text-primary"
                          }`}
                      >
                        {filteredBlogs.length}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* NOTIFICATION LOGS  */}
        {loading ? (
          <Loader text="Loading blogs..." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-separate border-spacing-y-0">
              <thead>
                <tr className="bg-[#ECEFEC]">
                  {[
                    "Blog Title",
                    "Category",
                    "No of comments",
                    "No of likes",
                    "Status",
                    "Actions",
                  ].map((header, idx) => (
                    <th
                      key={header}
                      className={`px-4 py-5 text-left text-primary
                                ${idx === 0 ? "rounded-l-[14px]" : ""}
                                ${idx === 5 ? "rounded-r-[14px]" : ""}
                              `}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {paginatedBlogLogs.length === 0 ? (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-10 text-center text-gray-500"
                    >
                      No blogs found
                    </td>
                  </tr>
                ) : (
                  paginatedBlogLogs.map(
                    (log: BlogLog) => (
                      <tr
                        key={log.id}
                        className="border-b border-[#DDE4DB]"
                      >
                        <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                          {log.title.length < 30 ? log.title : `${log.title.slice(0, 30)}...`}
                        </td>

                        <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                          {log.category}
                        </td>

                        <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                          {log.comments}
                        </td>

                        <td className="border-b border-[#DDE4DB] px-4 py-4 text-[#555]">
                          {log.likes}
                        </td>

                        <td className="border-b border-[#DDE4DB] px-4 py-4">
                          <StatusBadge
                            status={log.status}
                          />
                        </td>

                        <td className="border-b border-[#DDE4DB] px-4 py-4">
                          <IconButton
                            onClick={() => openEditModal(log.id)}
                          >
                            <OpenInNewRoundedIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => toast.success(`${log.title} deleted successfully`)}
                          >
                            <Trash />
                          </IconButton>
                        </td>
                      </tr>
                    ),
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={
              setCurrentPage
            }
          />

          <p className="text-[#555]">
            Showing{" "}
            {filteredBlogs.length === 0
              ? 0
              : (currentPage - 1) *
              itemsPerPage +
              1}
            -
            {Math.min(
              currentPage *
              itemsPerPage,
              filteredBlogs.length,
            )}{" "}
            of {filteredBlogs.length}
          </p>
        </div>
      </div>

      {isFetchingLogDetails ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 space-x-6">
          <Loader text="Loading blog details..." />
        </div>
      ) : (
        <BlogDetailsModal
          open={openModal}
          setOpen={setOpenModal}
          selectedLog={selectedLog}
          mode={modalMode}
        />
      )}


      <div className="bg-white rounded-[28px] border border-[#EEF1EC] p-6 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <h2 className="text-lg text-[#202020] font-semibold mb-8">Approval Method</h2>

        <div className="space-y-6 md:w-1/2 w-full">
          {approvalMethods.map((item) => (
            <div
              key={item.key}
              className="md:grid grid-cols-2 gap-2 flex justify-between items-center"
            >
              <p className="text-[#5B5B5B] font-medium">{item.label}</p>

              <ToggleSwitch
                enabled={enabled[item.key as keyof BlogToggleState]}
                onToggle={() =>
                  toggleBlogSetting(
                    item.key as keyof BlogToggleState,
                  )
                }
              />
            </div>
          ))}
        </div>
        <p className="text-primary mt-8"><span className="font-bold">Note: </span>only one can be activated at a time</p>
      </div>
    </section>
  )
}

export default AdminBlogPage