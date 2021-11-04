export default function Sequencer() {
    return (
        <>
            <div className="flex-col">
                <div className="flex mb-3 justify-between">
                    <h1 className="text-2xl font-bold mr-2 flex justify-center items-center">SEQUENCER</h1>
                    <div className="flex">
                    <div className="border rounded-md shadow-md bg-green-500 w-24 py-2">
                        <span className="text-white flex justify-center">
                            <button>Play</button>
                        </span>
                    </div>
                    <div className="border rounded-md shadow-md bg-red-600 w-24 py-2 ml-2">
                        <span className="text-white flex justify-center">
                            <button>Stop</button>
                        </span>
                    </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center mr-3">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                    <div className="flex-col justify-center">
                        <div className="border rounded-md w-14 h-14 bg-gray-400 shadow-md" />
                        <div className="flex justify-center">
                            <input type="checkbox" className="items-center mt-3"/>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center mt-5">
                    <div className="flex mr-3 text-2xl font-bold">
                        <h1>RATE</h1> 
                    </div>
                    <div className="flex justify-center">
                        <input type="range" className="w-96"/>
                    </div>
                </div>
            </div>
        </>
    )
}