"use client";

import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Loader from "../../ui/Loader";
import { useCreateProductForm } from "@/src/hooks/useCreateProductForm";
import { ProductType } from "@/src/services/cart.service";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useProduct } from "@/src/hooks/useProducts";

export default function EditProductPage({ edit }: { edit?: string }) {
  const searchParams = useSearchParams();

  const editId = searchParams.get("edit");

  const isEditing = !!editId;
  const {
    data,
    isLoading
  } = useProduct(editId as string);

  const {
    register,
    control,
    watch,
    setValue,
    submit,

    errors,

    productType,
    setProductType,

    imageFiles,
    imagePreview,

    selectedImage,
    setSelectedImage,

    addImage,
    removeImage,

    isUnlimited,
    setIsUnlimited,

    taxIncluded,
    setTaxIncluded,

    isPublishing,
    imageError,
    populateForm,

    colors,
    // variants,
    // features,
    // specs,
  } = useCreateProductForm();

  console.log("productType", productType)
  useEffect(() => {
    if (!data?.data) return;
    populateForm(data?.data);
  }, [data, populateForm]);

  const hasImages =
    imageFiles.some(Boolean) ||
    imagePreview.some(Boolean);
    
  return (
    <form
      onSubmit={submit}
      className=" min-h-screen p-8 font-sans text-gray-700 bg-[#F2F5F3] max-[525px]:p-3 "
    >
      {/* HEADER */}
      <div
        className=" bg-white mb-10 max-w-7xl mx-auto rounded-xl justify-between flex items-center overflow-hidden h-20 bg-gradient-to-r from-[#ffffff] to-[#F2F5F3] "
      >
        <div
          className=" h-full flex items-center pl-8 pr-12 bg-gradient-to-r from-[#01430D] to-[#519A09] text-white font-semibold text-sm "
          style={{
            clipPath:
              "polygon(0% 0%,100% 0,85% 100%,0% 100%)",
            minWidth: "108.5px"
          }}
        >
          {
            isEditing
              ? "Edit Product"
              : "Add New Product"
          }
        </div>

        <button
          type="submit"
          disabled={!hasImages || isPublishing}
          className=" bg-[#0a3614] mr-[1rem] cursor-pointer text-white px-8 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all shadow-md disabled:opacity-50 "
        >
          {
            isPublishing
              ? <Loader text={isEditing ? "Updating..." : "Publishing..."} />
              : isEditing
                ? "Update Product"
                : "Publish Product"
          }
        </button>
      </div>

      <div
        className=" max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch "
      >
        {/* LEFT COLUMN */}
        <div
          className=" bg-white rounded-[0.5rem] overflow-hidden h-full "
        >
          {/* BASIC DETAILS */}
          <div
            className=" p-4 border-b border-gray-50"
          >
            <h3
              className=" font-bold mb-3 mt-2 text-sm uppercase tracking-wide "
            >
              Basic details
            </h3>
            <div className="space-y-5">
              <div>
                <label
                  className=" text-xs text-gray-400 mb-2 block font-semibold "
                >
                  Product name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm font-medium focus:outline-none focus:border-green-200 focus:bg-[#f2f5f3] transition-colors "
                />
                {
                  errors.name &&
                  (
                    <p
                      className=" text-xs text-red-500 mt-1 "
                    >
                      {errors.name.message}
                    </p>
                  )
                }
              </div>
              <div>
                <label
                  className=" text-xs text-gray-400 mb-2 block font-semibold "
                >
                  Product Description
                </label>
                <textarea
                  rows={6}
                  {...register("description")}
                  placeholder="Describe your product..."
                  className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-4 text-xs leading-relaxed focus:outline-none focus:border-green-200 focus:bg-[#f2f5f3] transition-colors "
                />
                {
                  errors.description &&
                  (
                    <p
                      className=" text-xs text-red-500 mt-1 "
                    >
                      {errors.description.message}
                    </p>
                  )
                }
              </div>
              <div>
                <label
                  className=" text-xs text-gray-400 mb-2 block font-semibold "
                >
                  Short Description
                </label>
                <textarea
                  rows={3}
                  {...register("shortDescription")}
                  placeholder="Short product summary..."
                  className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-xs focus:outline-none focus:border-green-200 focus:bg-[#f2f5f3] "
                />
              </div>
            </div>
          </div>

          {/* PRICING */}
          <div
            className=" p-4 border-b border-gray-50 "
          >
            <h3
              className=" font-bold mb-6 text-sm uppercase tracking-wide "
            >
              Pricing
            </h3>
            <div className="space-y-5">
              <div>
                <label
                  className=" text-xs text-gray-400 mb-2 block font-semibold "
                >
                  Product price
                </label>
                <div
                  className=" relative bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] "
                >
                  <input
                    type="number"
                    {...register(
                      "price",
                      {
                        valueAsNumber: true
                      }
                    )}
                    className=" w-full p-3 text-sm font-semibold focus:outline-none "
                  />
                  <div
                    className=" absolute right-3 top-2.5 flex items-center gap-1 border-l pl-2 border-gray-200 "
                  >
                    <span>
                      🇳🇬
                    </span>


                    <KeyboardArrowDownOutlinedIcon
                      fontSize="small"
                      className="text-gray-400"
                    />


                  </div>
                </div>
                {
                  errors.price &&
                  <p
                    className=" text-xs text-red-500 mt-1 "
                  >
                    {errors.price.message}
                  </p>
                }
              </div>
              <div>
                <label
                  className=" text-xs font-bold text-gray-400 mb-2 block "
                >
                  Discounted Price
                  <span
                    className="text-[#4f9a14]"
                  >
                    (optional)
                  </span>
                </label>
                <div
                  className=" relative flex items-center bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] px-3 "
                >
                  <span
                    className=" bg-[#0a3614] text-white px-2 py-1 rounded text-xs font-bold "
                  >
                    N
                  </span>
                  <input
                    type="number"
                    {...register(
                      "discountPrice",
                      {
                        valueAsNumber: true
                      }
                    )}
                    className=" flex-grow bg-transparent p-3 text-sm font-bold text-[#4f9a14] focus:outline-none "
                  />
                  {
                    errors.discountPrice &&
                    <p
                      className=" text-xs text-red-500 mt-1 "
                    >
                      {errors.discountPrice.message}
                    </p>
                  }
                </div>
              </div>
              <div>
                <p
                  className=" text-xs text-gray-400 mb-4 font-semibold "
                >
                  Tax Included
                </p>
                <div
                  className=" flex gap-8 "
                >
                  {
                    ["yes", "no"].map(
                      (item) => (
                        <div
                          key={item}
                          onClick={() =>
                            setTaxIncluded(
                              item as "yes" | "no"
                            )
                          }
                          className=" flex items-center gap-3 cursor-pointer "
                        >
                          <div
                            className={` w-4 h-4 rounded-full border-2 flex items-center justify-center

                              ${taxIncluded === item
                                ?
                                "border-[#4f9a14]"
                                :
                                "border-gray-300"
                              }
                              `}
                          >


                            {
                              taxIncluded === item &&
                              <div
                                className=" w-1.5 h-1.5 rounded-full bg-[#4f9a14] "
                              />
                            }
                          </div>
                          <span
                            className=" text-xs font-bold "
                          >
                            {
                              item === "yes"
                                ?
                                "Yes"
                                :
                                "No"
                            }
                          </span>
                        </div>
                      )
                    )
                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INVENTORY */}

        <div
          className=" bg-white rounded-[0.5rem] shadow-sm border border-gray-100 overflow-hidden h-full "
        >

          {/* IMAGE UPLOAD SECTION */}
          <div
            className=" p-4 border-b border-gray-50 "
          >
            <h3
              className=" font-bold mb-6 mt-4 text-sm uppercase tracking-wide "
            >
              Upload Product Image
            </h3>
            <div
              className=" relative w-full aspect-[16/9] bg-[#fcfdfc] rounded-[0.5rem] overflow-hidden border border-[#e8f3e8] mb-6 flex items-center justify-center "
            >
              {
                imagePreview[selectedImage]
                  ?
                  <img
                    src={imagePreview[selectedImage]}
                    className=" w-full h-full object-cover "
                    alt="Selected product"
                  />
                  :
                  <div className="text-center">
                    <div
                      className=" text-xs text-gray-300 italic uppercase font-bold tracking-widest "
                    >
                      No Image Selected
                    </div>
                    {imageError && (
                      <p className="mt-2 text-xs text-red-500">
                        {imageError}
                      </p>
                    )}
                  </div>
              }
              {
                imagePreview[selectedImage] &&
                (
                  <button
                    type="button"
                    onClick={() => {
                      const input =
                        document.getElementById(
                          "product-images"
                        ) as HTMLInputElement;

                      input?.click();

                    }}
                    className=" absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-[10px] font-bold px-4 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-gray-100 hover:bg-white transition-all "
                  >
                    Replace
                  </button>
                )
              }
            </div>
            <input
              id="product-images"
              type="file"
              multiple
              accept="image/*"
              hidden
              onChange={(e) => {
                const file = e.target.files?.[0];

                if (!file) return;

                addImage(file, selectedImage);
                e.target.value = "";
              }}
            />
            <div
              className=" grid grid-cols-4 gap-4 "
            >
              {
                [0, 1, 2, 3].map(
                  (index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedImage(index);
                        if (!imagePreview[index]) {
                          const input =
                            document.getElementById(
                              "product-images"
                            ) as HTMLInputElement;
                          input?.click();
                        }
                      }}
                      className={`relative aspect-square rounded-[0.5rem] border-2 cursor-pointer flex flex-col items-center justify-center transition-all
                      ${selectedImage === index
                          ?
                          "border-[#4f9a14] bg-[#f8faf8] scale-105 z-10"
                          :
                          "border-dashed border-[#e8f3e8] bg-white hover:border-green-300"
                        }
                          `}
                    >
                      {
                        imagePreview[index]
                          ?
                          <>
                            <img
                              src={imagePreview[index]}
                              className=" w-full h-full object-cover rounded-[0.4rem] "
                              alt={`Thumb ${index + 1}`}
                            />
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                removeImage(index);
                              }}
                              className=" absolute top-1.5 right-1.5 bg-white text-gray-500 rounded-full w-5 h-5 flex items-center justify-center shadow-md border border-gray-100 hover:text-red-500 transition-all z-20 "
                            >
                              ×
                            </button>
                          </>
                          :
                          <>
                            <div
                              className=" w-8 h-8 bg-[#f0f9f0] rounded-full flex items-center justify-center mb-1 "
                            >
                              <span
                                className=" text-[#4f9a14] text-lg font-bold "
                              >
                                +
                              </span>
                            </div>
                            <span
                              className=" text-[8px] font-bold text-[#4f9a14] uppercase tracking-tighter "
                            >
                              Add Image
                            </span>
                          </>
                      }
                    </div>
                  ))}
            </div>
          </div>

          {/* CATEGORY SECTION */}
          <div
            className=" p-4 border-b border-gray-50 "
          >
            <h3
              className=" font-bold mb-6 text-sm uppercase tracking-wide "
            >
              Category & Sub - category
            </h3>
            <div
              className=" space-y-4 mb-10 "
            >
              <div
                className="relative"
              >
                <select
                  value={productType}
                  onChange={(e) => {
                    setProductType(e.target.value as ProductType);
                    // setValue("category", "");
                  }}

                  className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3.5 text-sm appearance-none focus:outline-none focus:border-green-200 cursor-pointer font-medium focus:bg-[#f2f5f3] transition-colors "

                >
                  <option value="ebikes">
                    E-Bikes
                  </option>

                  <option value="accessories">
                    Accessories
                  </option>

                  <option value="enhancements">
                    Enhancements
                  </option>

                </select>
                <KeyboardArrowDownOutlinedIcon

                  className=" absolute right-4 top-4 text-gray-400 pointer-events-none "

                />
              </div>
              <div
                className="relative"
              >
                <select
                  {...register(
                    "category"
                  )}
                  className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3.5 text-sm appearance-none focus:outline-none focus:border-green-200 cursor-pointer font-medium focus:bg-[#f2f5f3] transition-colors "

                >
                  <option value="">
                    Select product category
                  </option>
                  {
                    productType === "ebikes" &&
                    <>
                      <option value="cruiser">
                        CRUISERS
                      </option>

                      <option value="commuter">
                        COMMUTERS
                      </option>

                      <option value="cargo">
                        CARGO
                      </option>

                      <option value="folding">
                        FOLDING
                      </option>

                      <option value="utility">
                        UTILITY
                      </option>

                      <option value="trikes">
                        TRIKES
                      </option>

                    </>
                  }
                  {
                    productType === "accessories" &&
                    <>
                      <option value="lights">
                        LIGHT
                      </option>

                      <option value="helmets">
                        HELMET
                      </option>

                      <option value="carrier bags">
                        CARRIER BAGS
                      </option>

                      <option value="phone holders">
                        PHONE HOLDER
                      </option>

                      <option value="storage">
                        STORAGE
                      </option>
                    </>
                  }
                  {
                    productType === "enhancements" &&
                    <>
                      <option value="performance">
                        PERFORMANCE
                      </option>

                      <option value="comfort">
                        COMFORT
                      </option>

                      <option value="safety">
                        SAFETY
                      </option>

                      <option value="technology">
                        TECHNOLOGY
                      </option>

                      <option value="style">
                        STYLE
                      </option>
                    </>
                  }
                </select>
                <KeyboardArrowDownOutlinedIcon
                  className=" absolute right-4 top-4 text-gray-400 pointer-events-none "

                />
              </div>
              {
                errors.category &&
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              }
            </div>
          </div>
          {/* COLORS SECTION */}
          <div className="p-4 border-b border-gray-50">
            <h3
              className="font-bold mb-6 text-sm uppercase tracking-wide"
            >
              Colors
            </h3>
            <p
              className="text-xs text-gray-400 mb-5 font-semibold uppercase tracking-tight"
            >
              Add product colors
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              {
                colors.fields.map((item, index) => (
                  <div
                    key={item.id}
                    className="relative flex items-center gap-3 bg-[#fcfdfc] border border-[#e8f3e8] rounded-lg px-3 py-2"
                  >
                    <div
                      className="w-10 h-10 rounded-lg border"
                      style={{
                        backgroundColor: item.color
                      }}
                    />
                    <div>
                      <p className="text-xs font-bold">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {item.color}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => colors.remove(index)}
                      className="text-red-500 font-bold ml-2"
                    >
                      ×
                    </button>
                    {
                      errors.colors?.[index]?.name &&
                      <p className="text-xs text-red-500">
                        {
                          errors.colors[index]?.name?.message
                        }
                      </p>
                    }
                  </div>
                ))
              }
            </div>
            <ColorInput
              onAdd={(color) => {
                colors.append(color)
              }}
            />
            {
              errors.colors &&
              <p className="text-xs text-red-500">
                {errors.colors.message}
              </p>
            }

          </div>

          {/* VARIANTS SECTION */}
          {/* <div
            className=" p-4 border-b border-gray-50 "
          >
            <div
              className=" flex items-center justify-between mb-6 "
            >
              <h3
                className=" font-bold text-sm uppercase tracking-wide "
              >
                Variants
              </h3>
              <button
                type="button"
                onClick={() =>
                  variants.append({
                    name: "",
                    value: ""
                  })
                }
                className=" text-xs font-bold text-[#4f9a14] "
              >
                + Add Variant
              </button>
            </div>

            <div
              className="space-y-4"
            >
              {
                variants.fields.map(
                  (item, index) => (
                    <div
                      key={item.id}
                      className=" grid grid-cols-2 gap-3 "
                    >
                      <input
                        placeholder="Variant name"
                        {...register(
                          `variants.${index}.name`
                        )}
                        className=" bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm focus:outline-none focus:border-green-200 "
                      />
                      <div
                        className=" flex gap-2 "
                      >
                        <input
                          placeholder="Variant value"
                          {...register(
                            `variants.${index}.value`
                          )}
                          className=" flex-1 bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm focus:outline-none focus:border-green-200 "

                        />
                        <button
                          type="button"
                          onClick={() =>
                            variants.remove(index)
                          }
                          className=" text-red-500 text-sm font-bold "
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  )
                )
              }
              {
                errors.variants &&
                <p className="text-xs text-red-500">
                  {errors.variants.message}
                </p>
              }
            </div>
          </div> */}

          {/* FEATURES SECTION */}
          {/* <div
            className=" p-4 border-b border-gray-50 "
          >
            <div
              className=" flex items-center justify-between mb-6 "
            >
              <h3
                className=" font-bold text-sm uppercase tracking-wide "
              >
                Features
              </h3>
              <button
                type="button"
                onClick={() =>
                  features.append({
                    title: "",
                    description: ""
                  })
                }
                className=" text-xs font-bold text-[#4f9a14] "
              >
                + Add Feature
              </button>
            </div>
            <div
              className="space-y-5"
            >
              {
                features.fields.map(
                  (feature, index) => (
                    <div
                      key={feature.id}
                      className=" space-y-3 bg-[#fcfdfc] border border-[#e8f3e8] rounded-lg p-4 "
                    >
                      <div
                        className=" flex justify-between "
                      >
                        <p
                          className=" text-xs font-bold text-gray-400 "
                        >
                          Feature {index + 1}
                        </p>
                        <button
                          type="button"
                          onClick={() =>
                            features.remove(index)
                          }
                          className=" text-red-500 text-xs font-bold "
                        >
                          Remove
                        </button>
                      </div>
                      <input
                        placeholder="Feature title"
                        {...register(
                          `features.${index}.title`
                        )}
                        className=" w-full bg-white border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm focus:outline-none focus:border-green-200 "

                      />
                      <textarea
                        rows={3}
                        placeholder="Feature description"
                        {...register(
                          `features.${index}.description`
                        )}
                        className=" w-full bg-white border border-[#e8f3e8] rounded-[0.5rem] p-3 text-xs focus:outline-none focus:border-green-200 "

                      />
                    </div>
                  )
                )
              }
              {
                errors.features &&
                <p className="text-xs text-red-500">
                  {errors.features.message}
                </p>
              }
            </div>
          </div> */}
        </div>

        <div
          className="p-4"
        >
          <h3
            className=" font-bold mb-6 text-sm uppercase tracking-wide "
          >
            Inventory
          </h3>
          <div
            className=" grid grid-cols-2 gap-4 mb-6"
          >
            <div>
              <label
                className=" text-xs text-gray-400 mb-2 block font-semibold "
              >
                Stock Quantity
              </label>
              <input
                type="number"
                {...register(
                  "stock",
                  {
                    valueAsNumber: true
                  }
                )}
                className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm focus:outline-none "
              />
            </div>
            <div>
              <label
                className=" text-xs text-gray-400 mb-2 block font-semibold "
              >
                Stock Status
              </label>
              <select
                {...register("inventoryStatus")}
                className=" w-full bg-[#fcfdfc] border border-[#e8f3e8] rounded-[0.5rem] p-3 text-sm focus:outline-none "
              >
                <option value="in-stock">
                  In Stock
                </option>
                <option value="low-stock">
                  Low Stock
                </option>
                <option value="out-of-stock">
                  Out Of Stock
                </option>
              </select>
              {
                errors.stock &&
                <p className="text-xs text-red-500">
                  {errors.stock.message}
                </p>
              }
            </div>
          </div>
          <div className="space-y-4">
            <div
              className=" flex items-center gap-3 "
            >
              <div
                onClick={() =>
                  setIsUnlimited(!isUnlimited)
                }
                className={` w-10 h-5 rounded-full relative cursor-pointer

                    ${isUnlimited
                    ?
                    "bg-[#4f9a14]"
                    :
                    "bg-gray-200"
                  }
                    `}
              >
                <div
                  className={` w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all

                  ${isUnlimited
                      ?
                      "right-0.5"
                      :
                      "left-0.5"
                    }
                  `}
                />
              </div>
              <span className="text-xs font-bold">
                Unlimited
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}



function ColorInput({
  onAdd
}: {
  onAdd: (value: {
    name: string;
    color: string;
  }) => void
}) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  function addColor() {
    if (!name || !color)
      return;

    onAdd({
      name,
      color
    });
    setName("");
    setColor("");
  }
  return (
    <div
      className=" flex  items-center  gap-3 border  border-[#e8f3e8] rounded-lg bg-[#fcfdfc] p-3 "
    >
      <input
        placeholder="Color name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className=" w-28 text-xs bg-transparent focus:outline-none "
      />
      <input
        type="text"
        placeholder="#FFFFFF"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className=" w-24 text-xs bg-transparent focus:outline-none "
      />
      <button
        type="button"
        onClick={addColor}
        className=" text-[#4f9a14] font-bold text-xl "
      >
        +
      </button>
    </div>
  )
}