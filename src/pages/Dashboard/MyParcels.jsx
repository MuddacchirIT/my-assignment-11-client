import { useQuery } from "@tanstack/react-query";
import { FiEdit } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });
  const handleParcelDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2>All of my parcels: {parcels.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No.</th>
              <th>Parcel Name</th>
              <th>Cost</th>
              <th>Payment Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <td className="text-gray-500">{index + 1}</td>
                <td className="font-semibold">{parcel.parcelName}</td>
                <td className="font-semibold">{parcel.cost}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="bg-green-400 text-black">Paid</span>
                  ) : (
                    <Link to={`/dashboard/payment/${parcel._id}`}>
                      <button className="btn btn-primary text-black">
                        Pay
                      </button>
                    </Link>
                  )}
                </td>
                <td>
                  {new Date(parcel.createdAt).toLocaleString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </td>

                <td className="space-x-6">
                  <button className="btn btn-square hover: bg-primary">
                    <FiEdit />
                  </button>
                  <button className="btn btn-square hover: bg-primary">
                    <IoSearch />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    className="btn btn-square hover: bg-primary"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyParcels;
