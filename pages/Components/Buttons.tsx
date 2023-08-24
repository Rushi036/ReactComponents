import React from "react";
import { Delete, Edit, AddCircle } from "@mui/icons-material";

const Buttons = () => {
  return (
    <>
      <div className="text-xl border-b-2  border-blue-200 pb-2">Buttons</div>
      <div className="flex pt-8 justify-around">
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">Text Buttons</div>
            <button className="btn rounded-md bg-gray-200 text-white mt-4 p-2 mx-2 hover:bg-gray-300">
              Delete
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2 hover:bg-gray-300">
              Edit
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2 hover:bg-gray-300">
              Add
            </button>
          </div>
        </div>
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">Icon Buttons</div>

            <button className="btn rounded-md bg-gray-200 text-white mt-4 p-2 mx-2 hover:bg-gray-300">
              <Delete />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2 hover:bg-gray-300">
              <Edit />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2 hover:bg-gray-300">
              <AddCircle />
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-8 justify-around">
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1">Button Group</div>
            <div className="inline-flex">
              <button className="btn bg-gray-200 text-white mt-4 p-2 px-4 hover:bg-gray-300">
                Delete
              </button>
              <button className="btn bg-gray-200 text-white mt-4 p-2 px-4 hover:bg-gray-300">
                Edit
              </button>
              <button className="btn  bg-gray-200 text-white mt-4 p-2 px-4 hover:bg-gray-300">
                Add
              </button>
            </div>
          </div>
        </div>
        <div className="card w-2/5 bg-white shadow-xl border-gray-400 border-b-2 rounded-lg">
          <div className="card-body p-4">
            <div className="text-base font-semibold border-b-2 border-blue-200 rounded-b-md pb-1"></div>

            {/* <button className="btn rounded-md bg-gray-200 text-white mt-4 p-2 mx-2">
              <Delete />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2">
              <Edit />
            </button>
            <button className="btn rounded-md bg-gray-200 text-white mt-2 p-2 mx-2">
              <AddCircle />
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
