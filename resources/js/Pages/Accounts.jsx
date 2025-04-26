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
            data:'id',
            title:'Sr.No.'
        },{
            data:'title',
            title:'Title'
        },{
            data:'date',
            title:'Date'
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
                        <div className="p-6 text-gray-900">
                            Account Manager
                        </div>
                        <div className="p-6 text-gray-900">
                            <DataTable className='display' columns={columns}
                                 ajax='/retrieveAccountsData' options={{responsive:true,select:true}} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
