import Link from "next/link";
import IMS from "../public/images/IMS.png";
import Image from "next/image";
function page() {
  return (
    <div className="flex justify-center">
      <div className="sm:mx-8 mx-2 py-10 max-w-3xl relative top-28 bg-white shadow-2xl rounded-2xl overflow-hidden mb-20">
        <Image
          src={IMS}
          alt="Inventory Management System"
          className="w-full h-64 object-cover rounded-t-lg border-b border-gray-200"
        />
        <div className="px-6 py-8">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
            Inventory Management System Overview
          </h1>
          <p className="text-lg mb-6 text-gray-700 leading-relaxed">
            The Inventory Management System (IMS) helps users manage their
            inventory efficiently, offering features like:
          </p>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Add, Delete, and Edit Items
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Easily manage your inventory by adding new items, deleting old
                ones, or editing existing entries as needed.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Categories and Sorting
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Items are grouped by category for easy navigation. Users can
                sort items based on name, category, or price.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Filtering and Clear Sorting
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Filter inventory items by category to focus on specific groups,
                and clear sorting to revert to the default view.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-800">
                Calculate Total Price
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Automatically calculates the total price of all items in the
                inventory, allowing for quick insights into the total value.
              </p>
            </div>
          </div>

          <p className="mt-8 text-lg text-gray-800 leading-relaxed">
            This system is designed for businesses, individuals, or
            organizations looking to effectively manage their inventory with
            modern, user-friendly features.
          </p>

          <Link
            href="https://inventory-management-system-proj.netlify.app/"
            className="mt-6 block w-max mx-auto text-xl text-blue-600 font-bold hover:text-blue-800 transition duration-300 ease-in-out"
          >
            Explore the Project
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
