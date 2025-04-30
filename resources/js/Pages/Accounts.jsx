import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DataTable from 'datatables.net-react';
import DT from 'datatables.net-dt';
import 'datatables.net-select-dt';
import 'datatables.net-responsive-dt';

DataTable.use(DT);

export default function Dashboard() {
    const columns = [
        {
            data:null,
            title:'Sr.No.',
            render: function(data, type, row, meta){
                return meta.row + 1;
            }
        },{
            data:'title',
            title:'Title'
        },{
            data:'amount',
            title:'Amount',
            render:function(data, type, row, meta){
                return `Rs ` + data;
            }
        },{
            data:'date',
            title:'Date',
            render:function(data, type, row, meta){
                var date = new Date(data);
                return date.getDate() + '/' + (date.getMonth() + 1) +'/'+ date.getFullYear();
            }
        },{
            data:null,
            title:'Action',
            render:function (data,type,row,meta) {
                return `
                    <button class="edit-btn text-blue-600" data-id="${row.id}">Edit</button>
                    <button class="delete-btn text-red-600 ml-2" data-id="${row.id}">Delete</button>
                `;
            }
        }
    ]
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Accounts
                </h2>
            }
        >
            <Head title="Accounts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="font-bold p-6 text-gray-900">
                            Account Manager
                        </div>
                        <div className="p-6 text-gray-900">
                            <DataTable className='display' columns={columns}
                                 ajax='/retrieveAccountsData' options={{responsive:true}} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
