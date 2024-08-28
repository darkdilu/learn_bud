import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { jobData } from "../../../../utils/jobData";
import TableCard from "./TableCard";
import {
  useDeleteMyJobMutation,
  useGetMyJobsQuery,
} from "../../../../slices/employerApiSlice";
import Loading from "../../../Loading";
import { Link } from "react-router-dom";
import DeletePrompt from "./DeletePrompt";
import { toast } from "react-toastify";

const rows = [];

export default function JobTable() {
  const { data, isLoading } = useGetMyJobsQuery();
  const [prompt, setPrompt] = React.useState(false);
  const [jobId, setJobId] = React.useState("");
  const [deleteMyJob] = useDeleteMyJobMutation();
  const { refetch } = useGetMyJobsQuery();

  const function1 = () => {
    setPrompt(false);
    setJobId("");
  };

  const function2 = async () => {
    try {
      const res = await deleteMyJob(jobId).unwrap();
      if (res.msg === "Job deleted successfully") {
        toast.success("job deleted successfully");
        setPrompt(false);
        setJobId("");
        refetch();
        window.scrollTo(0, 0);
      } else {
        toast.error(res.msg);
        setPrompt(false);
        setJobId("");
        window.scrollTo(0, 0);
      }
    } catch (err) {
      toast.error(err?.data?.msg || err?.error);
    }
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <TableContainer component={Paper} className="rounded-xl">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="bg-background2">
            <TableRow>
              <TableCell>Job</TableCell>
              <TableCell align="center">Applications</TableCell>
              <TableCell align="center">Created</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-primary">
            {data.length > 0 &&
              data.map((row) => (
                <TableRow
                  key={row._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <TableCard
                      image={row.owner.logo ? row.owner.logo : "/nocompany.png"}
                      name={row.jobTitle}
                      category={row.category}
                      location={row.jobLocation}
                    />
                  </TableCell>
                  <TableCell align="center">{row.applied?.length}</TableCell>
                  <TableCell align="center">
                    {row.createdAt.toString().slice(0, 10)}
                  </TableCell>
                  <TableCell align="center">
                    {row.isActive ? (
                      <span className="text-green-500">Active</span>
                    ) : (
                      <span className=" text-red-500">Inactive</span>
                    )}
                  </TableCell>
                  <TableCell align="center">
                    <div className="flex gap-3 justify-between">
                      <Link
                        to={`/employer/dashboard/manage-jobs/${row._id}`}
                        className="text-blue-700 bg-blue-100 hover:bg-blue-200 p-2 rounded-xl"
                      >
                        View
                      </Link>
                      <Link
                        to={`/employer/dashboard/manage-jobs/edit/${row._id}`}
                        className="text-yellow-700 bg-yellow-100 hover:bg-yellow-200 p-2 rounded-xl"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => {
                          setPrompt(true);
                          setJobId(row._id);
                        }}
                        className="text-red-700 bg-red-100 hover:bg-red-200 p-2 rounded-xl"
                      >
                        Delete
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      {prompt && <DeletePrompt function1={function1} function2={function2} />}
    </>
  );
}
