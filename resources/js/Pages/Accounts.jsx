import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {useEffect, useRef} from "react";

const MySwal = withReactContent(Swal)
DataTable.use(DT);
export default function Dashboard() {
    const tableRef = useRef(null);

    const handleDelete = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: 'This action will delete the record.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`/deleteAccount`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content'),
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ id: id })
                }).then((res) => {
                    console.log(res,"hey res")
                    if (res.ok) {
                        MySwal.fire('Deleted!', '', 'success');
                        if (tableRef.current) {
                            tableRef.current.dt().ajax.reload()
                        }

                    } else {
                        console.log(res);
                        MySwal.fire('Error!', 'Failed to delete.', 'error');
                    }
                }).catch(() => {
                    MySwal.fire('Error!', 'Request failed.', 'error');
                });
            }
        });
    };

    const columns = [
        {
            data: null,
            title: 'Sr.No.',
            render: (data, type, row, meta) => meta.row + 1
        },
        { data: 'title', title: 'Title' },
        {
            data: 'amount',
            title: 'Amount',
            render: (data) => `Rs ${data}`
        },
        {
            data: 'date',
            title: 'Date',
            render: (data) => {
                const date = new Date(data);
                return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
            }
        },
        {
            data: null,
            title: 'Action',
            render: (data, type, row) => {
                return `
                <button class="edit-btn text-blue-600" data-id="${row.id}">
                        Edit
                    </button>
                    <button class="delete-btn text-red-600" data-id="${row.id}">
                        Delete
                    </button>
                `;
            }
        }
    ];

    // Attach events safely after render
    const options = {
        responsive: true,
        drawCallback: function () {
            document.querySelectorAll('.delete-btn').forEach((btn) => {
                btn.onclick = () => handleDelete(btn.dataset.id);
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="text-xl font-semibold leading-tight text-gray-800">Accounts</h2>}
        >
            <Head title="Accounts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="font-bold p-6 text-gray-900">Account Manager</div>
                        <div className="p-6 text-gray-900">
                            <table ref={tableRef} className="display w-full" />
                            <DataTable
                                className="display w-full"
                                columns={columns}
                                ajax="/retrieveAccountsData"
                                options={options}
                                ref={tableRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

