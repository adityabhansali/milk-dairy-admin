export default function Button({ className = '', children, ...props }) {
    return (
        <button
            {...props}
            className={
                'inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ' +
                className
            }
        >
            {children}
        </button>
    );
}
