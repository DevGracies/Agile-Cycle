"use client";


import {
  useEffect,
  useState,
} from "react";



interface PriceRangeSliderProps {


  min: number;

  max: number;

  minValue: number;

  maxValue: number;


  onChange:
  (values: {
    min: number;
    max: number;
  }) => void;


}



export default function PriceRangeSlider({

  min,

  max,

  minValue,

  maxValue,

  onChange,

}: PriceRangeSliderProps) {



  const [
    range,
    setRange
  ] = useState({

    min: minValue,

    max: maxValue,

  });



  useEffect(() => {

    setRange({

      min: minValue,

      max: maxValue,

    });


  }, [
    minValue,
    maxValue
  ]);





  const updateRange = (
    values: {
      min: number;
      max: number;
    }
  ) => {


    setRange(values);


    onChange(values);


  };





  return (

    <div className="
space-y-5
">


      <div className="
flex
justify-between
text-sm
text-gray-600
">


        <span>

          {formatPrice(range.min)}

        </span>


        <span>

          {formatPrice(range.max)}

        </span>


      </div>




      <div className="
space-y-4
">


        <input

          type="range"

          min={min}

          max={max}

          value={range.min}

          onChange={(e) => {

            const value =
              Number(e.target.value);


            updateRange({

              min:
                Math.min(
                  value,
                  range.max - 1000
                ),

              max:
                range.max

            });


          }}
          className="accent-secondary"

        />


        <input

          type="range"

          min={min}

          max={max}

          value={range.max}

          onChange={(e) => {


            const value =
              Number(e.target.value);


            updateRange({

              min:
                range.min,

              max:
                Math.max(
                  value,
                  range.min + 1000
                ),

            });
          }}
          className = "accent-secondary"

        />


      </div>


    </div>

  );

}





function formatPrice(value: number) {

  return new Intl.NumberFormat(
    "en-NG",
    {

      style: "currency",

      currency: "NGN",

      maximumFractionDigits: 0,

    }

  ).format(value);


}