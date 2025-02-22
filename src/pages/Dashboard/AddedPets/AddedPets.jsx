import { useState, useEffect, useMemo } from 'react';
import { usePagination, useSortBy, useTable } from 'react-table';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useAuth } from '../../../providers/AuthProvider';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft, MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const AddedPets = () => {
    const [pets, setPets] = useState([]);
    const [pageSize, setPageSize] = useState(10);
    const [loading, setLoading] = useState(true);
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { user, loading: authLoading } = useAuth();

    useEffect(() => {
        if (authLoading) return;

        const fetchPets = async () => {
            setLoading(true);
            try {
                const response = await axiosSecure.get('/user_pets');
                setPets(Array.isArray(response.data.pets) ? response.data.pets : []);
            } catch (error) {
                console.error('Error fetching pets', error);
                setPets([]);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchPets();
        }
    }, [axiosSecure, user, authLoading]);

    const handleDelete = async (petId) => {
        try {
            await axiosSecure.delete(`/pets/${petId}`);
            setPets((prevPets) => prevPets.filter((pet) => pet._id !== petId));
            Swal.fire('Deleted!', 'Your pet has been deleted.', 'success');
        } catch (error) {
            console.error('Error deleting pet', error);
            Swal.fire('Error!', 'There was an issue deleting the pet.', 'error');
        }
    };

    const handleAdopt = async (petId) => {
        try {
            await axiosSecure.patch(`/pets/${petId}`, { adopted: true });
            setPets((prevPets) =>
                prevPets.map((pet) => (pet._id === petId ? { ...pet, adopted: true } : pet))
            );
        } catch (error) {
            console.error('Error updating adoption status', error);
        }
    };

    const columns = useMemo(
        () => [
            {
                Header: 'Serial Number',
                accessor: (row, index) => index + 1,
                id: 'serial',
            },
            {
                Header: 'Pet Name',
                accessor: 'petName',
            },
            {
                Header: 'Pet Category',
                accessor: 'petCategory',
            },
            {
                Header: 'Pet Image',
                accessor: 'petImage',
                Cell: ({ value }) => (
                    <img
                        src={value}
                        alt="Pet"
                        className="w-16 h-16 object-cover"
                    />
                ),
            },
            {
                Header: 'Adoption Status',
                accessor: 'adopted',
                Cell: ({ value }) => (value ? 'Adopted' : 'Not Adopted'),
            },
            {
                Header: 'Actions',
                accessor: '_id',
                Cell: ({ value }) => (
                    <div className="space-x-2">
                        <button
                            onClick={() => navigate(`/dashboard/update_pet/${value}`)}
                            className="hover:bg-blue-500 bg-white border border-blue-500 text-blue-500 hover:text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleDelete(value)}
                            className="hover:bg-red-500 bg-white border border-red-500 text-red-500 hover:text-white px-4 py-2 rounded"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => handleAdopt(value)}
                            className="hover:bg-green-500 bg-white border border-green-500 text-green-500 hover:text-white px-4 py-2 rounded"
                        >
                            Adopted
                        </button>
                    </div>
                ),
            },
        ],
        [navigate]
    );

    const data = useMemo(() => pets, [pets]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize: setTablePageSize,
        state: { pageIndex },
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize },
        },
        useSortBy,
        usePagination
    );

    const handlePageSizeChange = (size) => {
        setPageSize(size);
        setTablePageSize(size);
    };

    if (loading || authLoading) {
        return <span className="loading loading-infinity loading-lg mx-auto flex justify-center my-20"></span>;
    }

    return (
        <div className="mx-auto p-8 bg-white shadow-lg rounded-lg font-sourceSans3">
            <h1 className="text-2xl font-bold mb-6 text-center">My Added Pets</h1>
            <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    key={column.id}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody
                    {...getTableBodyProps()}
                    className="bg-white divide-y divide-gray-200"
                >
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={row.id}>
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-6 py-4 whitespace-nowrap"
                                        key={cell.column.id}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className="pagination flex justify-between mt-4">
                <div className="flex items-center space-x-2">
                    <button onClick={() => gotoPage(0)} disabled={!canPreviousPage} className="pagination-btn">
                        {<MdKeyboardDoubleArrowLeft />}
                    </button>
                    <button onClick={previousPage} disabled={!canPreviousPage} className="pagination-btn">
                        {<MdKeyboardArrowLeft  />}
                    </button>
                    <button onClick={nextPage} disabled={!canNextPage} className="pagination-btn">
                        {<MdKeyboardArrowRight />}
                    </button>
                    <button onClick={() => gotoPage(pageOptions.length - 1)} disabled={!canNextPage} className="pagination-btn">
                        {<MdKeyboardDoubleArrowRight />}
                    </button>
                </div>
                <span className="text-sm">
                    Page <strong>{pageIndex + 1} of {pageOptions.length}</strong>
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => handlePageSizeChange(Number(e.target.value))}
                    className="form-select"
                >
                    {[10, 20, 30, 40, 50].map((size) => (
                        <option key={size} value={size}>
                            Show {size}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default AddedPets;