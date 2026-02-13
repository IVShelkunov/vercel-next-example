export default function GridPracticItem() {
    return(
        <div className="grid grid-cols-4 px-5 py-4 gap-4 w-full " >
            <div className="col-span-4 h-10 bg-[#8a3c3c]"></div>
            <div className="col-span-1 h-20 bg-[#752f96]"></div>
            <div className="col-span-2 bg-[#40879c]"></div>
            <div className="col-span-1 bg-[#3c745e]"></div>
        </div>
    );
}