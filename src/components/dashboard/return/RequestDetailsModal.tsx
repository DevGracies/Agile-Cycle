"use client";

import React from "react";
import {
	Dialog,
	DialogContent,
	IconButton,
	Typography,
} from "@mui/material";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

export type ReturnRefundStatus =
	| "Pending"
	| "Approved"
	| "Refunded"
	| "Declined";

interface ProductItem {
	image: string;
	productName: string;
	qty: number;
	date: string;
	price: number;
	total: number;
}

interface RequestDetailsModalProps {
	open: boolean;
	onClose: () => void;
	requestData?: {
		requestId: string;
		orderId: string;
		product: string;
		reason: string;
		totalSpend: number;
		status: ReturnRefundStatus;
	} | null;
}

const product: ProductItem = {
	image:
		"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
	productName: "Agile Pro Rider",
	qty: 2,
	date: "Apr 5, 2026",
	price: 1200000,
	total: 2400000,
};

const evidenceImages = [
	"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1200&auto=format&fit=crop",
];

const formatCurrency = (
	amount: number
) => {
	return `₦${amount.toLocaleString()}`;
};

const RequestDetailsModal: React.FC<
	RequestDetailsModalProps
> = ({
	open,
	onClose,
	requestData,
}) => {
		return (
			<Dialog
				open={open}
				onClose={onClose}
				maxWidth="md"
				fullWidth
				slotProps={{
					paper: {
						sx: {
							borderRadius: "24px",
							padding: "12px",
							background: "#F8F9F7",
						},
					},
				}}
			>
				<DialogContent className="p-4 md:p-8">
					{/* Header */}
					<div className="mb-10 flex items-start justify-between leading-[150%]">
						<Typography className="!text-[18px] !font-medium !text-[#000000]">
							View Request Details
						</Typography>

						<IconButton onClick={onClose} className=" h-6 w-6 rounded-full !border-1 !border-[#05422C26] ">
							<CloseRoundedIcon className="text-[#05422C] p-1" />
						</IconButton>
					</div>

					{/* Top Section */}
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-stretch">
						{/* Request Summary */}
						<div className="h-full flex flex-col">
							<Typography className="!mb-8 !text-[16px] !font-medium !text-[#01430D]">
								Request Summary
							</Typography>

							<div className="flex flex-col gap-6">
								{[
									{
										label: "Request ID",
										value:
											requestData?.requestId ??
											"-",
									},
									{
										label: "Order ID",
										value:
											requestData?.orderId ??
											"-",
									},
									{
										label: "Customer Name",
										value: "John Okon",
									},
									{
										label: "Request Date",
										value: "12 Apr 2026",
									},
									{
										label: "Refund Status",
										value:
											requestData?.status ??
											"-",
									},
									{
										label:
											"Reason For Return",
										value:
											requestData?.reason ??
											"-",
									},
								].map((item) => (
									<div
										key={item.label}
										className="flex flex-wrap items-center gap-2"
									>
										<span className="text-[15px] text-[#519A09]">
											{item.label}:
										</span>

										<span className="text-[15px] text-[#585858] leading-5.5">
											{item.value}
										</span>
									</div>
								))}
							</div>
						</div>

						{/* Evidence */}
						<div className="h-full flex flex-col">
							<Typography className="!mb-6 !text-[16px] !font-medium !text-[#01430D]">
								Evidence Provided
							</Typography>

							{/* 1 Image */}
							{evidenceImages.length ===
								1 && (
									<div className="grid grid-cols-1">
										<img
											src={evidenceImages[0]}
											alt="evidence"
											className="w-full max-h-[260px] rounded-lg object-cover"
										/>
									</div>
								)}

							{/* 2 Images */}
							{evidenceImages.length ===
								2 && (
									<div className="grid grid-cols-2 gap-4">
										{evidenceImages.map(
											(image, index) => (
												<img
													key={index}
													src={image}
													alt="evidence"
													className="w-full max-h-[260px] rounded-lg object-cover"
												/>
											)
										)}
									</div>
								)}

							{/* 3 Images */}
							{evidenceImages.length ===
								3 && (
									<div className="grid grid-cols-2 gap-4">
										{/* Left */}
										<div className="flex flex-col gap-4">
											{evidenceImages
												.slice(0, 2)
												.map(
													(
														image,
														index
													) => (
														<img
															key={
																index
															}
															src={
																image
															}
															alt="evidence"
															className="w-full max-h-[120px] rounded-lg object-cover"
														/>
													)
												)}
										</div>

										{/* Right */}
										<img
											src={evidenceImages[2]}
											alt="evidence"
											className="h-full min-h-[256px] w-full rounded-lg object-cover"
										/>
									</div>
								)}

							{/* 4 Images */}
							{evidenceImages.length ===
								4 && (
									<div className="grid grid-cols-2 gap-4">
										{evidenceImages.map(
											(image, index) => (
												<img
													key={index}
													src={image}
													alt="evidence"
													className="w-full max-h-[120px] rounded-lg object-cover"
												/>
											)
										)}
									</div>
								)}
						</div>
					</div>

					{/* Products */}
					<div className="mt-14">
						<Typography className="!mb-4 !text-[16px] !font-medium !text-[#05422C]">
							Products List
						</Typography>

						<div className="overflow-x-auto">
							<table className="w-full border-separate border-spacing-y-0">
								<thead>
									<tr className="bg-[#F2F5F3]">
										{[
											"Products",
											"QTY",
											"Date",
											"Price",
											"Order Total",
										].map(
											(
												header,
												idx
											) => (
												<th
													key={
														header
													}
													className={`px-4 py-5 text-left text-[14px] font-semibold text-[#519A09]
                        ${idx === 0
															? "rounded-l-[14px]"
															: ""
														}
                        ${idx === 4
															? "rounded-r-[14px]"
															: ""
														}
                      `}
												>
													{header}
												</th>
											)
										)}
									</tr>
								</thead>

								<tbody>
									<tr className="bg-[#FFFFFF] rounded-lg">
										{/* Product */}
										<td className="border-b border-[#D9E3D7] px-4 py-5">
											<div className="flex items-center gap-4">
												<img
													src={
														product.image
													}
													alt={
														requestData?.product
													}
													className="h-16 w-16 rounded-md object-cover"
												/>

												<p className="text-[14px] leading-5.5 text-[#585858]">
													{requestData?.product ??
														"-"}
												</p>
											</div>
										</td>

										{/* Qty */}
										<td className="border-b border-[#DDE4DB] px-4 py-5 text-[14px] leading-5.5 text-[#585858]">
											x{product.qty}
										</td>

										{/* Date */}
										<td className="border-b border-[#DDE4DB] px-4 py-5 text-[14px] leading-5.5 text-[#585858]">
											{product.date}
										</td>

										{/* Price */}
										<td className="border-b border-[#DDE4DB] px-4 py-5 text-[14px] leading-5.5 text-[#585858]">
											{formatCurrency(
												product.price
											)}
										</td>

										{/* Total */}
										<td className="border-b border-[#DDE4DB] px-4 py-5 text-[14px] leading-5.5 text-[#585858]">
											{formatCurrency(
												requestData?.totalSpend ??
												0
											)}
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						{/* Refund Amount */}
						<div className="mt-8 flex flex-wrap items-center gap-2">
							<span className="text-[15px] text-[#519A09]">
								Refund Amount Requested:
							</span>

							<span className="text-[15px] text-[#585858] leading-5.5">
								{formatCurrency(
									requestData?.totalSpend ??
									0
								)}
							</span>
						</div>
					</div>

					{/* Bottom */}
					<div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
						{/* Return Method */}
						<div>
							<Typography className="!mb-4 !text-[16px] !font-medium !text-[#01430D]">
								Return Method
							</Typography>

							<div className="flex flex-wrap items-center gap-2">
								<span className="text-[15px] text-[#519A09]">
									Delivery Method
								</span>

								<span className="text-[15px] leading-5.5 text-[#585858]">
									GIG Logistics
								</span>
							</div>
						</div>

						{/* Customer Notes */}
						<div>
							<Typography className="!mb-4 !text-[16px] !font-medium !text-[#05422C]">
								Customer Notes
							</Typography>

							<Typography className="w-full max-w-[327px] !text-[16px] !leading-[150%] !text-[#060709]">
								The bike’s gear system was
								faulty on delivery.
							</Typography>
						</div>
					</div>

					{/* Footer Buttons */}
					<div className="mt-16 flex items-center justify-between">
						<button className="rounded-lg bg-[#01430D] px-8 py-4 text-[18px] font-normal text-white">
							Send Email
						</button>

						<button
							onClick={onClose}
							className="rounded-lg border border-[#01430D] bg-[#DAE4DC] px-8 py-4 text-[18px] text-[#01430D]"
						>
							Cancel
						</button>
					</div>
				</DialogContent>
			</Dialog>
		);
	};

export default RequestDetailsModal;